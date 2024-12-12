import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters, applyFiltersAndSort } from '../store/reviewsSlice';

const Filters = () => {
  const [platform, setPlatform] = useState('');
  const [ratingRange, setRatingRange] = useState([0, 5]);
  const dispatch = useDispatch();

  const handleApplyFilters = () => {
    dispatch(setFilters({ platform, ratingRange }));
    dispatch(applyFiltersAndSort());
  };

  return (
    <div className="flex gap-4 m">
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      >
        <option value="">Все платформы</option>
        <option value="Google">Google</option>
        <option value="Яндекс">Яндекс</option>
        <option value="2ГИС">2ГИС</option>
      </select>

      <div className="">
        <div className="">Рейтинг от: {ratingRange[0]}</div>
        <input
          type="range"
          min="0"
          max="5"
          value={ratingRange[0]}
          onChange={(e) => setRatingRange([+e.target.value, ratingRange[1]])}
        />
      </div>
      <div className="">
        <div className="">Рейтинг до: {ratingRange[1]}</div>
        <input
          type="range"
          min="0"
          max="5"
          value={ratingRange[1]}
          onChange={(e) => setRatingRange([ratingRange[0], +e.target.value])}
        />
      </div>

      <button
        onClick={handleApplyFilters}
        className="border border-gray-300 rounded-md p-2 bg-blue-500 text-white"
      >
        Применить
      </button>
    </div>
  );
};

export default Filters;

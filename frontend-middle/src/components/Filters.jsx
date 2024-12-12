import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters, applyFiltersAndSort } from "../store/reviewsSlice";

const Filters = () => {
  const [platform, setPlatform] = useState("");
  const [ratingRange, setRatingRange] = useState([0, 5]);
  const dispatch = useDispatch();

  const handleApplyFilters = () => {
    dispatch(setFilters({ platform, ratingRange }));
    dispatch(applyFiltersAndSort());
  };

  return (
    <div>
      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="">Все платформы</option>
        <option value="Google">Google</option>
        <option value="Яндекс">Яндекс</option>
        <option value="2ГИС">2ГИС</option>
      </select>
      <input
        type="range"
        min="0"
        max="5"
        value={ratingRange[0]}
        onChange={(e) => setRatingRange([+e.target.value, ratingRange[1]])}
      />
      <input
        type="range"
        min="0"
        max="5"
        value={ratingRange[1]}
        onChange={(e) => setRatingRange([ratingRange[0], +e.target.value])}
      />
      <button onClick={handleApplyFilters}>Применить</button>
    </div>
  );
};

export default Filters;

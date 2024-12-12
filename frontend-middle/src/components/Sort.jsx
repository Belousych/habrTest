import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSort, applyFiltersAndSort } from "../store/reviewsSlice";

const Sort = () => {
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");
  const dispatch = useDispatch();

  const handleSortChange = (sortField) => {
    const newOrder = sortBy === sortField && order === "desc" ? "asc" : "desc";
    setSortBy(sortField);
    setOrder(newOrder);
    dispatch(setSort({ by: sortField, order: newOrder }));
    dispatch(applyFiltersAndSort());
  };

  return (
    <div className="mt-4 mb-4 flex gap-4">
      <button onClick={() => handleSortChange("date")} className="border border-gray-300 rounded-md p-2 bg-blue-500 text-white">
        Сортировать по времени ({order === "desc" ? "убывание" : "возрастание"})
      </button>
      <button onClick={() => handleSortChange("rating")} className="border border-gray-300 rounded-md p-2 bg-blue-500 text-white">
        Сортировать по рейтингу ({order === "desc" ? "убывание" : "возрастание"})
      </button>
    </div>
  );
};

export default Sort;

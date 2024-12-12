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
    <div>
      <button onClick={() => handleSortChange("date")}>
        Сортировать по времени ({order === "desc" ? "убывание" : "возрастание"})
      </button>
      <button onClick={() => handleSortChange("rating")}>
        Сортировать по рейтингу ({order === "desc" ? "убывание" : "возрастание"})
      </button>
    </div>
  );
};

export default Sort;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReviews } from "./store/reviewsSlice";
import Filters from "./components/Filters";
import Sort from "./components/Sort";
import Table from "./components/Table";

import './App.css'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "reviews/fetchReviews" });
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Отзывы</h1>
      <Filters />
      <Sort />
      <Table />
    </div>
  );
};

export default App;

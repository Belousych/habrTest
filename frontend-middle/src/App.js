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
    <div>
      <h1>Отзывы</h1>
      <Filters />
      <Sort />
      <Table />
    </div>
  );
};

export default App;

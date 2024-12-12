import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const reviews = useSelector((state) => state.reviews.filteredReviews);

  return (
    <table>
      <thead>
        <tr>
          <th>Платформа</th>
          <th>Рейтинг</th>
          <th>Дата</th>
          <th>Текст</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review) => (
          <tr key={review.id}>
            <td>{review.platform}</td>
            <td>{review.rating}</td>
            <td>{new Date(review.date).toLocaleString()}</td>
            <td>{review.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

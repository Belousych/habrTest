import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const reviews = useSelector((state) => state.reviews.filteredReviews);

  return (
    <table className="border-collapse table-fixed w-full text-sm text-left">
      <thead>
        <tr>
          <th className="border-b border-slate-700 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 ">Платформа</th>
          <th className="border-b border-slate-700 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 ">Рейтинг</th>
          <th className="border-b border-slate-700  font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 ">Дата</th>
          <th className="border-b border-slate-700 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 ">Текст</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review) => (
          <tr key={review.id}>
            <td className="border-b border-slate-700  p-4 pl-8 text-slate-700 ">{review.platform}</td>
            <td className="border-b border-slate-700  p-4 pl-8 text-slate-700 ">{review.rating}</td>
            <td className="border-b border-slate-700  p-4 pl-8 text-slate-700 ">{new Date(review.date).toLocaleString()}</td>
            <td className="border-b border-slate-700  p-4 pl-8 text-slate-700 ">{review.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

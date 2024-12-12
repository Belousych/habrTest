import React from "react";
import { useDispatch } from "react-redux";
import Column from "@/components/Column";
import { addDocument } from "@/store/store";

const KanbanBoard: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddDocument = () => {
    const title = prompt("Введите название документа:");
    if (title) {
      dispatch(addDocument({ title, status: "in-progress" }));
    }
  };

  return (
    <div className="kanban-board">
      <button onClick={handleAddDocument}>Добавить документ</button>
      <div className="columns">
        <Column status="in-progress" title="В работе" />
        <Column status="under-review" title="На проверке" />
        <Column status="completed" title="Завершено" />
      </div>
    </div>
  );
};

export default KanbanBoard;

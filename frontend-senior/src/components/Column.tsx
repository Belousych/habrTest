import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { updateDocumentStatus, Document } from "@/store/store";
import DocumentComponent from "@/components/Document";

interface ColumnProps {
  status: "in-progress" | "under-review" | "completed";
  title: string;
}

const Column: React.FC<ColumnProps> = ({ status, title }) => {
  const documents = useSelector((state: { documents: Document[] }) =>
    state.documents.filter((doc) => doc.status === status)
  );
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: "document",
    drop: (item: { id: string }) => {
      dispatch(updateDocumentStatus({ id: item.id, status }));
    },
  });

  return (
    <div ref={drop} className="column">
      <h2>{title}</h2>
      {documents.map((doc) => (
        <DocumentComponent key={doc.id} {...doc} />
      ))}
    </div>
  );
};

export default Column;

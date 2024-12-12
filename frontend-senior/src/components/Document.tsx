import React from "react";
import { useDrag } from "react-dnd";

interface DocumentProps {
  id: string;
  title: string;
}

const DocumentComponent: React.FC<DocumentProps> = ({ id, title }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "document",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="document"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {title}
    </div>
  );
};

export default DocumentComponent;

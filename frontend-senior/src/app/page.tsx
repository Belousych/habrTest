"use client";

import React from "react";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import store from "@/store/store";
import KanbanBoard from "../components/KanbanBoard";

const Page: React.FC = () => (
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <KanbanBoard />
    </DndProvider>
  </Provider>
);

export default Page;

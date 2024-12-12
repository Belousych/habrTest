import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reviewsReducer from "./reviewsSlice";
import reviewsSaga from "./reviewsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), // Использование функции
});

// Запуск саги
sagaMiddleware.run(reviewsSaga);

export default store;

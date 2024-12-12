import { call, put, takeLatest } from "redux-saga/effects";
import { setReviews } from "./reviewsSlice";
import { fetchReviewsAPI } from "../api";

function* fetchReviews() {
  try {
    const reviews = yield call(fetchReviewsAPI);
    yield put(setReviews(reviews));
  } catch (error) {
    console.error("Error loading reviews:", error);
  }
}

export default function* reviewsSaga() {
  yield takeLatest("reviews/fetchReviews", fetchReviews);
}

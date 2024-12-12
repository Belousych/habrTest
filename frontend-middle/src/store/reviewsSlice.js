import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  filteredReviews: [],
  filters: {
    platform: "",
    ratingRange: [0, 5],
  },
  sort: {
    by: "date", // или "rating"
    order: "desc", // или "asc"
  },
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews(state, action) {
      state.reviews = action.payload;
      state.filteredReviews = action.payload; // Изначально показываем все
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    applyFiltersAndSort(state) {
      let reviews = [...state.reviews];

      // Фильтрация
      const { platform, ratingRange } = state.filters;
      reviews = reviews.filter((review) => {
        const matchesPlatform =
          !platform || review.platform === platform;
        const matchesRating =
          review.rating >= ratingRange[0] && review.rating <= ratingRange[1];
        return matchesPlatform && matchesRating;
      });

      // Сортировка
      const { by, order } = state.sort;
      reviews.sort((a, b) => {
        if (by === "date") {
          return order === "asc"
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
        }
        if (by === "rating") {
          return order === "asc" ? a.rating - b.rating : b.rating - a.rating;
        }
        return 0;
      });

      state.filteredReviews = reviews;
    },
  },
});

export const { setReviews, setFilters, setSort, applyFiltersAndSort } =
  reviewsSlice.actions;

export default reviewsSlice.reducer;

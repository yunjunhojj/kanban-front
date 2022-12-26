import { configureStore } from "@reduxjs/toolkit";
import boards from "../modules/boardSlice";
import comment from "../modules/comment";

const store = configureStore({
  reducer: {
    boards,
    comment,
  },
});

export default store;

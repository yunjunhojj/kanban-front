import { configureStore } from "@reduxjs/toolkit";
import boards from "../modules/boardSlice";
import comments from "../modules/commentSlice";

const store = configureStore({
  reducer: {
    boards,
    comments,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import boards from "../modules/boardSlice";

const store = configureStore({
  reducer: {
    boards,
  },
});

export default store;

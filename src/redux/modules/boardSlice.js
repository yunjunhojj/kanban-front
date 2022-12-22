import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/boards";

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
};

// thunk
const getBoardThunk = createAsyncThunk(
  "board/getBoard",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(BASE_URL);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getBoard
    builder.addCase(getBoardThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBoardThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    });
    builder.addCase(getBoardThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // builder
  },
});

export { getBoardThunk };
export default boardSlice.reducer;

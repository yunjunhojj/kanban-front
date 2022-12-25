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

const postBoardThunk = createAsyncThunk(
  "board/postBoard",
  async (payload, thunkAPI) => {
    try {
      await axios.post(BASE_URL, payload);

      const data = await axios.get(BASE_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
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

    // postBoard
    builder.addCase(postBoardThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postBoardThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    });
    builder.addCase(postBoardThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { getBoardThunk, postBoardThunk };
export default boardSlice.reducer;

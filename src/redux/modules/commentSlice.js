import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/comments";

const getCommentThunk = createAsyncThunk(
  "comment/getComment",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(BASE_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postCommentThunk = createAsyncThunk(
  "comment/postComment",
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

const deleteCommentThunk = createAsyncThunk(
  "comment/deleteComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/${payload}`);

      const data = await axios.get(BASE_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getComment
    builder.addCase(getCommentThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCommentThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(getCommentThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // postComment
    builder.addCase(postCommentThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postCommentThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(postCommentThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // deleteComment
    builder.addCase(deleteCommentThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCommentThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(deleteCommentThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { getCommentThunk, postCommentThunk, deleteCommentThunk };
export default comments.reducer;

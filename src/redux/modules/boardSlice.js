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
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const postBoardThunk = createAsyncThunk(
  "board/postBoard",
  async (payload, thunkAPI) => {
    try {
      await axios.post(BASE_URL, payload);
      const data = await axios.post(BASE_URL);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const patchBoardThunk = createAsyncThunk(
  "board/patchBoard",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`${BASE_URL}/${payload.id}`, payload);
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
  reducers: {
    toggle: (state, action) => {
      const categoryList = [
        "todo",
        "working",
        "validate",
        "complete",
        "archive",
      ];

      if (action.payload[0] === "nextCategory") {
        const nextStep = categoryList[++action.payload[2]];
        axios.patch(`http://localhost:3001/boards/${action.payload[1]}`, {
          category: nextStep,
        });

        state.boards.forEach((todo) => {
          if (todo.id === action.payload[1]) {
            todo.category = categoryList[action.payload[2]];
          }
        });
      } else {
        const prevStep = categoryList[--action.payload[2]];
        axios.patch(`http://localhost:3001/boards/${action.payload[1]}`, {
          category: prevStep,
        });

        state.boards.forEach((todo) => {
          if (todo.id === action.payload[1]) {
            todo.category = categoryList[action.payload[2]];
          }
        });
      }
      axios.patch(`http://localhost:3001/boards/${action.payload[0]}`, {
        category: action.payload[1],
      });

      state.boards.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.category = action.payload[1];
        }
      });
    },
    deleteBoard: (state, action) => {
      axios.delete(`http://localhost:3001/boards/${action.payload}`);
      console.log(action.payload);
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload
      );
    },
  },
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
    // patch
    builder.addCase(patchBoardThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(patchBoardThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    });

    builder.addCase(patchBoardThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { toggle, deleteBoard } = boardSlice.actions;
export { getBoardThunk, postBoardThunk, patchBoardThunk };
export default boardSlice.reducer;

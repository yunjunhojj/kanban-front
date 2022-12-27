import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/boards";

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
  createBoardModalVisibility: false,
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

      //action= [ 버튼 종류 , board.id, current category] 를 입력 받습니다.
      const nameBtn = action.payload[0];
      const boardId = action.payload[1];
      let currentCategory = action.payload[2];

      if (nameBtn === "nextCategory") {
        const nextStep = categoryList[++currentCategory];
        axios.patch(`${BASE_URL}/${boardId}`, {
          category: nextStep,
        });
        state.boards.forEach((todo) => {
          if (todo.id === boardId) {
            todo.category = categoryList[currentCategory];
          }
        });
      } else {
        const prevStep = categoryList[--currentCategory];
        axios.patch(`${BASE_URL}/${boardId}`, {
          category: prevStep,
        });
        state.boards.forEach((todo) => {
          if (todo.id === boardId) {
            todo.category = categoryList[currentCategory];
          }
        });
      }
    },
    deleteBoard: (state, action) => {
      console.log("delete 확인", action.payload);
      axios.delete(`${BASE_URL}/${action.payload}`);
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload
      );
    },
    showCreateBoardModal: (state) => {
      state.createBoardModalVisibility = true;
    },
    hideCreateBoardModal: (state) => {
      state.createBoardModalVisibility = false;
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
  },
});

export const {
  showCreateBoardModal,
  hideCreateBoardModal,
  toggle,
  deleteBoard,
} = boardSlice.actions;
export { getBoardThunk, postBoardThunk };
export default boardSlice.reducer;

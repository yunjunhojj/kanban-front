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

const deleteBoardThunk = createAsyncThunk(
  "Board/deleteBoard",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const patchCategoryThunk = createAsyncThunk(
  "Board/patchCategory",
  async (payload, thunkAPI) => {
    const [nameBtn, BoardItemId, category] = payload;
    try {
      const categoryList = [
        "todo",
        "working",
        "validate",
        "complete",
        "archive",
      ];

      let nextCategory = category;
      if (nameBtn === "nextCategory") {
        const nextStep = categoryList[++nextCategory];
        axios.patch(`${BASE_URL}/${BoardItemId}`, {
          category: nextStep,
        });
      } else {
        const prevStep = categoryList[--nextCategory];
        axios.patch(`${BASE_URL}/${BoardItemId}`, {
          category: prevStep,
        });
      }
      return thunkAPI.fulfillWithValue([BoardItemId, nextCategory]);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
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

    // patchBoard
    builder.addCase(patchCategoryThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(patchCategoryThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      const [BoardItemId, category] = action.payload;
      const categoryList = [
        "todo",
        "working",
        "validate",
        "complete",
        "archive",
      ];

      state.boards.forEach((todo) => {
        if (todo.id === BoardItemId) {
          todo.category = categoryList[category];
        }
      });
    });
    builder.addCase(patchCategoryThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // deleteBoard
    builder.addCase(deleteBoardThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBoardThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload
      );
    });
    builder.addCase(deleteBoardThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { showCreateBoardModal, hideCreateBoardModal, toggle } =
  boardSlice.actions;
export {
  getBoardThunk,
  postBoardThunk,
  patchCategoryThunk,
  deleteBoardThunk,
  patchBoardThunk,
};
export default boardSlice.reducer;

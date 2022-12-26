import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

// action items
const ADD_COMMENT = "ADD_COMMENT";

// action creater
export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

const initialState = [
  {
    id: nanoid(),
    writer: "작성자테스트1",
    comment: "댓글테스트1",
    password: "비밀번호테스트1",
  },
  {
    id: nanoid(),
    writer: "작성자테스트2",
    comment: "댓글테스트2",
    password: "비밀번호테스트2",
  },
];

// const initialState = [
//   { id: { id }, writer: { name }, comment: { comment }, password: { pw } },
// ];

const comment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];

    default:
      return state;
  }
};

// export
export default comment;

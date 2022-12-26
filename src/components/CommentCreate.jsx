import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { postCommentThunk, getBoardThunk } from "../redux/modules/boardSlice";
// import axios from "axios";

const CommentCreateStyled = styled.div`
  border: 0.125rem solid black;
  padding: 3rem;
`;

function CommentCreate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardThunk());
  }, [dispatch]);
  const id = useParams().id;
  const { boards } = useSelector((state) => state.boards);
  const currentBoard = boards.find((board) => {
    return board.id === id;
  });

  const [writer, setWriter] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");

  const handleWriterChange = (event) => {
    setWriter(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const newComment = {
      id: nanoid(),
      boardId: id,
      name: writer,
      comment,
      password,
    };
    const copiedBoard = {
      ...currentBoard,
      comments: [...currentBoard.comments, newComment],
    };

    dispatch(postCommentThunk(copiedBoard));

    setWriter("");
    setComment("");
    setPassword("");
  };

  return (
    <CommentCreateStyled>
      <form
        onSubmit={(event) => {
          handleSubmitButtonClick(event);
        }}
      >
        <h3>댓글 쓰기창</h3>
        <input
          type="text"
          placeholder="작성자"
          value={writer}
          onChange={(e) => handleWriterChange(e)}
        />
        <input
          type="text"
          placeholder="댓글"
          value={comment}
          onChange={(e) => handleCommentChange(e)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        />
        <button>댓글작성</button>
      </form>
      <div></div>
    </CommentCreateStyled>
  );
}

export default CommentCreate;

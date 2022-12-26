import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addComment from "../../redux/modules/comment";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

function CommentCreate() {
  const dispatch = useDispatch();

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
      writer,
      comment,
      password,
    };

    console.log(newComment);

    dispatch(addComment(newComment));

    setWriter("");
    setComment("");
    setPassword("");
  };

  // // axios GET
  // const fetchComments = async () => {
  //   const { data } = await axios.get("http://localhost:3011/boards/");
  //   console.log(data[0].comments);
  // };

  // // axios POST
  // const postComments = async (newComment) => {
  //   await axios.post("http://localhost:3011/boards/comments", newComment);
  // };

  return (
    <div style={{ border: "2px solid black", padding: "50px" }}>
      <form
        onSubmit={(event) => {
          handleSubmitButtonClick(event);
        }}
      >
        <h3>댓글 쓰기창</h3>
        <input type="text" placeholder="작성자" onChange={handleWriterChange} />
        <input type="text" placeholder="댓글" onChange={handleCommentChange} />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={handlePasswordChange}
        />
        <button>댓글작성</button>
      </form>
      <div></div>
    </div>
  );
}

export default CommentCreate;

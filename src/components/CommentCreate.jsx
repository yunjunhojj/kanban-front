import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  postCommentThunk,
  emptyComment,
  patchCommentThunk,
} from "../redux/modules/commentSlice";

const CommentCreateStyled = styled.div`
  border: 0.125rem solid black;
  padding: 3rem;
`;

function CommentCreate() {
  const dispatch = useDispatch();
  const id = useParams().id;

  // 편집용 editText을 초기화합니다.
  useEffect(() => {
    dispatch(emptyComment());
  }, []);

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

  const handlePostComment = (event) => {
    event.preventDefault();

    const newComment = {
      id: nanoid(),
      boardId: id,
      name: writer,
      comment,
      password,
    };

    dispatch(postCommentThunk(newComment));

    setWriter("");
    setComment("");
    setPassword("");
  };

  const { editText, comments } = useSelector((state) => state.comments);

  // useEffect 내부 boardId, id을 접근하기 위해 사용합니다.
  let editTextSaveRef = useRef(null);
  useEffect(() => {
    if (editText) {
      const { boardId, comment, id, name, password } = comments.find(
        (comment) => comment.id === editText
      );
      setWriter(name);
      setComment(comment);
      setPassword(password);

      editTextSaveRef.current = { boardId, id };
    }
  }, [editText]);

  const handleSaveComment = () => {
    const editTextSave = {
      id: editTextSaveRef.current.id,
      boardId: editTextSaveRef.current.boardId,
      name: writer,
      comment: comment,
      password: password,
    };

    console.log(editTextSave);
    dispatch(patchCommentThunk(editTextSave));
    dispatch(emptyComment());
    setWriter("");
    setComment("");
    setPassword("");
  };

  return (
    <CommentCreateStyled>
      <div>
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
        {!editText && (
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        )}

        {editText ? (
          <button onClick={(e) => handleSaveComment(e)}>댓글저장</button>
        ) : (
          <button onClick={(e) => handlePostComment(e)}>댓글작성</button>
        )}
      </div>
    </CommentCreateStyled>
  );
}

export default CommentCreate;

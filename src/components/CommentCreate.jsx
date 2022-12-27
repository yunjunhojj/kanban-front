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
  box-shadow: 3px 3px 5px rgb(0 0 0 / 50%);
  margin: 3rem 0;
  background-color: #ddd;
  border-radius: 0.75rem 0.75rem 0 0;
  padding: 3rem 3rem 1rem;
  width: 58.5rem;
  margin: 0 auto;
  .custom-btn {
    margin: 0.3125rem 0;
    font-size: 1rem;
    background-color: ${(props) =>
      props.postEnabled && props.patchEnabled ? "#fff" : "#D1D5DB"};
    color: ${(props) =>
      props.postEnabled && props.patchEnabled ? "#111827" : "#6B7280"};
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    cursor: pointer;
    :hover {
      color: ${(props) =>
        props.postEnabled && props.patchEnabled ? "#2563eb" : "#6B7280"};
    }
  }
  .container {
    position: relative;
    margin-bottom: 1.875rem;
    .custom-btn {
      position: absolute;
      bottom: -0.3125rem;
      right: 0;
      transition-duration: 0.3s;
      color: #f2f2f2;
      background-color: #333;
      :hover {
        color: #2563eb;
        background: #f2f2f2;
        box-shadow: 0.1875rem 0.1875rem 0.1875rem rgba(0, 0, 0, 0.5);
      }
    }
  }
  .custom-input {
    background-color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    margin: 0 1rem 0 0;
    transition-duration: 0.3s;
    @extend placeholder;
    font-size: 0.75rem;
    :focus {
      box-shadow: 0.1875rem 0.1875rem 0.1875rem rgba(0, 0, 0, 0.5);
    }
  }
  h3 {
    font-weight: 700;
    margin-bottom: 0.625rem;
    margin-left: 0.1875rem;
  }
`;

function CommentCreate() {
  const dispatch = useDispatch();
  const id = useParams().id;

  // 편집용 editText을 초기화합니다.
  useEffect(() => {
    dispatch(emptyComment());
  }, [dispatch]);

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

  const postEnabled = [writer, comment, password].every(Boolean);
  const patchEnabled = [writer, comment].every(Boolean);
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

    dispatch(patchCommentThunk(editTextSave));
    dispatch(emptyComment());
    setWriter("");
    setComment("");
    setPassword("");
  };

  return (
    <CommentCreateStyled postEnabled={postEnabled} patchEnabled={patchEnabled}>
      <div className="container">
        <h3>댓글 쓰기창</h3>
        <input
          type="text"
          placeholder="작성자"
          className="custom-input"
          value={writer}
          onChange={(e) => handleWriterChange(e)}
        />
        <input
          type="text"
          placeholder="댓글"
          className="custom-input"
          value={comment}
          onChange={(e) => handleCommentChange(e)}
        />
        {!editText && (
          <input
            type="password"
            placeholder="비밀번호"
            className="custom-input"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        )}
        {editText ? (
          <button
            className="custom-btn"
            disabled={!patchEnabled}
            onClick={(e) => handleSaveComment(e)}>
            댓글저장
          </button>
        ) : (
          <button
            className="custom-btn"
            disabled={!postEnabled}
            onClick={(e) => handlePostComment(e)}>
            댓글작성
          </button>
        )}
      </div>
    </CommentCreateStyled>
  );
}

export default CommentCreate;

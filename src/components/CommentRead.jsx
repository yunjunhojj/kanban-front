import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  getCommentThunk,
  deleteCommentThunk,
  editComment,
} from "../redux/modules/commentSlice";

const CommentReadStyled = styled.div`
  box-shadow: 3px 3px 5px rgb(0 0 0 / 50%);
  background-color: #ddd;
  border-top: 0.25rem solid #f2f2f2;
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 1.5rem 3rem;
  width: 58.5rem;
  margin: 0 auto 3rem;
  .comment-item-container {
    padding: 0.625rem;
    border: 1px solid #aaa;
    box-shadow: 0.125rem 0.125rem 0.125rem rgb(0 0 0 / 50%);
    border-radius: 0.625rem;
  }
  .comment-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    .comment-name {
      font-weight: 700;
      width: 44.5rem;
      line-break: anywhere;
      text-align: justify;
    }
    .comment-text {
      width: 44.5rem;
      line-break: anywhere;
      text-align: justify;
    }
    .custom-btn {
      margin: 0.3125rem 0;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      margin: 0 0 0 0.75rem;
      cursor: pointer;
      transition-duration: 0.3s;
      color: #f2f2f2;
      background-color: #333;
      font-size: 0.875rem;
      :hover {
        color: #2563eb;
        background: #f2f2f2;
        box-shadow: 0.1875rem 0.1875rem 0.1875rem rgba(0, 0, 0, 0.5);
      }
    }
    .btn-container {
      display: flex;
    }
  }
`;

function CommentRead() {
  // db에 데이터를 얻고 클라이언트 store에 저장합니다. 그리고 해당하는 board를 접근합니다.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentThunk());
  }, [dispatch]);
  const id = useParams().id;
  const { isLoading, error, comments } = useSelector((state) => state.comments);

  const handleDeleteComment = (id) => {
    dispatch(deleteCommentThunk(id));
  };

  const handleEditComment = (id) => {
    dispatch(editComment(id));
  };

  if (error) return <div>{error.massage}</div>;
  if (!isLoading) {
    const renderedComments = comments
      .filter((comment) => comment.boardId === id)
      .map((comment) => (
        <div className="comment-item" key={comment.id}>
          <div className="comment-item-container">
            <div className="comment-name"> {` ${comment.name}`}</div>
            <div className="comment-text"> {` ${comment.comment}`}</div>
          </div>
          <div className="btn-container">
            <button
              className="custom-btn"
              onClick={() => handleEditComment(comment.id)}>
              편집
            </button>
            <button
              className="custom-btn"
              onClick={() => handleDeleteComment(comment.id)}>
              삭제
            </button>
          </div>
        </div>
      ));

    return (
      <CommentReadStyled>
        <div>
          {renderedComments.length !== 0
            ? renderedComments
            : "댓글이 없습니다."}
        </div>
      </CommentReadStyled>
    );
  }
}

export default CommentRead;

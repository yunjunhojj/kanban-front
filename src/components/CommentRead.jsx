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
  background-color: #e5e7eb;
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 1.5rem 3rem;
  width: 58.5rem;
  margin: 0 auto 3rem;
  .comment-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .comment-name {
      font-weight: 700;
      width: 44.5rem;
      line-break: anywhere;
    }
    .comment-text {
      width: 44.5rem;
      line-break: anywhere;
    }
    .custom-btn {
      margin: 0.3125rem 0;
      font-size: 1rem;
      background-color: #fff;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      margin: 0 0 0 0.75rem;
      cursor: pointer;
      :hover {
        color: #2563eb;
      }
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
            <div className="comment-name"> {`작성자: ${comment.name}`}</div>
            <div className="comment-text">
              {" "}
              {`댓글내용: ${comment.comment}`}
            </div>
          </div>
          <div className="btn-container">
            <button
              className="custom-btn"
              onClick={() => handleEditComment(comment.id)}
            >
              편집
            </button>
            <button
              className="custom-btn"
              onClick={() => handleDeleteComment(comment.id)}
            >
              삭제
            </button>
          </div>
        </div>
      ));
    return (
      <CommentReadStyled>
        <div>{comments.length ? renderedComments : "댓글이 없습니다."}</div>
      </CommentReadStyled>
    );
  }
}

export default CommentRead;

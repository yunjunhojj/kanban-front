import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  getCommentThunk,
  deleteCommentThunk,
} from "../redux/modules/commentSlice";

const CommentReadStyled = styled.div`
  border: 0.125rem solid black;
  padding: 3rem;
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

  if (error) return <div>{error.massage}</div>;
  if (!isLoading) {
    const renderedComments = comments
      .filter((comment) => comment.boardId === id)
      .map((comment) => (
        <div key={comment.id}>
          <div>작성자: {comment.name}</div>
          <div>댓글내용: {comment.comment}</div>
          <button>편집</button>
          <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
        </div>
      ));

    return (
      <CommentReadStyled>
        <div>
          <p>작성자</p>
          <p>댓글내용</p>
        </div>

        <div>{comments ? renderedComments : "댓글이 없습니다."}</div>
      </CommentReadStyled>
    );
  }
}

export default CommentRead;

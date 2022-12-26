import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getBoardThunk } from "../redux/modules/boardSlice";
// import axios from "axios";
const CommentReadStyled = styled.div`
  border: 0.125rem solid black;
  padding: 3rem;
`;

function CommentRead() {
  // db에 데이터를 얻고 클라이언트 store에 저장합니다. 그리고 해당하는 board를 접근합니다.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoardThunk());
  }, []);
  const id = useParams().id;
  const { isLoading, error, boards } = useSelector((state) => state.boards);
  const currentBoards = boards.find((board) => {
    return board.id === id;
  });

  if (error) return <div>{error.massage}</div>;
  if (isLoading) {
    return <div>로딩중 입니다.</div>;
  } else {
    // undefined 상태가 최초 로드에 존재합니다. 잠시 비어있는 객체로 취급합니다.
    const comments = currentBoards ? currentBoards.comments : [];

    const renderedComments = comments.map((comment) => (
      <div key={comment.id}>
        <div>작성자: {comment.name}</div>
        <div>댓글내용: {comment.comment}</div>
        <button>편집</button>
        <button>삭제</button>
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

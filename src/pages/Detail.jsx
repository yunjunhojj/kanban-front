// import styled, { StyledComponent } from "styled-components";
import CommentCreate from "../components/Comment/CommentCreate";

import CommentRead from "../components/Comment/CommentRead";

const Detail = () => {
  return (
    <div>
      상세페이지 내용
      <CommentCreate />
      <CommentRead />
    </div>
  );
};

export default Detail;

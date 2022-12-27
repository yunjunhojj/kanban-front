import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardThunk } from "../redux/modules/boardSlice";
import { getCommentThunk } from "../redux/modules/commentSlice";
import styled from "styled-components";
import CommentRead from "../components/CommentRead";
import CommentCreate from "../components/CommentRead";

// , { StyledComponent } from "styled-components";
const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { boards } = useSelector((state) => state.boards);
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getBoardThunk());
    dispatch(getCommentThunk());
  }, [dispatch]);

  // 이전 컴포넌트에서 받아온 파라미터 조회
  const params = useParams().id;
  const filteredBoard = boards.filter((item) => item.id === params);
  const board = filteredBoard[0];
  const filteredComment = comments.filter((item) => item.boardId === params);
  const comment = filteredComment[0];
  const prevPageHandle = () => {
    navigate("/");
  };
  return (
    <>
      <StyledDiv>
        <div className="board-container">
          {/* 제목 */}
          <p className="title">{board?.title}</p>
          <div className="board-card-info">
            {/* 담당자 */}
            <span className="director">{board?.name}</span>
            {/* 단계 */}
            <span className="category">{board?.category}</span>
            {/* 보드내용 */}
          </div>
          <div className="board-content">{board?.content}</div>
        </div>
        <hr className="line"></hr>
        <CommentCreate></CommentCreate>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  max-width: 90rem;
  min-height: 74.85vh;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  // background-color: blue;
  .board-container {
    margin: 0 auto;
    margin-bottom: 6.25rem;
    padding: 0 0.625rem;
    width: 100%;
  }
  .title {
    max-width: 936px;
    width: 100%;
    margin: 0 auto;
    font-weight: bold;
    font-size: 26px;
  }
  .board-card-info {
    max-width: 58.5rem;
    width: 100%;
    margin: auto;
    padding: 0.3125rem 0;
    .director,
    .category {
      width: 100%;
      font-weight: 700;
      font-size: 18px;
    }
    .category {
      margin-left: 2rem;
    }
  }
  .board-content {
    max-width: 58.5rem;
    min-height: 8.75rem;
    width: 100%;
    padding: 1.25rem;
    margin: auto;
    // border: 0.1875rem solid #333;
    border-radius: 0.5rem;
    font-size: 20px;
    word-break: break-all;
    background-color: #ddd;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
  .line {
    height: 0.25rem;
    width: 100%;
    background-color: grey;
  }
  .comment-container {
    padding: 0 15.75rem;
    /* margin-top: 2.75rem; */
  }
  .comment-header {
    margin-top: 2.75rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
  .comment-name {
    margin-top: 1.25rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .comment-content {
    margin-top: 3.5rem;
    max-width: 58.5rem;
    min-height: 7.5rem;
    border-radius: 0.5rem;
    padding: 0.75rem;
    background-color: lightcoral;
    word-break: break-all;
  }
`;

export default Detail;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardThunk } from "../redux/modules/boardSlice";
import { getCommentThunk } from "../redux/modules/commentSlice";
import styled from "styled-components";
// import CommentRead from "../components/CommentRead";
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
  console.log("Params is : ", params);

  const filteredBoard = boards.filter((item) => item.id === params);
  const board = filteredBoard[0];
  console.log("Board is : ", board);
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
    font-size: 1.5rem;
  }
  .board-card-info {
    max-width: 58.5rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    .director,
    .category {
      width: 100%;
      margin-left: 12px;
      font-weight: 700;
      font-size: 0.875rem;
    }
    .category {
      margin-left: 1.25rem;
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
    font-size: 1rem;
    word-break: break-all;
    background-color: #ddd;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
  .line {
    height: 0.25rem;
    width: 100%;
    background-color: grey;
  }
`;

export default Detail;

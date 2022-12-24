import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardThunk } from "../redux/modules/boardSlice";
import styled from "styled-components";
// , { StyledComponent } from "styled-components";
const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { boards } = useSelector((state) => state.boards);

  //   const { comments } = useSelector((state) => state.boards.comments);
  useEffect(() => {
    dispatch(getBoardThunk());
  }, [dispatch]);

  // 이전 컴포넌트에서 받아온 파라미터 조회
  const params = useParams().id;
  const filteredBoard = boards.filter((item) => item.id === params);
  const board = filteredBoard[0];

  //   const filteredComment = board.comments.filter((item) => item.id === params);
  const prevPageHandle = () => {
    navigate("/");
  };
  return (
    <>
      <StyledDiv>
        <div className="board-container">
          {/* 제목 */}
          <p className="title">{board?.title}</p>
          {/* 담당자 */}

          {/* 단계 */}
          <p className="category">{board?.category}</p>
          {/* 보드내용 */}
          <div className="board-content">{board?.content}</div>
        </div>
        <hr className="line"></hr>
        <div className="comment-container">
          {/* 코멘트 부분 */}
          <p className="comment-header">댓글</p>
          {board?.comments.map((item) => {
            return (
              <>
                <p className="comment-name">{item.name}</p>
                <div className="comment-content">{item.comment}</div>
                {/* <h4>댓글 작성자 id: {item.id}</h4> */}
              </>
            );
          })}
          <button onClick={prevPageHandle}>(임시)이전페이지로 이동</button>
        </div>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightgrey;
  .board-container {
    padding: 0 15.75rem;
  }
  .title {
    margin-top: 3.5rem;
    margin-bottom: 0rem;
    width: fit-content;
    height: 2.25rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }

  .category {
    margin-left: 0.75rem;
    margin-top: 1.75rem;
    margin-bottom: 0rem;
    width: fit-content;
    height: 1.5rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .board-content {
    margin-top: 3.5rem;
    max-width: 58.5rem;
    min-height: 8.75rem;
    background-color: lightblue;
    word-break: break-all;
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
  }
  .comment-name {
    margin-top: 1.25rem;
  }
  .comment-content {
    margin-top: 3.5rem;
    max-width: 58.5rem;
    min-height: 7.5rem;
    word-break: break-all;
  }
`;

export default Detail;

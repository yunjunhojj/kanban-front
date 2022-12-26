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

  useEffect(() => {
    dispatch(getBoardThunk());
  }, [dispatch]);

  // 이전 컴포넌트에서 받아온 파라미터 조회
  const params = useParams().id;
  const filteredBoard = boards.filter((item) => item.id === params);
  const board = filteredBoard[0];

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
          <span className="director">{board?.name}</span>
          {/* 단계 */}
          <span className="category">{board?.category}</span>
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
  .director {
    margin-top: 1.75rem;
    padding-left: 2rem;
    width: fit-content;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .category {
    margin-left: 2rem;
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
    border-radius: 0.5rem;
    padding: 0.75rem;
    background-color: lightblue;
    word-break: break-all;
  }
  .line {
    margin-top: 10.25rem;
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

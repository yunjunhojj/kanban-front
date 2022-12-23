import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardThunk } from "../redux/modules/boardSlice";
import styled from "styled-components";
// 보드의 상세페이지
const CustomBoardDetail = () => {
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
        <div>
          {/* 제목 */}
          <StyledTitle>{board?.title}</StyledTitle>
          {/* 담당자 */}

          {/* 단계 */}
          <StyledCategory>{board?.category}</StyledCategory>
          {/* 보드내용 */}
          <StyledContent>{board?.content}</StyledContent>
        </div>
      </StyledDiv>

      <StyledHr />
      <StyledDiv>
        {/* 코멘트 부분 */}
        <h2>댓글</h2>
        {board?.comments.map((item) => {
          return (
            <>
              <h4>comment: {item.comment}</h4>
              <h4>name: {item.name}</h4>
              <h4>댓글 작성자 id: {item.id}</h4>
            </>
          );
        })}
        <button onClick={prevPageHandle}>이전페이지로 이동</button>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightgrey;
  padding: 0 254px;
`;
const StyledTitle = styled.p`
  margin-top: 56px;
  margin-bottom: 0px;
  width: fit-content;
  height: 35px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
`;

const StyledCategory = styled.p`
  margin-left: 10px;
  margin-top: 27px;
  margin-bottom: 0px;
  width: fit-content;
  height: 23px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
`;
const StyledContent = styled.div`
  margin-top: 55px;
  max-width: 934px;
  min-height: 140px;
  background-color: lightblue;
  word-break: break-all;
`;

const StyledHr = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;
export default CustomBoardDetail;

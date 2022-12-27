import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteBoard,
  getBoardThunk,
  patchBoardThunk,
} from "../redux/modules/boardSlice";
import styled from "styled-components";
import CommentCreate from "../components/CommentCreate";
// import { editComment } from "../redux/modules/commentSlice";
// , { StyledComponent } from "styled-components";
const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBoardThunk());
  }, [dispatch]);

  const { boards } = useSelector((state) => state.boards);

  // 이전 컴포넌트에서 받아온 파라미터 조회
  const params = useParams().id;
  // 회면에 뿌리기
  const filteredBoard = boards.filter((item) => item.id === params);
  const board = filteredBoard[0];
  // 편집 상태 체크
  const [editable, setEditable] = useState(false);
  // 편집 상태 변경 함수
  const editOn = () => {
    setEditable(true);
  };
  // 상세페이지 보드 삭제 버튼 이벤트 핸들러
  const deleteBoardHandler = (event) => {
    dispatch(deleteBoard(event.target.value));
    navigate("/");
  };

  // 상세페이지 보드 편집
  const [content, setContent] = useState(""); // 보드 내용 편집

  const boardContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // form 함수
  const editBoardHandler = (event) => {
    event.preventDefault();

    const newBoard = {
      id: params,
      content: content,
      name: board.name,
      pw: board.pw,
      title: board.title,
    };

    dispatch(patchBoardThunk(newBoard));
    setEditable(!editable);
    setContent("");
  };

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
          <form onSubmit={editBoardHandler}>
            {editable ? (
              <>
                <input
                  className="board-content"
                  value={content}
                  onChange={boardContentChangeHandler}
                ></input>
                <button>저장</button>
              </>
            ) : (
              <div className="board-content">{board?.content}</div>
            )}
          </form>
          <button onClick={() => editOn()}>편집</button>
          <button onClick={deleteBoardHandler} value={board?.id}>
            삭제
          </button>
        </div>
        <button onClick={prevPageHandle}>(임시)이전페이지로 이동</button>
        <hr className="line"></hr>
      </StyledDiv>
      {/* 댓글 부분 */}
      <CommentCreate />
    </>
  );
};
const StyledDiv = styled.div`
  /* max-width: 1440px; */
  /* min-height: 100vh; */
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
  /* .comment-container {
    padding: 0 15.75rem; */
  /* margin-top: 2.75rem; */
  /* } */
  /* .comment-header {
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
  } */
`;

export default Detail;

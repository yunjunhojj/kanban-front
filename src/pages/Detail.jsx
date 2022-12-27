import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteBoardThunk,
  getBoardThunk,
  patchBoardThunk,
} from "../redux/modules/boardSlice";
import { getCommentThunk } from "../redux/modules/commentSlice";
import styled from "styled-components";
import { CommentRead, CommentCreate } from "../components";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { boards } = useSelector((state) => state.boards);
  // const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getBoardThunk());
    dispatch(getCommentThunk());
  }, [dispatch]);

  // 이전 컴포넌트에서 받아온 파라미터 조회
  const params = useParams().id;
  // 회면에 뿌리기
  const filteredBoard = boards.filter((item) => item.id === params);
  const board = filteredBoard[0];
  // 편집 상태 체크
  const [editable, setEditable] = useState(false);
  // 편집 상태 변경 함수
  const editOn = () => {
    setEditable(!editable);
    setContent("");
  };
  // 상세페이지 보드 삭제 버튼 이벤트 핸들러
  const deleteBoardHandler = (event) => {
    dispatch(deleteBoardThunk(event.target.value));
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

  const categoryLabel = () => {
    if (board?.category === "todo") {
      return `해야할 일`;
    }
    if (board?.category === "working") {
      return `진행중`;
    }
    if (board?.category === "validate") {
      return `검토중`;
    }
    if (board?.category === "complete") {
      return `완료`;
    }
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
            <span className="category">{categoryLabel()}</span>
            {/* 보드내용 */}
          </div>
          {editable ? (      
            <>
            <form onSubmit={editBoardHandler}>
              <input
                className="board-content"
                value={content}
                onChange={boardContentChangeHandler}></input>
              <div className="save-btn-wrap">
                <StyledBtn type="submit">저장</StyledBtn>
              </div>
            </form>
            <button onClick={() => editOn()}>취소</button>
            </>
          ) : (
            <>
              <div className="board-content">{board?.content}</div>
              <div className="btn-wrap">
                <StyledBtn onClick={() => editOn()}>편집</StyledBtn>
                <StyledBtn onClick={deleteBoardHandler} value={board?.id}>
                  삭제
                </StyledBtn>
              </div>
            </>
          )}
          <div className="perv-btn-wrap">
            <button onClick={prevPageHandle} className="perv-btn">
              이전페이지로 이동
            </button>
          </div>
        </div>

        <hr className="line"></hr>
      </StyledDiv>
      {/* 댓글 부분 */}
      <CommentCreate />
      <CommentRead />
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
    position: relative;
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
    display: block;
    max-width: 58.5rem;
    min-height: 8.75rem;
    width: 100%;
    padding: 1.25rem;
    margin: 0 auto;
    margin-bottom: 1.25rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    word-break: break-all;
    background-color: #ddd;
    box-shadow: 0.3125rem 0.3125rem 0.3125rem rgba(0, 0, 0, 0.5);
  }
  .line {
    margin-top: 10.25rem;
    height: 0.25rem;
    width: 100%;
    background-color: grey;
    margin: 0 0 3rem;
  }

  .btn-wrap {
    max-width: 58.5rem;
    width: 100%;
    margin: 0 auto;
  }
  .perv-btn-wrap {
    position: relative;
    width: 100%;
    max-width: 936px;
    margin: 0 auto;

    .perv-btn {
      position: absolute;
      bottom: 0.5rem;
      right: 0;
      width: 9.375rem;
      padding: 0.3125rem;
      text-align: center;
      font-size: 1.125rem;
      font-weight: 500;

      transition-duration: 0.3s;
      :hover {
        color: #2563eb;
      }
    }
  }

  .save-btn-wrap {
    max-width: 58.5rem;
    width: 100%;
    margin: 0 auto;

    .save-btn {
      margin: 0 0.4375rem;
      padding: 0.625rem 1.25rem;
      border: 1px solid #aaa;
      border-radius: 0.625rem;

      transition-duration: 0.3s;
      :hover {
        color: #f2f2f2;
        background-color: #2563eb;
        border: 1px solid #2563eb;
      }
    }
  }
`;

const StyledBtn = styled.button`
  margin: 0 0.4375rem;
  padding: 0.625rem 1.25rem;
  border: 1px solid #aaa;
  border-radius: 0.625rem;

  transition-duration: 0.3s;
  :hover {
    color: #f2f2f2;
    background-color: #2563eb;
    border: 1px solid #2563eb;
  }
`;

export default Detail;

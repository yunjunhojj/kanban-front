import styled from "styled-components";
import { useDispatch } from "react-redux";
import CustomBtn from "./CustomBtn";
import { deleteBoardThunk } from "../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";

const BoardItemBox = styled.div`
  border: 0.1875rem solid #aaa;
  border-radius: 1.25rem;

  max-width: 20rem;
  min-height: ß;

  margin: 0 auto;
  margin-bottom: 1.5625rem;
  padding: 0.625rem 1.25rem 1.25rem 1.25rem;

  transition-duration: 0.3s;
  :hover {
    border: 0.1875rem solid #2563eb;
  }

  .boardTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .closeBtn {
    padding: 0 0.4375rem;
    border: 0rem;
    font-size: 1.85rem;
    transition-duration: 0.3s;
    :hover {
      color: #eb5a3d;
    }
  }

  .detailBtn {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    transition-duration: 0.3s;
    :hover {
      color: #2563eb;
    }
  }

  .manager {
    font-size: 0.875rem;
    font-weight: bold;
  }

  .content-box {
    min-height: 100px;
    height: 100%;

    padding: 0.625rem;

    border: 1px solid #aaa;
    border-radius: 0.625rem;
  }
  .title-wrap {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.3125rem;
    margin-bottom: 0.5rem;
  }
  .detail-icon {
    position: absolute;
    top: 0.3125rem;
    right: 0;
    width: 1.75rem;
    height: 1.75rem;
    transition-duration: 0.3s;
    :hover {
      transform: rotate(15deg);
    }
  }

  .businessman-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.3125rem;
  }
`;

const BoardItem = ({ name, id, title, category, content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(deleteBoardThunk(id));
    }
  };

  return (
    <BoardItemBox>
      <div className="boardTop">
        <div className="manager">
          {" "}
          <img
            className="businessman-icon"
            src="./businessman.svg"
            alt="Task 담당자 아이콘"
          />{" "}
          {name}{" "}
        </div>
        <button
          className="closeBtn"
          onClick={() => {
            onDelete(id);
          }}>
          x
        </button>
      </div>
      <div className="title-wrap">
        <h2> {title} </h2>
        {/*보드 내용 삽입*/}

        {/* navigate로 수정-희진 */}
        <button
          className="detailBtn"
          onClick={() => {
            navigate(`/detail/${id}`);
          }}>
          <img
            className="detail-icon"
            src="./view-details.svg"
            alt="자세히보기 바로가기 버튼"
          />
        </button>
      </div>

      <div className="content-box">
        <p>{content}</p>
      </div>

      <CustomBtn
        nameBtn="nextCategory"
        CurrentCategory={category}
        BoardItemId={id}></CustomBtn>
      <CustomBtn
        nameBtn="prevCategory"
        CurrentCategory={category}
        BoardItemId={id}></CustomBtn>
    </BoardItemBox>
  );
};

export default BoardItem;

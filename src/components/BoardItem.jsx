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

    margin-bottom: -0.625rem;
  }

  h2 {
    margin-bottom: 0.625rem;
    font-size: 1.25rem;
  }

  .closeBtn {
    padding: 0 7px;
    border: 0rem;
    font-size: 1.85rem;
    transition-duration: 0.3s;
    :hover {
      color: #eb5a3d;
    }
  }

  .detailBtn {
    border: 0rem;
    text-decoration: none;
    color: black;
  }

  .manager {
    font-size: 0.875rem;
    font-weight: bold;
  }

  .content-box {
    min-height: 100px;
    height: 100%;

    padding-top: 10px;
    padding-left: 10px;

    border: 1px solid #aaa;
    border-radius: 10px;
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
        <div className="manager"> 담당자 : {name} </div>
        <button
          className="closeBtn"
          onClick={() => {
            onDelete(id);
          }}
        >
          x
        </button>
      </div>
      {/* navigate로 수정-희진 */}
      <button
        className="detailBtn"
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      >
        [상세보기]
      </button>
      <h2> {title} </h2>
      {/*보드 내용 삽입*/}
      <div className="content-box">
        <p>{content}</p>
      </div>

      <CustomBtn
        nameBtn="nextCategory"
        CurrentCategory={category}
        BoardItemId={id}
      ></CustomBtn>
      <CustomBtn
        nameBtn="prevCategory"
        CurrentCategory={category}
        BoardItemId={id}
      ></CustomBtn>
    </BoardItemBox>
  );
};

export default BoardItem;

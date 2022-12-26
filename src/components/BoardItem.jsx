import styled from "styled-components";
import { useDispatch } from "react-redux";
import CustomBtn from "./CustomBtn";
import { deleteBoard } from "../redux/modules/boardSlice";
import { Link } from "react-router-dom";

const BoardItemBox = styled.div`
  border: 0.0625rem solid gray;
  border-radius: 1.25rem;

  max-width: 20rem;
  min-height: 160px;

  padding: 20px;

  .boardTop {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    background-color: aqua;
    min-height: 4.375rem;
  }

  .closeBtn {
    border: 0rem;
    font-size: 24px;
  }

  .detailBtn {
    border: 0rem;
    text-decoration: none;
    color: black;
  }
`;

const BoardItem = ({ item }) => {
  const dispatch = useDispatch();

  // const item = {
  //   id: "z6ost9Sp0Lx7G9A0WGhvS",
  //   name: "담당자 이름",
  //   category: "todo",
  //   title: "투두 제목 ",
  //   content: "보드 내용",
  //   pw: "보드 비밀번호",
  // };

  const onDelete = (id) => {
    window.confirm("삭제하시겠습니까?");
    dispatch(deleteBoard(id));
  };

  return (
    <BoardItemBox>
      <div className="boardTop">
        <div> 담당자 : {item.name} </div>
        <button
          className="closeBtn"
          onClick={() => {
            onDelete(item.id);
          }}
        >
          x
        </button>
      </div>

      <Link className="detailBtn" to={item.id}>
        <h2> {item.title} </h2>
      </Link>
      <CustomBtn
        name="nextCategory"
        CurrentCategory={item.category}
        BoardItemId={item.id}
      ></CustomBtn>
      <CustomBtn
        name="prevCategory"
        CurrentCategory={item.category}
        BoardItemId={item.id}
      ></CustomBtn>
    </BoardItemBox>
  );
};

export default BoardItem;

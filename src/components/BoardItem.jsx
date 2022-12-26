import styled from "styled-components";
import { useDispatch } from "react-redux";
import CustomBtn from "./CustomBtn";
import { deleteBoard } from "../redux/modules/boardSlice";
import { Link } from "react-router-dom";

const BoardItemBox = styled.div`
  border: 0.1875rem solid #aaa;
  border-radius: 1.25rem;

  max-width: 20rem;
  min-height: ß;

  margin: 0 auto;
  margin-bottom: 1.5625rem;
  padding: 0.625rem 1.25rem 1.25rem 1.25rem;
<<<<<<< Updated upstream
=======

  transition-duration: 0.3s;
  :hover {
    border: 0.1875rem solid #2563eb;
  }
>>>>>>> Stashed changes

<<<<<<< HEAD
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
=======
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
<<<<<<< Updated upstream
>>>>>>> 1116bf55115514f4940b2cfbd9a0733cdfbaed12
=======
    padding: 0 7px;
>>>>>>> Stashed changes
    border: 0rem;
    font-size: 1.85rem;
    transition-duration: 0.3s;
    :hover {
      color: #eb5a3d;
    }
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
<<<<<<< HEAD
const BoardItem = ({ name, id, title, category, content }) => {
=======
const BoardItem = ({ name, id, title, category }) => {
>>>>>>> 1116bf55115514f4940b2cfbd9a0733cdfbaed12
  const dispatch = useDispatch();
  // console.log("ItemCard : ", name);

<<<<<<< HEAD
=======
  // const item = {
  //   id: "z6ost9Sp0Lx7G9A0WGhvS",
  //   name: "담당자 이름",
  //   category: "todo",
  //   title: "투두 제목 ",
  //   content: "보드 내용",
  //   pw: "보드 비밀번호",
  // };
=======
const BoardItem = ({ name, id, title, category, content }) => {
  const dispatch = useDispatch();
>>>>>>> Stashed changes

>>>>>>> 1116bf55115514f4940b2cfbd9a0733cdfbaed12
  const onDelete = (id) => {
    window.confirm("삭제하시겠습니까?");
    dispatch(deleteBoard(id));
  };

  return (
    <BoardItemBox>
      <div className="boardTop">
<<<<<<< Updated upstream
<<<<<<< HEAD
        <div className="manager"> 담당자 : {name} </div>
=======
        <div> 담당자 : {name} </div>
>>>>>>> 1116bf55115514f4940b2cfbd9a0733cdfbaed12
=======
        <div className="manager"> 담당자 : {name} </div>
>>>>>>> Stashed changes
        <button
          className="closeBtn"
          onClick={() => {
            onDelete(id);
          }}>
          x
        </button>
      </div>

      <Link className="detailBtn" to={id}>
        <h2> {title} </h2>
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
        {/*보드 내용 삽입*/}
        <div className="content-box">
          <p>{content}</p>
        </div>
        {/**/}
<<<<<<< Updated upstream
=======
>>>>>>> 1116bf55115514f4940b2cfbd9a0733cdfbaed12
=======
>>>>>>> Stashed changes
      </Link>
      <CustomBtn
        name="nextCategory"
        CurrentCategory={category}
        BoardItemId={id}></CustomBtn>
      <CustomBtn
        name="prevCategory"
        CurrentCategory={category}
        BoardItemId={id}></CustomBtn>
    </BoardItemBox>
  );
};

export default BoardItem;

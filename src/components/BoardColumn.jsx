import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoardThunk } from "../redux/modules/boardSlice";
import styled from "styled-components";
import BoardItem from "./BoardItem";

const BoardColumnStyled = styled.div`
  max-width: 21.25rem;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: beige;
  border: 1px solid #333;

  .title {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0.75rem 0;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const BoardColumn = (props) => {
  console.log("props : ", props);
  const dispatch = useDispatch();

  const { isLoading, error, boards } = useSelector((state) => state.boards);
  useEffect(() => {
    dispatch(getBoardThunk());
  }, [dispatch]);

  //  <BoardColumn title="Schedule" /> title을 db.json의 category와 매칭시켜서 kanban의 위치를 지정함..
  const renderedBoardItems = boards.map((item) => {
    console.log("item.category : ", item.category);
    if (item.category === props.title) {
      return <BoardItem {...item}></BoardItem>;
    }
  });

  return (
    <BoardColumnStyled>
      {/*Column title입니다.*/}
      <h3 className="title">{props.title}</h3>
      <ul>{renderedBoardItems}</ul>
    </BoardColumnStyled>
  );
};

export default BoardColumn;

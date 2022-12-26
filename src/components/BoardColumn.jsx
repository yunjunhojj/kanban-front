import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoardThunk } from "../redux/modules/boardSlice";
import styled from "styled-components";
import BoardItem from "./BoardItem";

const BoardColumnStyled = styled.div`
  max-width: 21.25rem;
  min-height: 50vh;
  width: 100%;
  height: 100%;

  margin: 0 0.3125rem;

  border: 1px solid #ccc;
  border-radius: 0.625rem;

  box-shadow: 0 0 5px rgba(170, 170, 170, 1);

  transition-duration: 0.2s;

  &:hover {
    box-shadow: 0.3125rem -0.3125rem 0.375rem rgba(0, 0, 0, 0.3);
  }

  /* background-color: beige; */
  .title {
    position: relative;
    top: 0;
    left: 0;

    width: 100%;
    margin: 0.75rem 0;

    font-size: 1.5rem;
    font-weight: bold;

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
    if (item.category === props.category) {
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

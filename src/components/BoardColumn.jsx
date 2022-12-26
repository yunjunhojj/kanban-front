import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoardThunk } from "../redux/modules/boardSlice";
import styled from "styled-components";
import BoardItem from "./BoardItem";
<<<<<<< Updated upstream
<<<<<<< HEAD
import { nanoid } from "@reduxjs/toolkit";

const BoardColumnStyled = styled.div`
  max-width: 21.25rem;
  width: 100%;
  height: 100%;

  margin: 0 0.625rem;
  padding: 0.625rem;
  padding-bottom: 1.875rem;
=======
=======
import { nanoid } from "@reduxjs/toolkit";
>>>>>>> Stashed changes

const BoardColumnStyled = styled.div`
  max-width: 21.25rem;
  width: 100%;
  height: 100%;

<<<<<<< Updated upstream
  margin: 0 0.3125rem;
>>>>>>> 1116bf55115514f4940b2cfbd9a0733cdfbaed12
=======
  margin: 0 0.625rem;
  padding: 0.625rem;
  padding-bottom: 1.875rem;
>>>>>>> Stashed changes

  border: 1px solid #ccc;
  border-radius: 0.625rem;

<<<<<<< Updated upstream
<<<<<<< HEAD
  box-shadow: 0 0 3px rgba(170, 170, 170, 1);

  transition-duration: 0.3s;

  &:hover {
    box-shadow: 0.3125rem 0.3125rem 0.75rem rgba(0, 0, 0, 0.7);
=======
  box-shadow: 0 0 5px rgba(170, 170, 170, 1);
=======
  box-shadow: 0 0 3px rgba(170, 170, 170, 1);
>>>>>>> Stashed changes

  transition-duration: 0.3s;

  &:hover {
<<<<<<< Updated upstream
    box-shadow: 0.3125rem -0.3125rem 0.375rem rgba(0, 0, 0, 0.3);
>>>>>>> 1116bf55115514f4940b2cfbd9a0733cdfbaed12
=======
    box-shadow: 0.3125rem 0.3125rem 0.75rem rgba(0, 0, 0, 0.7);
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
<<<<<<< HEAD
  //  <BoardColumn category="Schedule" /> prop으로 내려운 category와 db.json의 category와 매칭시켜서 kanban의 위치를 지정함..
  const renderedBoardItems = boards.map((item) => {
    console.log("item.category : ", item.category);

    if (item.category === props.category) {
      return <BoardItem {...item} key={nanoid()}></BoardItem>;
    }
    return null;
=======
  //  <BoardColumn title="Schedule" /> title을 db.json의 category와 매칭시켜서 kanban의 위치를 지정함..
=======
  //  <BoardColumn category="Schedule" /> prop으로 내려운 category와 db.json의 category와 매칭시켜서 kanban의 위치를 지정함..
>>>>>>> Stashed changes
  const renderedBoardItems = boards.map((item) => {
    console.log("item.category : ", item.category);

    if (item.category === props.category) {
      return <BoardItem {...item} key={nanoid()}></BoardItem>;
    }
<<<<<<< Updated upstream
>>>>>>> 1116bf55115514f4940b2cfbd9a0733cdfbaed12
=======
    return null;
>>>>>>> Stashed changes
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

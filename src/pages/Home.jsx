import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getBoardThunk } from "../redux/modules/boardSlice";
import { BoardColumn } from "../components";

const HomeStyled = styled.main`
  max-width: 90rem;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  background-color: yellowgreen;

  .kanban-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

const BoardCard = () => {
  return <div></div>;
};

const Home = () => {
  return (
    <HomeStyled>
      <div className="kanban-container">
        <BoardColumn title="Schedule" />
        <BoardColumn title="Progress" />
        <BoardColumn title="QA" />
        <BoardColumn title="End Schedule" />
      </div>
    </HomeStyled>
  );
};

export default Home;

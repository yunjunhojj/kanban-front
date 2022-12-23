import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import styled, { StyledComponent } from "styled-components";
import { getBoardThunk } from "../../redux/modules/boardSlice";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, error, boards } = useSelector((state) => state.boards);
  useEffect(() => {
    dispatch(getBoardThunk());
  }, [dispatch]);
  console.log("isLoading", isLoading);
  console.log("error", error);
  console.log("boards", boards);

  return (
    <>
      <div className="container">
        <div className="kanban_container">
          {/*ul, li 나중에 styled-component로 리팩토링하기*/}
          <ul className="task_wrap depth1">
            <li>
              <h3 className="title">Schedule</h3>
            </li>
            <ul className="depth2">
              <li></li>
              <li></li>
            </ul>
          </ul>
          <ul className="progress_wrap depth1">
            <li>
              <h3 className="title">Progress</h3>
            </li>
            <li></li>
          </ul>
          <ul className="QA_wrap depth1">
            <li>
              <h3 className="title">QA</h3>
            </li>
            <li></li>
          </ul>
          <ul className="end_wrap depth1">
            <li>
              <h3 className="title">End Schedule</h3>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

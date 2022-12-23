import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import styled, { StyledComponent } from "styled-components";
import { getBoardThunk } from "../redux/modules/boardSlice";

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
      <div>Home입니다.</div>
    </>
  );
};

export default Home;

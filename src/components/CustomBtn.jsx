import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/modules/boardSlice";

const CustomBtnStyle = styled.button`
  margin: 5px;
`;

const CustomBtn = ({ nameBtn, BoardItemId, category }) => {
  const dispatch = useDispatch();

  const onToggle = (BoardItemId, category) => {
    dispatch(toggle([BoardItemId, category]));
  };

  return (
    <CustomBtnStyle onClick={() => onToggle(BoardItemId, category)}>
      {nameBtn}
    </CustomBtnStyle>
  );
};

export default CustomBtn;

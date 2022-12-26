import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/modules/boardSlice";

const CustomBtnStyle = styled.button`
  margin: 0.3125rem;
`;

const CustomBtn = ({ name, BoardItemId, CurrentCategory }) => {
  const dispatch = useDispatch();

  const onToggle = (BoardItemId, category, name) => {
    dispatch(toggle([BoardItemId, category, name]));
  };

  const categoryList = ["todo", "working", "validate", "complete", "archive"];

  const categoryList_Kr = ["착수", "검토", "완료", "저장", "번복"];

  return (
    <CustomBtnStyle
      name={name}
      onClick={() =>
        onToggle(name, BoardItemId, categoryList.indexOf(CurrentCategory))
      }
    >
      {name === "nextCategory"
        ? categoryList_Kr[categoryList.indexOf(CurrentCategory)]
        : "번복"}
    </CustomBtnStyle>
  );
};

export default CustomBtn;

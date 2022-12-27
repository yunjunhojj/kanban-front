import styled from "styled-components";
import { useDispatch } from "react-redux";
import { patchCategoryThunk } from "../redux/modules/boardSlice";

const CustomBtnStyle = styled.button`
  margin: 0.3125rem;
  font-size: 12px;
  :hover {
    color: #eb5a3d;
  }
`;

const CustomBtn = ({ nameBtn, BoardItemId, CurrentCategory }) => {
  const dispatch = useDispatch();


  const onToggle = (nameBtn, BoardItemId, category) => {
    dispatch(patchCategoryThunk([nameBtn, BoardItemId, category]));
  };

  const categoryList = ["todo", "working", "validate", "complete", "archive"];

  const categoryList_Kr = ["착수", "검토", "완료", "저장", "번복"];

  return (
    <CustomBtnStyle
      name={nameBtn}
      onClick={() =>
        onToggle(nameBtn, BoardItemId, categoryList.indexOf(CurrentCategory))
      }
    >
      {nameBtn === "nextCategory"
        ? categoryList_Kr[categoryList.indexOf(CurrentCategory)]
        : "번복"}
    </CustomBtnStyle>
  );
};

export default CustomBtn;

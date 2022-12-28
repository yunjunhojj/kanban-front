import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useBodyScrollLock } from "../Hooks/index";
import { showCreateBoardModal } from "../redux/modules/boardSlice.js";
import CreateBoardModal from "./CreateBoardModal";
// import plus from "../../public/plus.svg";
import plus from "../plus.svg";

const CustomFABStyled = styled.button`
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  border: none;
  background-color: #2563eb;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 6rem;
  bottom: 6rem;
  transition: 0.5s ease-in-out;
  transition-delay: box-shadow 1s;
  &:hover {
    transform: rotate(360deg) scale(1.15);
  }
  .FAB-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const CustomFAB = () => {
  const dispatch = useDispatch();
  const { lockScroll } = useBodyScrollLock();
  const handleOpenModal = () => {
    dispatch(showCreateBoardModal());
    lockScroll();
  };
  return (
    <div>
      <CreateBoardModal />
      <CustomFABStyled onClick={() => handleOpenModal()}>
        <img className="FAB-icon" src={plus} alt="board 추가 버튼" />
      </CustomFABStyled>
    </div>
  );
};

export default CustomFAB;

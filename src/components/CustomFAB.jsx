import styled from "styled-components";

const CustomFABStyled = styled.button`
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  border: none;
  background-color: #2563eb;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.25rem 2.25rem rgba(0, 0, 0, 0.08);
  position: fixed;
  right: 6rem;
  bottom: 6rem;
  transition-duration: 0.5s;
  &:hover {
    transform: rotate(360deg) scale(1.15);
  }
  .FAB-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const handleOpenModal = () => {
  console.log("Modal open");
};

const CustomFAB = () => {
  return (
    <CustomFABStyled onClick={handleOpenModal}>
      <img className="FAB-icon" src="./plus.svg" alt="board 추가 버튼" />
    </CustomFABStyled>
  );
};

export default CustomFAB;

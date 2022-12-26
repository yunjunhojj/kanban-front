import styled from "styled-components";

function ModalOpen({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  const ModalOpenStyled = styled.div`
    max-width: 30rem;
    min-height: 150%;
    width: 100%;
    height: 100%;

    margin: 20px;
    padding: 10px;

    border: 1px solid #ccc;
    border-radius: 0.625rem;

    box-shadow: 0 0 5px rgba(170, 170, 170, 1);

    transition-duration: 0.2s;

    &:hover {
      box-shadow: 0.3125rem -0.3125rem 0.375rem rgba(0, 0, 0, 0.3);
    }
  `;

  const ModalOpenButtonStyled = styled.button`
    background-color: "#e7e7e7";
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  `;

  return (
    <ModalOpenStyled>
      <input type="password" placeholder="비밀번호" />
      <ModalOpenButtonStyled onClick={closeModal}>확인</ModalOpenButtonStyled>
      <ModalOpenButtonStyled onClick={closeModal}>취소</ModalOpenButtonStyled>
    </ModalOpenStyled>
  );
}
export default ModalOpen;

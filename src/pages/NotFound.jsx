import styled from "styled-components";
const NotFoundStyled = styled.main`
  max-width: 90rem;
  min-height: 74.88vh;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .error-message {
    font-weight: bold;
    font-size: 52px;
    text-align: center;
    color: #eb5a3d;
  }
`;

const NotFound = () => {
  return (
    <NotFoundStyled>
      <p className="error-message">Not Found</p>
    </NotFoundStyled>
  );
};

export default NotFound;

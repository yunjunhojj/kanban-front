import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  /* CSS RESET */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

  * {
      padding: 0;
      border: 0;
      margin: 0;
      font-size: 16px;
      font-family: 'Noto Sans KR', sans-serif;
      color : #000;
      // background-color : red;
  }
  a {text-decoration: none;}
  li {list-style: none;}
  input {
      appearance: none;
      outline: none;
  }
  table {border-collapse: collapse;}
`;

//todo , 커스텀 푸터 헤더 작성해주세요
const MainStyled = styled.div``;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      <MainStyled>
        <main className="main-container">{children}</main>
      </MainStyled>
      {/* <CustomFooter /> */}
    </>
  );
};

export default Layout;

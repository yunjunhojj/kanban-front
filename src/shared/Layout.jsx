import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  /* CSS RESET */
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100;300;400;700&display=swap');

  * {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
  font-weight: inherit;
  font-family: 'Noto Sans KR', sans-serif;
  color: inherit;
  box-sizing: border-box;
  word-break: keep-all;
  letter-spacing: 0.01rem;
}

html {
  font-size: 16px;
  line-height: 1.75
}

body {
  color: #333;
  background-color : #f2f2f2;
  font-family: 'NotoSansKR', sans-serif, serif;
  overflow-x: hidden;
  position: relative;
}

/* body에 font-family로 글꼴 지정 꼭 해줘야 html에 적용된다. */

ul,
ol,
li {
  list-style-type: none
}

svg,
img,
embed,
object,
iframe,
fieldset {
  vertical-align: bottom;
  border: none;
}


hr {
  clear: both;
  border: none;
}

a {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  border-collapse: collapse
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: bold;
}

button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
  appearance: none;
  vertical-align: middle;
  color: inherit;
  font: inherit;
  background: transparent;
  padding: 0;
  margin: 0;
  border-radius: 0;
  text-align: inherit;
  text-transform: inherit;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  outline: 0
}

[type="checkbox"] {
  -webkit-appearance: checkbox;
  appearance: checkbox;
}

[type="radio"] {
  -webkit-appearance: radio;
  appearance: radio;
}

/*** Correct cursors for clickable elements. */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  cursor: pointer;
}

button:disabled,
[type="button"]:disabled,
[type="reset"]:disabled,
[type="submit"]:disabled {
  cursor: default;
}

select:disabled {
  opacity: inherit;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

label[for] {
  cursor: pointer;
}

details {
  display: block;
}

summary {
  display: list-item;
}
`;

//todo , 커스텀 푸터 헤더 작성해주세요
const MainStyled = styled.div`
  /* font-size : 20px 왜 있는건지 물어보기 */
  /* font-size: 20px; */
  min-height: 86.3vh;
`;

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

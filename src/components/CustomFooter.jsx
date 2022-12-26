import styled from "styled-components";

const CustomFooterStyled = styled.footer`
  width: 100%;
  height: 8rem;
  margin-top: 3.125rem;
  background-color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-container {
    color: #fff;
  }
`;

const CustomFooter = () => {
  return (
    <CustomFooterStyled>
      <div className="footer-container">이용 약관</div>
    </CustomFooterStyled>
  );
};

export default CustomFooter;

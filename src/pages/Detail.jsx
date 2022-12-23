import styled from "styled-components";
// , { StyledComponent } from "styled-components";
import CustomBoardDetail from "../components/CustomBoardDetail";
const Detail = () => {
  return (
    <StyledDiv>
      <CustomBoardDetail />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  max-width: 1440px;
  max-height: 1000px;
  width: 100%;
  height: 100%;
`;
export default Detail;

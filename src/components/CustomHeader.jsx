import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomHeaderStyled = styled.header`
  background-color: #f8f8f8;
  width: 100%;
  height: 3.75rem;
<<<<<<< HEAD
=======
  margin-bottom: 50px;
  padding: 50px 0;
>>>>>>> 58d1e4473efb73e6b37d6351f85680d53497a8d1
  .Header-container {
    margin: 0 auto;
    max-width: 90rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .Header-container-text {
      font-size: 1.25rem;
      line-height: 1.5rem;
      font-weight: 700;
      cursor: pointer;
<<<<<<< HEAD
=======
      &:hover {
        color: #eb5a3d;
      }
>>>>>>> 58d1e4473efb73e6b37d6351f85680d53497a8d1
    }
  }
  .title {
    /* TODO: 서비스 컬러를 선택하면 반영합니다. */
    color: #2563eb;
  }
`;

const CustomHeader = () => {
  return (
    <CustomHeaderStyled>
      <div className="Header-container">
        <Link to="/">
          <h2 className="Header-container-text title">WePlan</h2>
        </Link>
        <a
          href="https://github.com/yunjunhojj/kanban-front/pulls"
          target="_blank"
<<<<<<< HEAD
          rel="noopener noreferrer"
        >
=======
          rel="noopener noreferrer">
>>>>>>> 58d1e4473efb73e6b37d6351f85680d53497a8d1
          <div className="Header-container-text">Help</div>
        </a>
      </div>
    </CustomHeaderStyled>
  );
};

export default CustomHeader;

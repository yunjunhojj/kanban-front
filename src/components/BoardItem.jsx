import styled from "styled-components";
import { useDispatch } from "react-redux";
import CustomBtn from "./CustomBtn";
import { deleteBoard } from "../redux/modules/boardSlice";

const BoardItemBox = styled.div`
  border: 0.0625rem solid gray;
  border-radius: 1.25rem;

  max-width: 20rem;
  min-height: 160px;

  padding: 20px;

  h2 {
    background-color: aqua;
    min-height: 4.375rem;
  }

  .closeBox {
    border: 0rem;
    font-size: 24px;
  }
`;

// const Close = styled.button`
//   border: 0rem;
//   font-size: 24px;
// `;

// const TitleBox = styled.h2`
//   background-color: aqua;
//   min-height: 4.375rem;
// `;

const BoardItem = () => {
  const dispatch = useDispatch();

  const propsinit = [
    {
      id: "vzSp-jzTXppJSSP3eLZ3k",
      category: "working",
      title: "진행 중 제목",
      content: "보드 내용",
      pw: "보드 비밀번호",
      comments: [
        {
          id: "h-e0M_yaI40OgkHQv_0Yd",
          name: "작성자 이름",
          pw: "작성자 비밀번호",
          comment: "댓글",
        },
      ],
    },
    {
      id: "L1--H0Ob0NOMlfXUHt9r5",
      category: "validate",
      title: "QA 제목",
      content: "보드 내용",
      pw: "보드 비밀번호",
      comments: [
        {
          id: "CP93RdIrJI_xPxj0AVvjd",
          name: "작성자 이름",
          pw: "작성자 비밀번호",
          comment: "댓글",
        },
      ],
    },
  ];

  const onDelete = (id) => {
    dispatch(deleteBoard(id));
  };

  return (
    <BoardItemBox>
      <div> 담당자 </div>
      <h2> {propsinit[0].title} </h2>
      <CustomBtn
        category="progress"
        BoardItemId={propsinit[0].id}
        nameBtn="착수"
      >
        착수
      </CustomBtn>
      <CustomBtn category="back" BoardItemId={propsinit[0].id} nameBtn="번복">
        번복
      </CustomBtn>
      <CustomBtn
        category="validate"
        BoardItemId={propsinit[0].id}
        nameBtn="검토"
      >
        검토
      </CustomBtn>
      <CustomBtn
        category="complete"
        BoardItemId={propsinit[0].id}
        nameBtn="완료"
      >
        완료
      </CustomBtn>
      <CustomBtn
        category="archive"
        BoardItemId={propsinit[0].id}
        nameBtn="저장"
      >
        저장
      </CustomBtn>
      <button
        className="closeBtn"
        onClick={() => {
          onDelete(propsinit[0].id);
        }}
      >
        x
      </button>
    </BoardItemBox>
  );
};

export default BoardItem;
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { postBoardThunk } from "../redux/modules/boardSlice";
import { useInput } from "../Hooks";
import { nanoid } from "@reduxjs/toolkit";

/**
 * 2개의 버튼을 병렬로 배치하고 사용하기 위해 form을 사용하지 않습니다.
 * 제출에 대한 동작과 취소에 대한 동작 각각 독립적으로 사용하기 위해서 form을 사용하지 않습니다. form에 버튼 2개를 처리할 수 있으면 처리하겠습니다.
 */

const CreateBoardModalStyled = styled.div`
  /* Overlay */
  position: fixed;
  top: 3.75rem;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    z-index: 2;
    background-color: #fff;
    width: 46.5rem;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .user-info {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      .user-info-item {
        flex-grow: 1;
      }
    }
    .content-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .modal-input {
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 1px #8d8d8d8d;
  }
  .modal-btn-container {
    display: flex;
    gap: 1rem;
    justify-content: end;
    .modal-btn-item {
      font-size: 1rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      border: none;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  .text-area {
    font-size: 1rem;
    line-height: 1.5rem;
    height: 5.75rem;
  }
`;

const CreateBoardModal = () => {
  const dispatch = useDispatch();
  const [name, handleOnChangeName, resetName] = useInput("");
  const [password, handleOnChangePassword, resetPassword] = useInput("");
  const [title, handleOnChangeTitle, resetTitle] = useInput("");
  const [content, handleOnChangeContent, resetContent] = useInput("");

  const resetAllInput = () => {
    resetName();
    resetPassword();
    resetTitle();
    resetContent();
  };

  const handleSubmitBoard = (e) => {
    e.preventDefault();
    const newBoard = {
      id: nanoid(),
      name,
      title,
      content,
      password,
    };
    dispatch(postBoardThunk(newBoard));
    resetAllInput();
  };

  const cancelPostBoard = () => {
    resetAllInput();
  };
  return (
    <CreateBoardModalStyled>
      <div className="modal">
        <div className="user-info">
          <input
            className="modal-input user-info-item"
            type="text"
            placeholder="담당자 이름"
            name=""
            id=""
            value={name}
            onChange={(e) => handleOnChangeName(e)}
          />
          <input
            className="modal-input user-info-item"
            type="password"
            placeholder="비밀번호"
            name=""
            id=""
            value={password}
            onClick={(e) => handleOnChangePassword(e)}
          />
        </div>
        <input
          className="modal-input"
          type="text"
          placeholder="제목"
          name=""
          id=""
          value={title}
          onClick={(e) => handleOnChangeTitle(e)}
        />
        {/* <input type="text" placeholder="내용" name="" id="" /> */}
        <textarea
          className="modal-input text-area"
          name=""
          id=""
          placeholder="(내용)"
          value={content}
          onClick={(e) => handleOnChangeContent(e)}
        ></textarea>
        <div className="modal-btn-container">
          <button
            className="modal-btn-item"
            onClick={(e) => handleSubmitBoard(e)}
          >
            취소
          </button>
          <button className="modal-btn-item" onClick={() => cancelPostBoard()}>
            저장
          </button>
        </div>
      </div>
    </CreateBoardModalStyled>
  );
};

export default CreateBoardModal;
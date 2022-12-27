  const StyledBtn = styled.button`
    margin: 0 0.4375rem;
    padding: 0.625rem 1.25rem;
    border: 1px solid #aaa;
    border-radius: 0.625rem;

    transition-duration: 0.3s;
    :hover {
      color: #f2f2f2;
      background-color: #2563eb;
      border: 1px solid #2563eb;
    }
  `;

  const StyledDiv = styled.div`
    max-width: 90rem;
    min-height: 74.85vh;

    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f2f2f2;
    .board-container {
      margin: 0 auto;
      margin-bottom: 6.25rem;
      padding: 0 0.625rem;
      width: 100%;
    }
    .title {
      max-width: 936px;
      width: 100%;
      margin: 0 auto;
      font-weight: bold;
      font-size: 1.5rem;
    }
    .board-card-info {
      max-width: 58.5rem;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 0.5rem;
      .director,
      .category {
        width: 100%;
        margin-left: 0.75rem;
        font-weight: 700;
        font-size: 0.875rem;
      }
      .category {
        margin-left: 1.25rem;
      }
    }
    .board-content {
      display: block;
      max-width: 58.5rem;
      min-height: 8.75rem;
      width: 100%;
      padding: 1.25rem;
      margin: 0 auto;
      margin-bottom: 1.25rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      word-break: break-all;
      background-color: #ddd;
      box-shadow: 0.3125rem 0.3125rem 0.3125rem rgba(0, 0, 0, 0.5);
    }
    .line {
      margin-top: 10.25rem;
      height: 0.25rem;
      width: 100%;
      background-color: grey;
      margin: 0 0 3rem;
    }
    .btn-wrap {
      max-width: 58.5rem;
      width: 100%;
      margin: 0 auto;
    }
    .save-btn-wrap {
      max-width: 58.5rem;
      width: 100%;
      margin: 0 auto;

      .save-btn {
        margin: 0 0.4375rem;
        padding: 0.625rem 1.25rem;
        border: 1px solid #aaa;
        border-radius: 0.625rem;

        transition-duration: 0.3s;
        :hover {
          color: #f2f2f2;
          background-color: #2563eb;
          border: 1px solid #2563eb;
        }
      }
    }
  `;



  {editable ? (
            <form onSubmit={editBoardHandler}>
              <input
                className="board-content"
                value={content}
                onChange={boardContentChangeHandler}></input>
              <div className="save-btn-wrap">
                <StyledBtn type="submit" className="save-btn">
                  저장
                </StyledBtn>
              </div>
            </form>
          ) : (
            <>
              <div className="board-content">{board?.content}</div>
              <div className="btn-wrap">
                <StyledBtn onClick={() => editOn()}>편집</StyledBtn>
                <StyledBtn onClick={deleteBoardHandler} value={board?.id}>
                  삭제
                </StyledBtn>
              </div>
            </>}
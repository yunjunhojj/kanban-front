import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function CommentRead() {
  const comments = useSelector((state) => state.comment);

  return (
    <div style={{ border: "2px solid black", padding: "50px" }}>
      <div>
        <h3>댓글읽기창</h3>
        <p>작성자</p>
        <p>댓글내용</p>
        <input type="text" />
        <button>편집</button>
        <button>삭제</button>
        <button>더보기</button>
      </div>

      <div>
        {comments.map((item) => {
          return (
            <div key={item.id}>
              작성자: {item.writer}
              댓글내용: {item.comment}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentRead;

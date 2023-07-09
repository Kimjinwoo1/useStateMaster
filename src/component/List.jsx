import React, { useState } from "react";
import { styled } from "styled-components";

function List({ todos, setTodos }) {
  const [like, setLike] = useState([0, 0, 0]);

  return (
    <div>
      <div>
        {todos.map((item, i) => {
          return (
            <div key={item.id}>
              <span>{item.title}</span>
              <button
                onClick={() => {
                  const deleteTodos = todos.filter((event) => {
                    return event.id !== item.id;
                  });
                  setTodos(deleteTodos);
                }}
              >
                삭제
              </button>
              <span
                onClick={() => {
                  let likeCnt = [...like];
                  likeCnt[i] += 1;
                  setLike(likeCnt);

                  // let likeCnt = [...like];
                  // let likeCnt = like;
                  // likeCnt[i] += 1;
                  // setLike(likeCnt);
                }}
              >
                ♡
              </span>
              {like[i]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;

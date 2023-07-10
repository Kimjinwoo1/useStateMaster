import React, { useState } from "react";

function List({ todos, setTodos }) {
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
                  item.likeCount++;
                  setTodos(
                    todos.map((item) => {
                      return {
                        id: item.id,
                        title: item.title,
                        likeCount: item.likeCount,
                      };
                    })
                  );
                }}
              >
                ♡
              </span>
              {item.likeCount}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;

import React, { useState } from "react";
import uuid from "react-uuid";
import { styled } from "styled-components";

function Input({ setTodos, todos }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          const newTodo = {
            title: title,
            id: uuid(),
            likeCount: 0,
          };
          setTodos([...todos, newTodo]);

          setTitle("");
        }}
      >
        추가
      </button>
    </div>
  );
}

export default Input;

import React, { useState } from "react";
import { styled } from "styled-components";

function DarkMode() {
  const [darkMode, setDarkMode] = useState("");

  const clickCheckBox = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div
        htmlFor="checkbox"
        style={{
          background: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        {darkMode ? "다크모드!" : "화이트 모드!"}
      </div>
      <input
        type="checkbox"
        id="checkbox"
        value={darkMode}
        onClick={clickCheckBox}
      ></input>
    </div>
  );
}

export default DarkMode;

const StCheckBox = styled.input`
  background-color: black;
`;

import React from "react";
import { styled } from "styled-components";

function Header() {
  return (
    <div>
      <StHeaderDiv>Todo list</StHeaderDiv>
    </div>
  );
}

export default Header;

const StHeaderDiv = styled.div`
  text-align: center;
`;

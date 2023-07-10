import { useState } from "react";
import Header from "./component/Header";
import Input from "./component/Input";
import List from "./component/List";
import uuid from "react-uuid";
import Toggle from "./component/Toggle";
import DarkMode from "./component/DarkMode";
import { styled } from "styled-components";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "리엑트 공부하기",
      id: uuid(),
      likeCount: 0,
    },
    {
      title: "리엑트 공부하기2",
      id: uuid(),
      likeCount: 0,
    },
  ]);

  return (
    <StContainerDiv>
      <Header />
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Toggle />
      <DarkMode />
    </StContainerDiv>
  );
}

export default App;

const StContainerDiv = styled.div`
  width: 800;
  height: 1000px;
  text-align: center;
`;

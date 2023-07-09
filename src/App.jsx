import { useState } from "react";
import Header from "./component/Header";
import Input from "./component/Input";
import List from "./component/List";
import uuid from "react-uuid";
import Toggle from "./component/Toggle";
import DarkMode from "./component/DarkMode";

function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <Header />
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Toggle />
      <DarkMode />
    </div>
  );
}

export default App;

const initialState = [
  {
    title: "리엑트 공부하기",
    id: uuid(),
  },
  {
    title: "리엑트 공부하기2",
    id: uuid(),
  },
];

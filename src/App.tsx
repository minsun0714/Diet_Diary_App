import React from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar/Table";
import ToDoCards from "./components/ToDos/ToDoCards";

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <Main>
      <Calendar />
      <ToDoCards />
    </Main>
  );
}

export default App;

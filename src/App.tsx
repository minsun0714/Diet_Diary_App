import React from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar/Table";
import ToDoCards from "./components/ToDos/ToDoCards";

function App() {
  return (
    <main>
      <Calendar />
      <ToDoCards />
    </main>
  );
}

export default App;

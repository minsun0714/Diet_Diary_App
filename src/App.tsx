import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar/Table";
import ToDoCards from "./components/ToDos/ToDoCards";

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

function App() {
  const today = new Date();
  const [todaysYear, todaysMonth, todaysDate] = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ];

  const [currentDate, setCurrentDate] = useState({
    year: todaysYear,
    month: todaysMonth,
    date: todaysDate,
  });

  return (
    <Main>
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ToDoCards currentDate={currentDate} />
    </Main>
  );
}

export default App;

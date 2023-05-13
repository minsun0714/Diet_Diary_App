import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar/Table";
import ToDoCards from "./components/ToDos/ToDoCards";

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

export type CurrentDate = {
  year: number;
  month: number;
  date: number;
};

function App() {
  const today = new Date();
  const todaysYear = today.getFullYear();
  const todaysMonth = today.getMonth();
  const todaysDate = today.getDate();

  const [currentDate, setCurrentDate] = useState<CurrentDate>({
    year: todaysYear,
    month: todaysMonth,
    date: todaysDate,
  });

  return (
    <Main>
      <Calendar setCurrentDate={setCurrentDate} />
      <ToDoCards currentDate={currentDate} />
    </Main>
  );
}

export default App;

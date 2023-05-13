import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar/Table";
import ToDoCards from "./components/ToDos/ToDoCards";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../src/store/toDosStore";

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;
type MemoProp = {
  year: number;
  month: number;
  date: number;
  text: string;
  id: number;
};

function App() {
  const dispatch = useDispatch();
  const memoList = useSelector((state: { toDos: MemoProp[] }) => state.toDos);

  const today = new Date();
  const [todaysYear, todaysMonth, todaysDate] = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ];

  const [memo, setMemo] = useState("");
  const [currentDate, setCurrentDate] = useState({
    year: todaysYear,
    month: todaysMonth,
    date: todaysDate,
  });

  const handleAddMemo = () => {
    dispatch(addToDo({ ...currentDate, id: Date.now(), text: memo }));
    setMemo("");
  };

  return (
    <Main>
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ToDoCards
        memoList={memoList}
        memo={memo}
        setMemo={setMemo}
        handleAddMemo={handleAddMemo}
        currentDate={currentDate}
      />
    </Main>
  );
}

export default App;

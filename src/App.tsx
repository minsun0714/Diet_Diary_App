import React, { useState, useEffect } from "react";
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
};

// interface Props {
//   year: number;
//   month: number;
//   calendar: {
//     year: number;
//     month: number;
//   };
// }
// const dispatch = useDispatch();
// const state = useSelector((store: Props) => store.calendar);

function App() {
  const dispatch = useDispatch();
  const memoList = useSelector((state: { toDos: MemoProp[] }) => state.toDos);

  const today = new Date();
  const [todaysYear, todaysMonth, todaysDate] = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ];

  // const [memoList, setMemoList] = useState<string[]>([]);
  const [memo, setMemo] = useState("");
  const [currentDate, setCurrentDate] = useState({
    year: todaysYear,
    month: todaysMonth,
    date: todaysDate,
  });
  console.log("memo", memo);
  console.log("지금 날짜", currentDate);
  const handleAddMemo = () => {
    console.log(memoList);
    dispatch(addToDo({ ...currentDate, text: memo }));
  };

  return (
    <Main>
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ToDoCards
        memoList={memoList}
        memo={memo}
        setMemo={setMemo}
        handleAddMemo={handleAddMemo}
      />
    </Main>
  );
}

export default App;

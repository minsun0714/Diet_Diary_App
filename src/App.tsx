import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar/Table";
import ToDoCards from "./components/ToDos/ToDoCards";

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;
type MemoProp = {
  id: string;
  text: string;
};

function App() {
  const [memoList, setMemoList] = useState<string[]>([]);
  const [memo, setMemo] = useState("");
  const [currentDate, setCurrentDate] = useState(0);
  console.log("memo", memo);
  console.log("지금 날짜", currentDate);
  const handleAddMemo = () => {
    console.log(memoList);
  };

  return (
    <Main>
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ToDoCards
        memoList={memoList}
        setMemoList={setMemoList}
        memo={memo}
        setMemo={setMemo}
        handleAddMemo={handleAddMemo}
      />
    </Main>
  );
}

export default App;

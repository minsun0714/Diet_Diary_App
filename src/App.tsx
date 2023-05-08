import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar/Table";
import ToDoCards from "./components/ToDos/ToDoCards";
import { useDispatch, useSelector } from "react-redux";
import { addMemo } from "./store/memoStore";

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
  console.log(memoList);
  return (
    <Main>
      <Calendar />
      <ToDoCards
        memoList={memoList}
        setMemoList={setMemoList}
        memo={memo}
        setMemo={setMemo}
      />
    </Main>
  );
}

export default App;

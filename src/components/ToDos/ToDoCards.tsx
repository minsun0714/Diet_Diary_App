import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addMemo } from "../../store/memoStore";

type MemoProp = {
  id: string;
  text: string;
};

function ToDoCards() {
  const [memoList, setMemoList] = useState<string[]>([]);
  const [memo, setMemo] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
    setMemo(event.target.value);
  };

  const onClick = () => {
    setMemoList([memo, ...memoList]);
    console.log(memoList);
  };
  return (
    <div>
      <textarea onChange={onChange}></textarea>
      <button onClick={onClick}>+</button>
      <ul>
        {memoList.map((memo: string, idx: number) => (
          <li key={idx}>{memo}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoCards;

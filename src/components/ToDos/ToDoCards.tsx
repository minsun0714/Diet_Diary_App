import React, { useState } from "react";
import styled from "styled-components";

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

import React, { useState } from "react";
import styled from "styled-components";

function ToDoCards({ memoList, setMemoList, memo, setMemo }: any) {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  const onClick = () => {
    setMemoList([memo, ...memoList]);
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

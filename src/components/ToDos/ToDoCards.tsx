import React, { useState } from "react";
import styled from "styled-components";

function ToDoCards({
  memoList,
  setMemoList,
  memo,
  setMemo,
  handleAddMemo,
}: any) {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  const onClick = () => {
    setMemo(memo);
  };
  return (
    <div>
      <textarea onChange={onChange}></textarea>
      <button onClick={handleAddMemo}>+</button>
      <ul>
        {memoList.map((memo: string, idx: number) => (
          <li key={idx}>{memo}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoCards;

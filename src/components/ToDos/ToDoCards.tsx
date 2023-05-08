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

  return (
    <div>
      <textarea onChange={onChange}></textarea>
      <button onClick={handleAddMemo}>+</button>
      <ul>
        {memoList.map((memo: any, idx: number) => (
          <li key={idx}>
            {memo.text}
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoCards;

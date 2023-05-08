import React, { useState } from "react";
import styled from "styled-components";
import { deleteToDo } from "../../store/toDosStore";
import { useDispatch, useSelector } from "react-redux";

const Card = styled.li`
  border: 1px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(200deg, rgba(130, 124, 124, 0.1), #f1bdca);
  margin: 10px;
`;

type ToDo = {
  id: number;
  year: number;
  month: number;
  date: number;
  text: string;
};

function ToDoCards({
  memoList,
  setMemoList,
  memo,
  setMemo,
  handleAddMemo,
}: any) {
  const dispatch = useDispatch();
  const toDosList = useSelector((state: any) => state.toDos);
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteToDo({ id, ...toDosList }));
  };

  return (
    <div>
      <textarea onChange={onChange}></textarea>
      <button onClick={handleAddMemo}>+</button>
      <ul>
        {memoList.map((memo: any, idx: number) => (
          <Card key={idx}>
            {memo.text}
            {`${memo.year}년 ${memo.month}월 ${memo.date}일`}
            <button onClick={() => handleDelete(memo.id)}>삭제</button>
          </Card>
        ))}
      </ul>
    </div>
  );
}
export default ToDoCards;

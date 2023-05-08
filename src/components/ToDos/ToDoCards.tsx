import React, { useState } from "react";
import styled from "styled-components";
import { deleteToDo, updateToDo } from "../../store/toDosStore";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

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
  currentDate,
}: any) {
  const dispatch = useDispatch();
  const toDosList = useSelector((state: any) => state.toDos);
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteToDo({ id, ...toDosList }));
  };

  const handleUpdate = (id: number) => {
    const updatedToDo = toDosList.find((toDo: ToDo) => toDo.id === id);
    if (updatedToDo) {
      dispatch(
        updateToDo({
          id,
          text: memo,
          year: currentDate.year,
          month: currentDate.month,
          date: currentDate.date,
        })
      );
    }
  };

  const currentList = memoList.filter(
    (memo: ToDo) =>
      memo.year === currentDate.year &&
      memo.month === currentDate.month &&
      memo.date === currentDate.date
  );

  return (
    <div>
      <textarea onChange={onChange}></textarea>
      <button onClick={handleAddMemo}>+</button>
      <ul>
        {currentList.map((memo: any, idx: number) => (
          <Card key={idx}>
            {memo.text}
            {`${memo.year}년 ${memo.month}월 ${memo.date}일`}
            <button onClick={() => handleUpdate(memo.id)}>수정</button>
            <button onClick={() => handleDelete(memo.id)}>삭제</button>
          </Card>
        ))}
      </ul>
    </div>
  );
}
export default ToDoCards;

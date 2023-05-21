import React, { useState } from "react";
import styled from "styled-components";
import { deleteToDo, updateToDo } from "../../store/toDosStore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";
import { addToDo } from "../../store/toDosStore";
import {
  ICurrentDate,
  ToDo,
  CardsWrapper,
  CardContainer,
  Card,
  TodaysDate,
  NewMemo,
  AddBtn,
  UpdateInput,
  TodaysDateOnCard,
  Btn,
} from "./ToDoCardsStyleAndType";

function ToDoCards({ currentDate }: ICurrentDate) {
  const dispatch = useDispatch();
  const [isUpdateBtnClicked, setIsUpdateBtnClicked] = useState(false);
  const [targetId, setTargetId] = useState(0);
  const [updatedContent, setUpdatedContent] = useState("");
  const [memo, setMemo] = useState("");
  const toDosList = useSelector((state: RootState) => state.toDos);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  const onChangeUpdatedContent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedContent(event.currentTarget.value);
  };

  const handleAddMemo = () => {
    if (!memo) return;
    dispatch(addToDo({ ...currentDate, id: Date.now(), text: memo }));
    setMemo("");
  };

  const handleDelete = (id: number) => {
    if (isUpdateBtnClicked) {
      setIsUpdateBtnClicked(false);
      return;
    }
    const toDoToDelete = toDosList.find((toDo: ToDo) => toDo.id === id);
    if (toDoToDelete) {
      dispatch(deleteToDo(toDoToDelete));
    }
  };

  const handleUpdate = (id: number, text: string) => {
    if (!isUpdateBtnClicked) {
      setIsUpdateBtnClicked(true);
      setTargetId(id);
      setUpdatedContent(text);
      return;
    }
    const updatedToDo = toDosList.find((toDo: ToDo) => toDo.id === id);
    if (id !== targetId) {
      setIsUpdateBtnClicked(false);
      return;
    }
    if (updatedToDo) {
      dispatch(
        updateToDo({
          id,
          text: updatedContent,
          year: currentDate.year,
          month: currentDate.month,
          date: currentDate.date,
        })
      );
    }
    setIsUpdateBtnClicked(false);
  };

  const currentList = toDosList.filter(
    (memo: ToDo) =>
      memo.year === currentDate.year &&
      memo.month === currentDate.month &&
      memo.date === currentDate.date
  );

  return (
    <CardsWrapper>
      <TodaysDate>{`${currentDate.year}년 ${currentDate.month + 1}월 ${
        currentDate.date
      }일`}</TodaysDate>
      <NewMemo maxLength={25} value={memo} onChange={onChange}></NewMemo>
      <AddBtn onClick={handleAddMemo}>추가</AddBtn>
      <CardContainer>
        {currentList.map((toDo: ToDo) => (
          <Card key={toDo.id}>
            {isUpdateBtnClicked && toDo.id === targetId ? (
              <UpdateInput
                autoFocus
                maxLength={25}
                placeholder='수정할 내용을 입력해주세요'
                value={updatedContent}
                onChange={onChangeUpdatedContent}
              ></UpdateInput>
            ) : (
              toDo.text
            )}
            <TodaysDateOnCard>{`${toDo.year}년 ${toDo.month + 1}월 ${
              toDo.date
            }일`}</TodaysDateOnCard>
            <Btn onClick={() => handleUpdate(toDo.id, toDo.text)}>
              {isUpdateBtnClicked && toDo.id === targetId ? "완료" : "수정"}
            </Btn>
            <Btn onClick={() => handleDelete(toDo.id)}>
              {" "}
              {isUpdateBtnClicked && toDo.id === targetId ? "취소" : "삭제"}
            </Btn>
          </Card>
        ))}
      </CardContainer>
    </CardsWrapper>
  );
}
export default ToDoCards;

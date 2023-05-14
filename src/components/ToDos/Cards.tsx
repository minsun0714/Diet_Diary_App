import React, { useState } from "react";
import styled from "styled-components";
import { deleteToDo, updateToDo } from "../../store/toDosStore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";
import { ToDo, Btn, ICurrentDate } from "./ToDoCards";

const Card = styled.li`
  border: 0px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(
    100deg,
    rgba(234, 217, 226, 0.201),
    #e9a1b3
  );
  margin: 10px;
  margin-left: -30px;
  padding-top: 40px;
  height: 100px;
  width: 25vw;
  font-size: 20px;
  list-style: none;
  text-align: center;
`;

function Cards({ currentDate }: ICurrentDate) {
  const dispatch = useDispatch();
  const [isUpdateBtnClicked, setIsUpdateBtnClicked] = useState(false);
  const [targetId, setTargetId] = useState(0);
  const [updatedContent, setUpdatedContent] = useState("");
  const toDosList = useSelector((state: RootState) => state.toDos);

  const onChangeUpdatedContent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedContent(event.currentTarget.value);
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
    <>
      {currentList.map((toDo: ToDo) => (
        <Card key={toDo.id}>
          {isUpdateBtnClicked && toDo.id === targetId ? (
            <input
              placeholder='수정할 내용을 입력해주세요'
              value={updatedContent}
              onChange={onChangeUpdatedContent}
            ></input>
          ) : (
            toDo.text
          )}
          <p>{`${toDo.year}년 ${toDo.month + 1}월 ${toDo.date}일`}</p>
          <Btn onClick={() => handleUpdate(toDo.id, toDo.text)}>
            {isUpdateBtnClicked && toDo.id === targetId ? "완료" : "수정"}
          </Btn>
          <Btn onClick={() => handleDelete(toDo.id)}>
            {" "}
            {isUpdateBtnClicked && toDo.id === targetId ? "취소" : "삭제"}
          </Btn>
        </Card>
      ))}
    </>
  );
}
export default Cards;

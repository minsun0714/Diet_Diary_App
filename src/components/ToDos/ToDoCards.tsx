import React, { useState } from "react";
import styled from "styled-components";
import { deleteToDo, updateToDo } from "../../store/toDosStore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";
import { addToDo } from "../../store/toDosStore";
import { CurrentDate } from "../../App";

const TodaysDate = styled.h1`
  color: gray;
  font-size: 40px;
  position: absolute;
  top: 0;
  margin-top: 60px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, rgba(125, 202, 220, 0.1), #e6cdcd);
  border-radius: 20px;
  width: 40vw;
  margin-right: 7vw;
  padding-top: 160px;
  height: 695px;
`;

const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  margin-top: 180px;
  margin-bottom: 70px;
  padding-top: 540px;
`;

const TextArea = styled.textarea`
  position: absolute;
  top: 0;
  margin-top: 130px;
  background-color: white;
  border-radius: 10px;
  border: 1px inset white;
  resize: none;
  height: 80px;
  width: 20vw;
  outline: none;
`;

const Card = styled.li`
  position: relative;
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
  height: 130px;
  width: 21vw;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  list-style: none;
  text-align: center;
  z-index: 999;
`;

const Btn = styled.button`
  width: 8vw;
  border: none;
  border-radius: 15px;
  margin: 5px;
  height: 40px;
  color: gray;
  text-shadow: 1px 1px 1px white;
  box-shadow: 1px 1px 5px gray;
`;

const AddBtn = styled.button`
  position: absolute;
  width: 20.2vw;
  background-image: white;
  border: none;
  height: 50px;
  margin-bottom: 540px;
  box-shadow: 1px 1px 5px gray;
  border-radius: 10px;
`;

const TodaysDateCard = styled.p`
  font-size: 15px;
`;

type ToDo = {
  id: number;
  year: number;
  month: number;
  date: number;
  text: string;
};

interface ICurrentDate {
  currentDate: CurrentDate;
}

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
      <TextArea value={memo} onChange={onChange}></TextArea>
      <AddBtn onClick={handleAddMemo}>추가</AddBtn>
      <Cards>
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
            <TodaysDateCard>{`${toDo.year}년 ${toDo.month + 1}월 ${
              toDo.date
            }일`}</TodaysDateCard>
            <Btn onClick={() => handleUpdate(toDo.id, toDo.text)}>
              {isUpdateBtnClicked && toDo.id === targetId ? "완료" : "수정"}
            </Btn>
            <Btn onClick={() => handleDelete(toDo.id)}>
              {" "}
              {isUpdateBtnClicked && toDo.id === targetId ? "취소" : "삭제"}
            </Btn>
          </Card>
        ))}
      </Cards>
    </CardsWrapper>
  );
}
export default ToDoCards;

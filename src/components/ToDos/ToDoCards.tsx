import React, { useState } from "react";
import styled from "styled-components";
import { deleteToDo, updateToDo } from "../../store/toDosStore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";
import { addToDo } from "../../store/toDosStore";
import { CurrentDate } from "../../App";

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  border-radius: 20px;
  width: 40vw;
  margin-right: 7vw;
`;

const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 80px;
  width: 20vw;
`;

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

const Btn = styled.button`
  width: 12vw;
  border: none;
  border-radius: 3px;
  margin: 3px;
  margin-top: 0px;
  height: 40px;
  color: gray;
  text-shadow: 1px 1px 1px white;
  box-shadow: 1px 1px 5px pink;
`;

const AddBtn = styled(Btn)`
  width: 20vw;
  box-shadow: 1px 1px 1px gray;
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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      console.log(targetId);
      return;
    }
    const updatedToDo = toDosList.find((toDo: ToDo) => toDo.id === id);
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
      <h1>{`${currentDate.year}년 ${currentDate.month + 1}월 ${
        currentDate.date
      }일`}</h1>
      <Input value={memo} onChange={onChange}></Input>
      <AddBtn onClick={handleAddMemo}>추가</AddBtn>
      <Cards>
        {currentList.map((memo: ToDo) => (
          <Card key={memo.id}>
            {isUpdateBtnClicked && memo.id === targetId ? (
              <input
                placeholder='수정할 내용을 입력해주세요'
                onChange={onChangeUpdatedContent}
              ></input>
            ) : (
              memo.text
            )}
            <p>{`${memo.year}년 ${memo.month + 1}월 ${memo.date}일`}</p>
            <Btn onClick={() => handleUpdate(memo.id, updatedContent)}>
              {isUpdateBtnClicked && memo.id === targetId ? "완료" : "수정"}
            </Btn>
            <Btn onClick={() => handleDelete(memo.id)}>
              {" "}
              {isUpdateBtnClicked && memo.id === targetId ? "취소" : "삭제"}
            </Btn>
          </Card>
        ))}
      </Cards>
    </CardsWrapper>
  );
}
export default ToDoCards;

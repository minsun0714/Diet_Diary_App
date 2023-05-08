import React from "react";
import styled from "styled-components";
import { deleteToDo, updateToDo } from "../../store/toDosStore";
import { useDispatch, useSelector } from "react-redux";

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.li`
  border: 1px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(
    200deg,
    rgba(234, 217, 226, 0.201),
    #e9a1b3
  );
  margin: 10px;
  height: 100px;
  width: 25vw;
`;

const Btn = styled.button`
  width: 12vw;
  background-image: linear-gradient(
    200deg,
    rgba(214, 203, 211, 0.909),
    #bcceda
  );
  border: none;
  border-radius: 3px;
  margin: 3px;
  margin-top: -90px;
  height: 40px;
  color: gray;
  text-shadow: 1px 1px 1px white;
  box-shadow: 1px 1px 5px pink;
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
    <CardsWrapper>
      <textarea onChange={onChange}></textarea>
      <button onClick={handleAddMemo}>+</button>
      <Cards>
        {currentList.map((memo: any, idx: number) => (
          <Card key={idx}>
            {memo.text}
            <br />
            <p>{`${memo.year}년 ${memo.month}월 ${memo.date}일`}</p>
            <br />
            <Btn onClick={() => handleUpdate(memo.id)}>수정</Btn>
            <Btn onClick={() => handleDelete(memo.id)}>삭제</Btn>
          </Card>
        ))}
      </Cards>
    </CardsWrapper>
  );
}
export default ToDoCards;

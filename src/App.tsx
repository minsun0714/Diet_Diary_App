import React from "react";
import styled from "styled-components";
import Days from "./components/Days";
import Dates from "./components/Dates";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseYear,
  decreaseYear,
  increaseMonth,
  decreaseMonth,
} from "./store/store";

const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 20px;
  height: 850px;
  width: 70vw;
  margin: auto;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 4px #999;

  @media (max-width: 500px) {
    display: none;
  }
`;

const YearWrapper = styled.caption`
  display: flex;
  position: absolute;
`;

const Year = styled.span`
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 700px;
  color: gray;
  text-shadow: 2px 2px 4px white;
`;

const MonthWrapper = styled.caption`
  display: flex;
  position: absolute;
  margin-bottom: 500px;
`;

const Month = styled.span`
  font-size: 70px;
  color: white;
  text-shadow: 2px 2px 4px pink;
`;

const Btn = styled.button`
  background-color: rgba(0, 0, 0, 0.05);
  height: 50px;
  width: 50px;
  margin: 15px 30px;
  border: rgba(0, 0, 0, 0.1) 2px solid;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface Props {
  year: number;
  month: number;
}
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: Props) => state);
  const handleClickPrevYear = () => {
    dispatch(decreaseYear());
  };
  const handleClickNextYear = () => {
    dispatch(increaseYear());
  };
  const handleClickPrevMonth = () => {
    dispatch(decreaseMonth());
  };
  const handleClickNextMonth = () => {
    dispatch(increaseMonth());
  };

  return (
    <Table>
      <YearWrapper>
        <Btn onClick={handleClickPrevYear}>◀️</Btn>
        <Year>{state.year}</Year>
        <Btn onClick={handleClickNextYear}>▶️</Btn>
      </YearWrapper>
      <MonthWrapper>
        <Btn onClick={handleClickPrevMonth}>◀️</Btn>
        <Month>{state.month + 1}월</Month>
        <Btn onClick={handleClickNextMonth}>▶️</Btn>
      </MonthWrapper>
      <Days />
      <Dates year={state.year} month={state.month} />
    </Table>
  );
}

export default App;

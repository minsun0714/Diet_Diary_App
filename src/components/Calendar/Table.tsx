import React from "react";
import styled from "styled-components";
import Days from "./Days";
import Dates from "./Dates";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseYear,
  decreaseYear,
  increaseMonth,
  decreaseMonth,
} from "../../store/calendarStore";

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
  background: linear-gradient(120deg, rgba(125, 202, 220, 0.1), #e6cdcd);
  box-shadow: 2px 2px 4px #999;

  @media (max-width: 620px) {
    display: none;
  }
`;

const YearWrapper = styled.caption`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  margin-bottom: 650px;
`;

const Year = styled.span`
  font-family: monospace;
  font-size: 50px;
  color: white;
  text-shadow: 2px 2px 4px pink;
  padding-bottom: 100px;
  position: absolute;
`;

const MonthWrapper = styled.caption`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  margin-bottom: 500px;
`;

const Month = styled.span`
  font-family: monospace;
  font-size: 45px;
  color: white;
  text-shadow: 2px 2px 4px pink;
  padding-bottom: 40px;
  position: absolute;
`;

const Btn = styled.button`
  background: linear-gradient(200deg, rgba(125, 202, 220, 0.1), #e6cdcd);
  height: 45px;
  width: 45px;
  margin: 10px 13vw;
  border: rgba(0, 0, 0, 0) 2px solid;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Calendar({ currentDate, setCurrentDate }: any) {
  interface Props {
    year: number;
    month: number;
  }
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
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Table>
      <YearWrapper>
        <Btn onClick={handleClickPrevYear}>◀️</Btn>
        <Year>{state.year}</Year>
        <Btn onClick={handleClickNextYear}>▶️</Btn>
      </YearWrapper>
      <MonthWrapper>
        <Btn onClick={handleClickPrevMonth}>◀️</Btn>
        <Month>{monthArray[state.month]}</Month>
        <Btn onClick={handleClickNextMonth}>▶️</Btn>
      </MonthWrapper>
      <Days />
      <Dates
        year={state.year}
        month={state.month}
        setCurrentDate={setCurrentDate}
      />
    </Table>
  );
}
export default Calendar;

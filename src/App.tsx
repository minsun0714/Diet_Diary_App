import React, { useState } from "react";
import styled from "styled-components";
import Days from "./components/Days";
import Dates from "./components/Dates";

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

const Year = styled.div`
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

const Month = styled.div`
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

function App() {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const handleClickPrevYear = () => {
    setYear(year - 1);
    console.log(year);
  };
  const handleClickNextYear = () => {
    setYear(year + 1);
    console.log(year);
  };
  const handleClickPrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else setMonth(month - 1);
  };
  const handleClickNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else setMonth(month + 1);
  };

  return (
    <Table>
      <YearWrapper>
        <Btn onClick={handleClickPrevYear}>◀️</Btn>
        <Year>{year}</Year>
        <Btn onClick={handleClickNextYear}>▶️</Btn>
      </YearWrapper>
      <MonthWrapper>
        <Btn onClick={handleClickPrevMonth}>◀️</Btn>
        <Month>{month + 1}월</Month>
        <Btn onClick={handleClickNextMonth}>▶️</Btn>
      </MonthWrapper>
      <Days />
      <Dates year={year} month={month} />
    </Table>
  );
}

export default App;

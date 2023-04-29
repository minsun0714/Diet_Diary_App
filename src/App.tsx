import React from "react";
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
  return (
    <Table>
      <YearWrapper>
        <Btn>◀️</Btn>
        <Year>2023</Year>
        <Btn>▶️</Btn>
      </YearWrapper>
      <MonthWrapper>
        <Btn>◀️</Btn>
        <Month>4월</Month>
        <Btn>▶️</Btn>
      </MonthWrapper>
      <Days />
      <Dates />
    </Table>
  );
}

export default App;

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

const Year = styled.caption`
  position: absolute;
  font-size: 50px;
  margin-bottom: 700px;
  color: gray;
  text-shadow: 2px 2px 4px white;
`;

const Month = styled.caption`
  position: absolute;
  margin-bottom: 500px;
  font-size: 70px;
  color: white;
  text-shadow: 2px 2px 4px pink;
`;

function App() {
  return (
    <Table>
      <Year>2023</Year>
      <Month>4월</Month>
      <Days />
      <Dates />
    </Table>
  );
}

export default App;

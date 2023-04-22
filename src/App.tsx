import React from "react";
import styled from "styled-components";
import Days from "./components/DaysRow";

const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  border: 1px solid transparent;
  border-radius: 20px;
  height: 85vh;
  width: 70vw;
  margin: auto;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 4px #999;
`;

const Year = styled.caption`
  font-size: 50px;
  margin-top: -460px;
  margin-bottom: 20px;
  color: gray;
  text-shadow: 2px 2px 4px white;
`;

const Month = styled.caption`
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
    </Table>
  );
}

export default App;

import React from "react";
import styled from "styled-components";

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

const DaysRow = styled.tbody`
  margin: 30px 11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`;

const Days = styled.th`
  font-size: 40px;
  letter-spacing: 8rem;
  color: white;
  text-shadow: 2px 2px 0.5px rgba(0, 0, 0, 0.5);
`;

function App() {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const showDays = days.map((day, idx) => <Days key={idx}>{day}</Days>);
  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  console.log(day, date);

  return (
    <Table>
      <Year>2023</Year>
      <Month>4월</Month>
      <DaysRow>
        <tr>{showDays}</tr>
        {/* <tr>
          <td>
            <time dateTime='2023-04-01T00:00:00.000Z'>1</time>
          </td>
          <td>
            <time dateTime='2023-04-02T00:00:00.000Z'>2</time>
          </td>
          <td>
            <time dateTime='2023-04-03T00:00:00.000Z'>3</time>
          </td>
          <td>
            <time dateTime='2023-04-04T00:00:00.000Z'>4</time>
          </td>
          <td>
            <time dateTime='2023-04-05T00:00:00.000Z'>5</time>
          </td>
          <td>
            <time dateTime='2023-04-06T00:00:00.000Z'>6</time>
          </td>
          <td>
            <time dateTime='2023-04-07T00:00:00.000Z'>7</time>
          </td>
        </tr> */}
      </DaysRow>
    </Table>
  );
}

export default App;

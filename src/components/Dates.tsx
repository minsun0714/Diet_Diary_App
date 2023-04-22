import React from "react";
import styled from "styled-components";

const DatesContainer = styled.tbody`
  margin: 30px 11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`;

function Dates() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  // 이번 달 1일이 무슨 요일인지 구함
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // 이번 달이 며칠까지 있는지 구함
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  // 날짜를 채워줄 2차원 빈 배열 선언
  let daysOfThisMonth = [...Array(6)].map((_) => [...Array(7)].map(() => 0));
  let day = firstDayOfMonth;
  // 이번 달 1일에 해당하는 원소에 1을 할당
  daysOfThisMonth[0][day] = 1;

  for (let i = 0; i < daysOfThisMonth.length; i++) {
    for (let j = 0; j < 7; j++) {
      if (daysOfThisMonth[i][j - 1]) {
        daysOfThisMonth[i][j] = daysOfThisMonth[i][j - 1] + 1;
      } else if (daysOfThisMonth[i - 1]?.[6]) {
        daysOfThisMonth[i][j] = daysOfThisMonth[i - 1][6] + 1;
      }
      if (daysOfThisMonth[i][j] === lastDateOfMonth) break;
    }
  }

  console.log(daysOfThisMonth);

  const now = Date.now();
  const dates = daysOfThisMonth.map((week, i) => (
    <tr key={now + i}>
      {week.map((date, j) => (
        <th key={now + j}>{date}</th>
      ))}
    </tr>
  ));

  return <DatesContainer>{dates}</DatesContainer>;
}
export default Dates;

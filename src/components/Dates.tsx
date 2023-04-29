import React from "react";
import styled from "styled-components";

const DatesContainer = styled.tbody`
  margin-top: 200px;
`;
const EachDate = styled.th`
  font-size: 40px;
  padding-top: 22px;
  width: 10vw;
  text-shadow: 1px 1px 2px gray;
  color: ${(props) => {
    return "red";
  }}
  &:hover {
    color: pink;
    cursor: pointer;
  }
`;

type LastDate = 28 | 29 | 30 | 31;

function Dates() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  // 지난 달 마지막 날짜를 구함
  const lastDateOfLastMonth: LastDate = new Date(
    year,
    month,
    0
  ).getDate() as LastDate;
  // 이번 달 1일이 무슨 요일인지 구함
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // 이번 달이 며칠까지 있는지 구함
  const lastDateOfMonth: LastDate = new Date(
    year,
    month + 1,
    0
  ).getDate() as LastDate;

  // 날짜를 채워줄 2차원 빈 배열 선언
  let daysOfThisMonth = [...Array(6)].map((_) => [...Array(7)].map(() => 0));
  let day = firstDayOfMonth;
  // 이번 달 1일에 해당하는 원소에 1을 할당
  daysOfThisMonth[0][day] = 1;

  for (let i = 0; i < daysOfThisMonth.length; i++) {
    if (i === 0) {
      for (let k = 1; k <= firstDayOfMonth; k++) {
        daysOfThisMonth[0][firstDayOfMonth - k] = lastDateOfLastMonth - k + 1;
      }
      continue;
    }
    for (let j = 0; j < 7; j++) {
      if (daysOfThisMonth[i][j - 1] && daysOfThisMonth[i][j] !== 1) {
        daysOfThisMonth[i][j] = daysOfThisMonth[i][j - 1] + 1;
      } else if (daysOfThisMonth[i - 1]?.[6]) {
        daysOfThisMonth[i][j] = daysOfThisMonth[i - 1][6] + 1;
      }

      if (daysOfThisMonth[i][j - 1] === lastDateOfMonth) {
        daysOfThisMonth[i][j] = 1;
      }
    }
  }

  const now = Date.now();
  const showDates = daysOfThisMonth.map((week, i) => (
    <tr key={now + i}>
      {week.map((date, j) => (
        <EachDate key={now + j}>{date ? date : null}</EachDate>
      ))}
    </tr>
  ));

  return <DatesContainer>{showDates}</DatesContainer>;
}
export default Dates;

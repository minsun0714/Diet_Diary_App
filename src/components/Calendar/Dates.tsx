import React from "react";
import styled from "styled-components";

const DatesContainer = styled.tbody`
  margin-top: 300px;
  padding: 5vw;
`;

const EachDate = styled.th<EachDatesProps>`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  width: 8.43vw;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2px 5.1vw 30px 0vw;
  text-shadow: 1px 1px 2px gray;
  background-image: ${(props) => {
    const date = new Date();
    const thisMonth = date.getMonth();
    const thisYear = date.getFullYear();
    return props.today.year === thisYear &&
      props.today.month === thisMonth &&
      props.today.date === props.children
      ? "linear-gradient(150deg, rgba(249, 245, 245, 0.1),#f3bac3)"
      : "linear-gradient(150deg, rgba(244, 239, 239, 0.1), #eae2e4)";
  }};
  color: ${(props) => {
    return (props.row.week === 0 && Number(props.children) > 7) ||
      (props.row.week === props.row.lastWeek && Number(props.children) < 8)
      ? "rgb(0, 0, 0, 0.1)"
      : "rgb(0, 0, 0, 0.6)";
  }};

  &:hover {
    background-image: linear-gradient(150deg, white, rgba(244, 239, 239, 0.1));
  }
`;

type EachDatesProps = {
  today: {
    year: number;
    month: number;
    date: number;
  };
  row: {
    week: number;
    lastWeek: number;
  };
  day: number;
};

interface DatesProps {
  year: number;
  month: number;
  setCurrentDate: (newDate: {
    year: number;
    month: number;
    date: number;
  }) => void;
}

type LastDate = 28 | 29 | 30 | 31;

// 타입가드 함수
function isLastDate(num: number): num is LastDate {
  return [28, 29, 30, 31].includes(num);
}

// year, month를 App.tsx에서 prop으로 받아옴
function Dates({ year, month, setCurrentDate }: DatesProps) {
  const date = new Date();
  // 지난 달 마지막 날짜를 구함
  const lastDateOfLastMonth = new Date(year, month, 0).getDate();

  if (!isLastDate(lastDateOfLastMonth)) {
    throw new Error("마지막 날짜가 유효하지 않습니다.");
  }

  // 이번 달 1일이 무슨 요일인지 구함
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // 이번 달이 며칠까지 있는지 구함
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  // 타입가드함수 호출
  if (!isLastDate(lastDateOfMonth)) {
    throw new Error("마지막 날짜가 유효하지 않습니다.");
  }

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
    }
    for (let j = 0; j < 7; j++) {
      if (daysOfThisMonth[i][j]) {
        continue;
      }
      if (daysOfThisMonth[i][j - 1]) {
        daysOfThisMonth[i][j] = daysOfThisMonth[i][j - 1] + 1;
      } else if (daysOfThisMonth[i - 1]?.[6]) {
        if (daysOfThisMonth[i - 1].includes(lastDateOfMonth) && i > 1) break;
        daysOfThisMonth[i][j] = daysOfThisMonth[i - 1][6] + 1;
      }

      if (daysOfThisMonth[i][j - 1] === lastDateOfMonth) {
        daysOfThisMonth[i][j] = 1;
      }
    }
  }
  // 클릭한 날짜 확인
  const onClick = (dateInfo: { year: number; month: number; date: number }) => {
    setCurrentDate(dateInfo);
  };

  const now = Date.now();
  const today = { year, month, date: date.getDate() };
  const showDates = daysOfThisMonth.map((week, i) => (
    <tr key={now + i}>
      {week.map((date, j) => (
        <EachDate
          key={now + j}
          today={today}
          row={{
            week: i,
            lastWeek: daysOfThisMonth.findIndex(
              (week, index) => index !== 0 && week.includes(1)
            ),
          }}
          day={j}
          onClick={() => onClick({ year, month, date })}
        >
          {date ? date : null}
        </EachDate>
      ))}
    </tr>
  ));
  return <DatesContainer>{showDates}</DatesContainer>;
}
export default Dates;

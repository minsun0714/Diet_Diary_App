import React from "react";
import styled from "styled-components";

const Day = styled.th`
  font-size: 40px;
  width: 9.8vw;
  color: white;
  text-shadow: 2px 2px 0.5px rgba(0, 0, 0, 0.5);
`;

const DaysContainer = styled.thead`
  position: absolute;
  margin-bottom: 290px;
`;
function Days() {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const showDays = days.map((day, idx) => <Day key={idx}>{day}</Day>);
  return (
    <DaysContainer>
      <tr>{showDays}</tr>
    </DaysContainer>
  );
}
export default Days;

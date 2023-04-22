import React from "react";
import styled from "styled-components";

const DaysContainer = styled.tbody`
  margin: 30px 11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`;
const Day = styled.th`
  font-size: 40px;
  letter-spacing: 8rem;
  color: white;
  text-shadow: 2px 2px 0.5px rgba(0, 0, 0, 0.5);
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

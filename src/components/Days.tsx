import React from "react";
import styled from "styled-components";

const Day = styled.th`
  font-size: 25px;
  padding: 20px 0px 20px;
  width: 8.43vw;
  color: white;
  background-image: linear-gradient(200deg, rgba(130, 124, 124, 0.1), #f1bdca);
`;

const DaysContainer = styled.thead`
  position: absolute;
  margin-bottom: 330px;
`;
function Days() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const showDays = days.map((day, idx) => <Day key={idx}>{day}</Day>);
  return (
    <DaysContainer>
      <tr>{showDays}</tr>
    </DaysContainer>
  );
}
export default Days;

import React from "react";
import styled from "styled-components";
import { Day, DaysContainer } from "./CalendarStyle";

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

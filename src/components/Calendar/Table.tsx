import React from "react";
import Days from "./Days";
import Dates from "./Dates";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseYear,
  decreaseYear,
  increaseMonth,
  decreaseMonth,
} from "../../store/calendarStore";
import { RootState } from "../../store/rootStore";
import {
  Table,
  YearWrapper,
  MonthWrapper,
  Year,
  Month,
  Btn,
  ICalendarProp,
} from "./CalendarStyleAndType";

function Calendar({ setCurrentDate }: ICalendarProp) {
  const dispatch = useDispatch();
  const state = useSelector((store: RootState) => store.calendar);

  const handleClickPrevYear = () => {
    dispatch(decreaseYear());
  };

  const handleClickNextYear = () => {
    dispatch(increaseYear());
  };

  const handleClickPrevMonth = () => {
    dispatch(decreaseMonth());
  };

  const handleClickNextMonth = () => {
    dispatch(increaseMonth());
  };

  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Table>
      <YearWrapper>
        <Btn onClick={handleClickPrevYear}>◀️</Btn>
        <Year>{state.year}</Year>
        <Btn onClick={handleClickNextYear}>▶️</Btn>
      </YearWrapper>
      <MonthWrapper>
        <Btn onClick={handleClickPrevMonth}>◀️</Btn>
        <Month>{monthArray[state.month]}</Month>
        <Btn onClick={handleClickNextMonth}>▶️</Btn>
      </MonthWrapper>
      <Days />
      <Dates
        year={state.year}
        month={state.month}
        setCurrentDate={setCurrentDate}
      />
    </Table>
  );
}
export default Calendar;

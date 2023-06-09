import { configureStore, createSlice } from "@reduxjs/toolkit";

const date = new Date();

interface CalendarProps {
  year: number;
  month: number;
}

const initialCalendarState: CalendarProps = {
  year: date.getFullYear(),
  month: date.getMonth(),
};

export const calendar = createSlice({
  name: "calendarReducer",
  initialState: initialCalendarState,
  reducers: {
    increaseYear: (state: CalendarProps) => {
      return { year: state.year + 1, month: state.month };
    },
    decreaseYear: (state: CalendarProps) => {
      return { year: state.year - 1, month: state.month };
    },
    increaseMonth: (state: CalendarProps) => {
      return state.month === 11
        ? { year: state.year + 1, month: 0 }
        : { year: state.year, month: state.month + 1 };
    },
    decreaseMonth: (state: CalendarProps) => {
      return state.month === 0
        ? { year: state.year - 1, month: 11 }
        : { year: state.year, month: state.month - 1 };
    },
  },
});

export const calendarStore = configureStore({ reducer: calendar.reducer });
export const { increaseYear, decreaseYear, increaseMonth, decreaseMonth } =
  calendar.actions;

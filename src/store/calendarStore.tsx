import { configureStore, createSlice } from "@reduxjs/toolkit";

const date = new Date();

interface Props {
  year: number;
  month: number;
}

export const calendar = createSlice({
  name: "calendarReducer",
  initialState: { year: date.getFullYear(), month: date.getMonth() } as Props,
  reducers: {
    increaseYear: (state: Props) => {
      return { year: state.year + 1, month: state.month };
    },
    decreaseYear: (state: Props) => {
      return { year: state.year - 1, month: state.month };
    },
    increaseMonth: (state: Props) => {
      return state.month === 11
        ? { year: state.year + 1, month: 0 }
        : { year: state.year, month: state.month + 1 };
    },
    decreaseMonth: (state: Props) => {
      return state.month === 0
        ? { year: state.year - 1, month: 11 }
        : { year: state.year, month: state.month - 1 };
    },
  },
});

export const calendarStore = configureStore({ reducer: calendar.reducer });
export const { increaseYear, decreaseYear, increaseMonth, decreaseMonth } =
  calendar.actions;

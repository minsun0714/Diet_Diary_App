import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type ToDo = {
  year: number;
  month: number;
  date: number;
  text: string;
};

export const toDos = createSlice({
  name: "calendarReducer",
  initialState: [] as ToDo[],
  reducers: {
    addToDo: (state: ToDo[], action: PayloadAction<ToDo>) => {
      return [action.payload, ...state];
    },
  },
});

export const toDostore = configureStore({ reducer: toDos.reducer });
export const { addToDo } = toDos.actions;

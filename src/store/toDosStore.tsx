import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type ToDo = {
  id: number;
  year: number;
  month: number;
  date: number;
  text: string;
};

const initialToDosState: ToDo[] = [];

export const toDos = createSlice({
  name: "calendarReducer",
  initialState: initialToDosState,
  reducers: {
    addToDo: (state: ToDo[], action: PayloadAction<ToDo>) => {
      return [action.payload, ...state];
    },
    deleteToDo: (state: ToDo[], action: PayloadAction<ToDo>) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
    updateToDo: (state: ToDo[], action: PayloadAction<ToDo>) => {
      return state.map((toDo) =>
        toDo.id === action.payload.id
          ? { ...toDo, text: action.payload.text }
          : toDo
      );
    },
  },
});

export const toDostore = configureStore({ reducer: toDos.reducer });
export const { addToDo, deleteToDo, updateToDo } = toDos.actions;

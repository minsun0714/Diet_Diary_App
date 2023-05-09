import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { calendar } from "./calendarStore";
import { toDos } from "./toDosStore";

const rootReducer = combineReducers({
  toDos: toDos.reducer,
  calendar: calendar.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

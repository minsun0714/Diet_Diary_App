import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { calendar } from "./store/calendarStore";
import { toDos } from "./store/toDosStore";

const rootReducer = combineReducers({
  toDos: toDos.reducer,
  calendar: calendar.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

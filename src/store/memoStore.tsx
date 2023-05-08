import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type Memo = {
  id: string;
  text: string;
};

export const memoStore = createSlice({
  name: "memoStore",
  initialState: [] as Memo[],
  reducers: {
    addMemo: (state, action: PayloadAction<Memo>) => {
      return [action.payload, ...state];
    },
  },
});

export const store = configureStore({ reducer: memoStore.reducer });
export const { addMemo } = memoStore.actions;

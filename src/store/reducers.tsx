import { createReducer } from "@reduxjs/toolkit";
import {
  // INCREASEYEAR,
  // DECREASEYEAR,
  // INCREASEMONTH,
  // DECREASEMONTH,
  increaseYear,
  decreaseYear,
  increaseMonth,
  decreaseMonth,
} from "./actions";

const date = new Date();
// interface Props {
//   year: number;
//   month: number;
// }

// interface Action {
//   type: string;
// }

export const reducer = createReducer(
  { year: date.getFullYear(), month: date.getMonth() },
  (builder) => {
    builder
      .addCase(increaseYear, (state) => {
        return { year: state.year + 1, month: state.month };
      })
      .addCase(decreaseYear, (state) => {
        return { year: state.year - 1, month: state.month };
      })
      .addCase(increaseMonth, (state) => {
        return state.month === 11
          ? { year: state.year + 1, month: 0 }
          : { year: state.year, month: state.month + 1 };
      })
      .addCase(decreaseMonth, (state) => {
        return state.month === 0
          ? { year: state.year - 1, month: 11 }
          : { year: state.year, month: state.month - 1 };
      });
  }
);

// export const reducer = (
//   state: Props = { year: date.getFullYear(), month: date.getMonth() },
//   action: Action
// ) => {
//   switch (action.type) {
//     case INCREASEYEAR:
//       return { year: state.year + 1, month: state.month };
//     case DECREASEYEAR:
//       return { year: state.year - 1, month: state.month };
//     case INCREASEMONTH:
//       return state.month === 11
//         ? { year: state.year + 1, month: 0 }
//         : { year: state.year, month: state.month + 1 };
//     case DECREASEMONTH:
//       return state.month === 0
//         ? { year: state.year - 1, month: 11 }
//         : { year: state.year, month: state.month - 1 };
//     default:
//       return state;
//   }
// };

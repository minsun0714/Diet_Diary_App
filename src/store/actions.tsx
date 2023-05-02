import { createAction } from "@reduxjs/toolkit";

export const increaseYear = createAction("INCREASEYEAR");
export const decreaseYear = createAction("DECREASEYEAR");
export const increaseMonth = createAction("INCREASEMONTH");
export const decreaseMonth = createAction("DECREASEMONTH");

// export const INCREASEYEAR = "INCREASEYEAR";
// export const DECREASEYEAR = "DECREASEYEAR";
// export const INCREASEMONTH = "INCREASEMONTH";
// export const DECREASEMONTH = "DECREASEMONTH";

// export const increaseYear = () => {
//   return {
//     type: INCREASEYEAR,
//   };
// };
// export const decreaseYear = () => {
//   return {
//     type: DECREASEYEAR,
//   };
// };
// export const increaseMonth = () => {
//   return {
//     type: INCREASEMONTH,
//   };
// };
// export const decreaseMonth = () => {
//   return {
//     type: DECREASEMONTH,
//   };
// };

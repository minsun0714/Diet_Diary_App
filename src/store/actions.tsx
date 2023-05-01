export const INCREASEYEAR = "INCREASEYEAR";
export const DECREASEYEAR = "DECREASEYEAR";
export const INCREASEMONTH = "INCREASEMONTH";
export const DECREASEMONTH = "DECREASEMONTH";

export const increaseYear = () => {
  return {
    type: INCREASEYEAR,
  };
};
export const decreaseYear = () => {
  return {
    type: DECREASEYEAR,
  };
};
export const increaseMonth = () => {
  return {
    type: INCREASEMONTH,
  };
};
export const decreaseMonth = () => {
  return {
    type: DECREASEMONTH,
  };
};

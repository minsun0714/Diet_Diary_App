import { legacy_createStore as createStore } from "redux";

const INCREASEYEAR = "INCREASEYEAR";
const DECREASEYEAR = "DECREASEYEAR";
const INCREASEMONTH = "INCREASEMONTH";
const DECREASEMONTH = "DECREASEMONTH";

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

const date = new Date();
interface Props {
  year: number;
  month: number;
}

interface Action {
  type: string;
}

export const reducer = (
  state: Props = { year: date.getFullYear(), month: date.getMonth() },
  action: Action
) => {
  switch (action.type) {
    case INCREASEYEAR:
      return { year: state.year + 1, month: state.month };
    case DECREASEYEAR:
      return { year: state.year - 1, month: state.month };
    case INCREASEMONTH:
      return state.month === 11
        ? { year: state.year + 1, month: 0 }
        : { year: state.year, month: state.month + 1 };
    case DECREASEMONTH:
      return state.month === 0
        ? { year: state.year - 1, month: 11 }
        : { year: state.year, month: state.month - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);

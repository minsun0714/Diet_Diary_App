import { legacy_createStore as createStore } from "redux";

const INCREASEMONTH = "INCREASEMONTH";
const DECREASEMONTH = "DECREASEMONTH";

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
  month: number;
}
interface Action {
  type: string;
  [key: string]: any;
}
export const reducer = (
  state: Props = { month: date.getMonth() },
  action: Action
) => {
  switch (action.type) {
    case INCREASEMONTH:
      return state.month === 11 ? { month: 0 } : { month: state.month + 1 };
    case DECREASEMONTH:
      return state.month === 0 ? { month: 11 } : { month: state.month - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);

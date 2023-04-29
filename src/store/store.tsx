import { legacy_createStore as createStore } from "redux";

const INCREASE = "INCREASE";

export const increaseMonth = () => {
  return {
    type: INCREASE,
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
    case INCREASE:
      return { month: state.month + 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);

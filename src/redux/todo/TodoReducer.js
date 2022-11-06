import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './TodoType';
const initialState = 10;
export default function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

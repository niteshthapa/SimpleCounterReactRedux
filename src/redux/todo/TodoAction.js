import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './TodoType';
export const plusCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};
export const minusCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

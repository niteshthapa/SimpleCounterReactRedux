import { combineReducers } from 'redux';
import toDoReducer from '../redux/todo/TodoReducer';
const RootReducer = combineReducers({
  toDoReducer,
});
export default RootReducer;

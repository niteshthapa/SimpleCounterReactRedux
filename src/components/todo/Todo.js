import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plusCounter, minusCounter } from '../../redux/todo/TodoAction';
const Todo = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.toDoReducer);
  console.log(counter, 'Todo');
  return (
    <div>
      <div className="input-group">
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(plusCounter())}
          type="button"
        >
          +
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(minusCounter())}
          type="button"
        >
          -
        </button>
      </div>
      {counter}
    </div>
  );
};

export default Todo;

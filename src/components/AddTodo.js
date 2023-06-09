import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/todoReducer';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  console.log(todo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: todo,
      complete: false,
    };
    if (newTodo.title === '') {
      return;
    }
    dispatch(addTodo(newTodo));
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">
        <HiOutlineViewGridAdd />
      </button>
    </form>
  );
};

export default AddTodo;

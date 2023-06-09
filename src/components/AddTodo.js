import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/todoReducer';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
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
    <form onSubmit={handleSubmit} className="w-full  max-auto flex flex-nowrap p-5">
      <input
        className="w-full border outline-none rounded-3xl px-5 py-2"
        type="text"
        placeholder="Add todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="-ml-8 pe-5">
        <HiOutlineViewGridAdd />
      </button>
    </form>
  );
};

export default AddTodo;

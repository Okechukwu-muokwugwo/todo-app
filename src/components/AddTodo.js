import React, { useState } from 'react';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { uuid } from 'uuidv4';

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title: todo,
      complete: false,
    };
    if (newTodo.title === '') {
      setTodo(newTodo);
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onSubmit={handleSubmit}>
        <HiOutlineViewGridAdd />
      </button>
    </form>
  );
};

export default AddTodo;

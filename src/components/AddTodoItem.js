import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const AddTodoItem = () => {
  const [todosList, setTodosList] = useState([]);
  console.log(todosList);

  const handleDeleteTodo = (id) => {
    setTodosList(id);
  };

  const handleUpdateTodo = (id) => {
    const todoToUpdate = todosList.find((todo) => todo.id === id);
    if (todoToUpdate) {
      const updatedTodo = { ...todoToUpdate, complete: !todoToUpdate.complete };
      setTodosList(updatedTodo);
    }
  };

  const handleClearCompleted = () => {
    const completedTodos = todosList.filter((todo) => !todo.complete);
    setTodosList(completedTodos);
  };

  return (
    <ul>
      {todosList.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleUpdateTodo(todo.id)}
          />
          <span
            className={`${todo.completed ? 'line-through' : 'font-sans'}`}
          >
            {todo.title}
          </span>
          <button
            type="button"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <AiOutlineDelete />
          </button>
        </li>
      ))}
      {todosList.length !== 0 && (
        <button
          type="submit"
          className="sm md:w-1/5 mx-auto rounded-2xl bg-indigo-500 hover:bg-red-500 shadow-lg shadow-indigo-500/50 text-white m-3 p-3"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      )}
    </ul>
  );
};

export default AddTodoItem;

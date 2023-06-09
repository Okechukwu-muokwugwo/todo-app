import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteTodo, updateTodo, clearCompletedTodo } from '../redux/todoReducer';

const AddTodoItem = () => {
  const todosList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id) => {
    const todoUpdate = todosList.find((todo) => todo.id === id);
    if (todoUpdate) {
      const updatedTodo = { ...todoUpdate, complete: !todoUpdate.complete };
      dispatch(updateTodo(id, updatedTodo.complete));
    }
  };

  const handleClearCompleted = () => {
    const completedTodos = todosList.filter((todo) => !todo.complete);
    const completedTodosID = completedTodos.map((todo) => todo.id);
    dispatch(clearCompletedTodo(completedTodosID));
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
            data-testid="delete-button"
            type="button"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <AiOutlineDelete />
          </button>
        </li>
      ))}
      {todosList.length !== 0 && (
        <button
          data-testid="clear-button"
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

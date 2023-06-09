// Action Types
const ADD_TODO = 'todo-app/ADD_TODO';
const DELETE_TODO = 'todo-app/DELETE_TODO';
const UPDATE_TODO = 'todo-app/UPDATE_TODO';
const CLEAR_COMPLETED = 'todo-app/CLEAR_COMPLETED';

// Action creators
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});
export const updateTodo = (id, complete) => ({
  type: UPDATE_TODO,
  payload: { id, complete },
});
export const clearCompletedTodo = (payload) => ({
  type: CLEAR_COMPLETED,
  payload,
});

const initialState = [];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    case UPDATE_TODO:
      return state.map((todo) => (
        todo.id === payload.id ? { ...todo, complete: payload.complete } : todo
      ));
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.complete);
    default:
      return state;
  }
};

export default todoReducer;

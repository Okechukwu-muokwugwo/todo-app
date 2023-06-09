import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';

const reducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  reducer,
});

export default store;

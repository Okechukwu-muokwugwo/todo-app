import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoContainer from '../components/TodoContainer';
import { deleteTodo, updateTodo, clearCompletedTodo } from '../redux/todoReducer';

const mockStore = configureStore([]);

describe('TodoContainer component', () => {
  test('renders todos correctly', () => {
    const initialState = { todos: [{ id: 1, title: 'wake up', complete: false }] };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <TodoContainer />
      </Provider>,
    );

    const todoTitle = screen.getByText('wake up');
    expect(todoTitle).toBeInTheDocument();
  });

  test('dispatches updateTodo when checkbox is clicked', () => {
    const initialState = { todos: [{ id: 1, title: 'wake up', complete: false }] };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <TodoContainer />
      </Provider>,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(store.getActions()).toEqual([updateTodo(1, true)]);
  });

  test('dispatches deleteTodo when delete button is clicked', () => {
    const initialState = { todos: [{ id: 1, title: 'wake up', complete: false }] };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <TodoContainer />
      </Provider>,
    );

    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);

    expect(store.getActions()).toEqual([deleteTodo(1)]);
  });

  test('dispatches clearCompletedTodos Clear Completed button is clicked', () => {
    const initialState = {
      todos: [
        { id: 1, title: 'wake up', complete: false },
        { id: 2, title: 'bathe', complete: false },
      ],
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <TodoContainer />
      </Provider>,
    );

    const clearButton = screen.getByTestId('clear-button');
    fireEvent.click(clearButton);

    expect(store.getActions()).toEqual([clearCompletedTodo([1, 2])]);
  });
});

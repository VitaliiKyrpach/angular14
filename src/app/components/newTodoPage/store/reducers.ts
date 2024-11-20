import { createReducer, on } from '@ngrx/store';
import { AddTodo, completedTodo, DeleteTodo } from './actions';

export interface Todo {
  title: string | null;
  description: string | null;
  completed: boolean;
  id: number;
}

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const TodoReducer = createReducer(
  initialState,
  on(AddTodo, (state, { todo }) => {
    return {
      ...state,
      todos: [...state.todos, todo],
    };
  }),
  on(completedTodo, (state, { id }) => {
    console.log(state)
    const idxTodo = state.todos.findIndex((item) => item.id === id);
    const updtodos = state.todos.map((item, idx) => {
      if (idx === idxTodo) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    return {
      ...state,
      todos: updtodos,
    };
  }),
  on(DeleteTodo, (state, { id }) => {
    const newTodos = state.todos.filter((todo) => todo.id !== id);
    return {
      ...state,
      todos: newTodos,
    };
  })
);

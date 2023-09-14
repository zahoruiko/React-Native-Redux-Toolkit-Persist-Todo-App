import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type TTodoItem = {
  id: string;
  text: string;
  status: boolean;
};

export type TTodosState = {
  todos: TTodoItem[];
};

const initialState: TTodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state: TTodosState, action: PayloadAction<TTodoItem>) => {
      state.todos = [action.payload, ...state.todos];
    },
    updateTodo: (state: TTodosState, action: PayloadAction<TTodoItem>) => {
      const todoInState = state.todos.find(
        item => item.id === action.payload.id,
      );
      if (todoInState) {
        todoInState.text = action.payload.text;
      }
    },
    toggleTodoStatus: (state: TTodosState, action: PayloadAction<string>) => {
      const todoInState = state.todos.find(item => item.id === action.payload);
      if (todoInState) {
        todoInState.status = !todoInState.status;
      }
    },
    removeTodo: (state: TTodosState, action: PayloadAction<string>) => {
      const remainingTodos = state.todos.filter(
        item => item.id !== action.payload,
      );
      state.todos = remainingTodos;
    },
    removeAllTodos: (state: TTodosState) => {
      state.todos = [];
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const {
  addTodo,
  toggleTodoStatus,
  removeTodo,
  removeAllTodos,
  updateTodo,
} = todosSlice.actions;

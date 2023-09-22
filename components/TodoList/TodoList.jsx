import React from 'react';

import { View } from 'react-native';

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, removeTodo, toggleComplete, type }) => {
  if (todos.length === 0) return;

  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter(t => t.status);
      case 'Active':
        return todos.filter(t => !t.status);
    }
  };

  todos = getVisibleTodos(todos, type);

  const todosList = todos.map((todo, i) => {
    return (
      <TodoListItem
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    );
  });

  return <View>{todosList}</View>;
};

export default TodoList;

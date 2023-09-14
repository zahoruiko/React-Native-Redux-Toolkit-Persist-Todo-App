import React from 'react';
import { View, Text } from 'react-native';
import TodoButton from '../TodoButton/TodoButton';
import { useAppSelector } from '../../redux/reduxHooks';
import { getStyleSheet } from './styles';

const TodoListItem = ({ todo, removeTodo, toggleComplete }) => {
  const appThemeSelector = useAppSelector(state => state.theme);
  const styles = getStyleSheet(appThemeSelector.currentTheme);
  return (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>{todo.text}</Text>
    <View style={styles.buttons}>
      <TodoButton
        onPress={() => toggleComplete(todo.id)}
        complete={todo.status}
        name={'Done'}
      />
      <TodoButton onPress={() => removeTodo(todo.id)} name={'Delete'} />
    </View>
  </View>
  );
};

export default TodoListItem;

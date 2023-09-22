import React, { useState } from 'react';

import {
  ScrollView,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';

import {
  useAppDispatch,
  useAppSelector,
} from '../../redux/reduxHooks';
import { setTheme } from '../../redux/slices/themeSlice';
import {
  addTodo,
  removeTodo,
  toggleTodoStatus,
} from '../../redux/slices/todosSlice';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import TabBar from '../TabBar/TabBar';
import TodoList from '../TodoList/TodoList';
import { getStyleSheet } from './styles';

const Todos = () => {
  const appDispatch = useAppDispatch();
  const appTodosSelector = useAppSelector(state => state.todos);
  const appThemeSelector = useAppSelector(state => state.theme);
  const [inputTextValue, setInputTextValue] = useState('');
  const [type, setType] = useState('All');
  const styles = getStyleSheet(appThemeSelector.currentTheme);

  const handleSubmit = () => {
    if (inputTextValue) {
      let newTodo = { id: uuid.v4(), text: inputTextValue, complete: false };
      appDispatch(addTodo(newTodo));
      setInputTextValue('');
    }
  };

  const removeTodoItem = todoIndex => {
    appDispatch(removeTodo(todoIndex));
  };

  const toggleComplete = todoIndex => {
    appDispatch(toggleTodoStatus(todoIndex));
  };

  const toggleTheme = () => {
    appDispatch(setTheme());
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <View style={styles.header}>
          <Button handler={toggleTheme} title="Theme" />
          <Heading />
        </View>
        <View style={styles.buttonsContainer}>
          <Input
            inputValue={inputTextValue}
            inputChangeHandler={setInputTextValue}
          />
          <Button handler={handleSubmit} title="Add" />
        </View>
        <TodoList
          todos={appTodosSelector.todos}
          removeTodo={removeTodoItem}
          toggleComplete={toggleComplete}
          type={type}
        />
      </ScrollView>
      <TabBar type={type} setType={setType} />
    </View>
  );
};

export default Todos;

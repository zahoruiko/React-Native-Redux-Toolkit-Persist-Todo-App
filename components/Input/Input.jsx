import React from 'react';

import {
  TextInput,
  View,
} from 'react-native';

import { useAppSelector } from '../../redux/reduxHooks';
import { getStyleSheet } from './styles';

const Input = ({ inputValue, inputChangeHandler }) => {
  const appThemeSelector = useAppSelector(state => state.theme);
  const styles = getStyleSheet(appThemeSelector.currentTheme);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
        onChangeText={inputChangeHandler}
        defaultValue={inputValue}
      />
    </View>
  );
};

export default Input;

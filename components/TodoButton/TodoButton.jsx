import React from 'react';

import {
  Text,
  TouchableHighlight,
} from 'react-native';

import { useAppSelector } from '../../redux/reduxHooks';
import { getStyleSheet } from './styles';

const TodoButton = ({ onPress, complete, name }) => {
  const appThemeSelector = useAppSelector(state => state.theme);
  const styles = getStyleSheet(appThemeSelector.currentTheme);
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#efefef"
      style={styles.button}>
      <Text
        style={[
          styles.text,
          complete ? styles.complete : null,
          name === 'Delete' ? styles.deleteButton : null,
        ]}>
        {name}
      </Text>
    </TouchableHighlight>
  );
};

export default TodoButton;

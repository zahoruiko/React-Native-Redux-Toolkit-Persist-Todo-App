import React from 'react';

import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import { useAppSelector } from '../../redux/reduxHooks';
import { getStyleSheet } from './styles';

const Button = ({ handler, title }) => {
  const appThemeSelector = useAppSelector(state => state.theme);
  const styles = getStyleSheet(appThemeSelector.currentTheme);
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.button}
        onPress={handler}>
        <Text style={styles.submit}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Button;

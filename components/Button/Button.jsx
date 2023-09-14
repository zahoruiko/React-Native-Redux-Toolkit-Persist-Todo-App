import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { getStyleSheet } from './styles';
import { useAppSelector } from '../../redux/reduxHooks';

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

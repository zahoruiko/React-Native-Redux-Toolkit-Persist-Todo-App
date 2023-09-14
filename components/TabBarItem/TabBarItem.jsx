import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { getStyleSheet } from './styles';
import { useAppSelector } from '../../redux/reduxHooks';

const TabBarItem = ({ border, title, selected, setType, type }) => {
  const appThemeSelector = useAppSelector(state => state.theme);
  const styles = getStyleSheet(appThemeSelector.currentTheme);
  const underlayColor = appThemeSelector.currentTheme === 'light' ? '#efefef' : '#558';

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      onPress={setType}
      style={[
        styles.item,
        selected ? styles.selected : null,
        border ? styles.border : null,
        type === title ? styles.selected : null,
      ]}>
      <Text
        style={[
          styles.itemText,
          type === title ? styles.bold : null,
          type === title ? styles.selectedItemText : null,
        ]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default TabBarItem;

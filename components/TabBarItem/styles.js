import { StyleSheet } from 'react-native';

const itemStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
const borderStyle = {
  borderLeftWidth: 1,
};
const itemTextStyle = {
  fontSize: 16,
}
const selectedStyle = {
}
const selectedItemTextStyle = {
}
const boldStyle = {
  fontWeight: 'bold',
}

const lightStyleSheet = StyleSheet.create({
  item: {
    ...itemStyle,
  },
  border: {
    ...borderStyle,
    borderLeftColor: '#dddddd',
  },
  itemText: {
    ...itemTextStyle,
    color: '#777777',
  },
  selected: {
    ...selectedStyle,
    backgroundColor: '#ffffff',
  },
  selectedItemText: {
    ...selectedItemTextStyle,
  },
  bold: {
    ...boldStyle,
  },
});

const darkStyleSheet = StyleSheet.create({
  item: {
    ...itemStyle,
  },
  border: {
    ...borderStyle,
    borderLeftColor: '#dddddd',
  },
  itemText: {
    ...itemTextStyle,
    color: 'lightgray',
  },
  selected: {
    ...selectedStyle,
    backgroundColor: '#668',
  },
  selectedItemText: {
    ...selectedItemTextStyle,
    color: 'lightgray',
  },
  bold: {
    ...boldStyle,
  },
});

export function getStyleSheet(theme) {
  return theme === 'light' ? lightStyleSheet : darkStyleSheet;
};

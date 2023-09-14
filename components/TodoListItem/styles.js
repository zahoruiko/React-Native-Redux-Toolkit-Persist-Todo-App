import { StyleSheet } from 'react-native';

const todoContainerStyles = {
  marginLeft: 20,
  marginRight: 20,
  borderTopWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  paddingLeft: 14,
  paddingTop: 7,
  paddingBottom: 7,
  shadowOpacity: 0.2,
  shadowRadius: 3,
  shadowOffset: { width: 2, height: 2 },
  flexDirection: 'row',
  alignItems: 'center',
};

const todoTextStyles = {
  fontSize: 17,
};

const buttonsStyles = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
}

const lightStyleSheet = StyleSheet.create({
  todoContainer: {
    ...todoContainerStyles,
    backgroundColor: '#ffffff',
    borderColor: '#ededed',
    shadowColor: '#000000',
  },
  todoText: {
    ...todoTextStyles,
  },
  buttons: {
    ...buttonsStyles,
  },
});

const darkStyleSheet = StyleSheet.create({
  todoContainer: {
    ...todoContainerStyles,
    backgroundColor: '#779',
    borderColor: '#ededed',
    shadowColor: '#000000',
  },
  todoText: {
    ...todoTextStyles,
  },
  buttons: {
    ...buttonsStyles,
  },
});

export function getStyleSheet(theme) {
  return theme === 'light' ? lightStyleSheet : darkStyleSheet;
};

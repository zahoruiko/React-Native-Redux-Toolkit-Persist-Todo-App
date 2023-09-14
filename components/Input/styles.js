import { StyleSheet } from 'react-native';

const inputContainerStyle = {
  marginTop: 5,
  width: 220,
  shadowOpacity: 0.2,
  shadowRadius: 3,
  shadowColor: '#000000',
  shadowOffset: { width: 2, height: 2 },
};

const inputStyle = {
  height: 30,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 0,
  paddingBottom: 0,
}

const lightStyleSheet = StyleSheet.create({
  inputContainer: {
    ...inputContainerStyle,
    shadowColor: '#000000',
  },
  input: {
    ...inputStyle,
    backgroundColor: '#ffffff',
  },
});

const darkStyleSheet = StyleSheet.create({
  inputContainer: {
    ...inputContainerStyle,
    shadowColor: '#333',
  },
  input: {
    ...inputStyle,
    backgroundColor: '#88b',
  },
});

export function getStyleSheet(theme) {
  return theme === 'light' ? lightStyleSheet : darkStyleSheet;
};

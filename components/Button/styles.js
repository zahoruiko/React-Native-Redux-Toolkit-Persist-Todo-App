import { StyleSheet } from 'react-native';

const buttonContainerStyle = {
  alignItems: 'flex-end',
}

const buttonStyle = {
  height: 30,
  paddingLeft: 20,
  paddingRight: 20,
  width: 90,
  marginRight: 5,
  marginTop: 5,
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

const submitStyle = {
  fontWeight: '600',
}

const lightStyleSheet = StyleSheet.create({
  buttonContainer: {
    ...buttonContainerStyle,
  },
  button: {
    ...buttonStyle,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(0,0,0,.1)',
  },
  submit: {
    ...submitStyle,
    color: '#666666',
    fontWeight: 'bold'
  },
});

const darkStyleSheet = StyleSheet.create({
  buttonContainer: {
    ...buttonContainerStyle,
  },
  button: {
    ...buttonStyle,
    backgroundColor: '#88b',
    borderColor: 'rgba(0,0,0,.1)',
  },
  submit: {
    ...submitStyle,
    color: 'black',
    fontWeight: 'bold'
  },
});

export function getStyleSheet(theme) {
  return theme === 'light' ? lightStyleSheet : darkStyleSheet;
};

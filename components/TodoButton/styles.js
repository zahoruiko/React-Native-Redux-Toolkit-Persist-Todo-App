import { StyleSheet } from 'react-native';


const buttonStyle = {
  alignSelf: 'flex-end',
  padding: 7,
  borderWidth: 1,
  borderRadius: 4,
  marginRight: 5,
}

const textStyle = {
}

const completeStyle = {
  // fontWeight: 'bold',
}

const deleteButtonStyle = {
}


const lightStyleSheet = StyleSheet.create({
  button: {
    ...buttonStyle,
    borderColor: '#ededed',
  },
  text: {
    ...textStyle,
    color: '#666666',
  },
  complete: {
    ...completeStyle,
    color: 'green',
  },
  deleteButton: {
    ...deleteButtonStyle,
    color: 'rgba(175, 47, 47, 1)',
  },
});

const darkStyleSheet = StyleSheet.create({
  button: {
    ...buttonStyle,
    borderColor: '#ededed',
    backgroundColor: 'lightgray'
  },
  text: {
    ...textStyle,
    color: '#666666',
  },
  complete: {
    ...completeStyle,
    color: 'green',
  },
  deleteButton: {
    ...deleteButtonStyle,
    color: '#f00',
  },
});

export function getStyleSheet(theme) {
  return theme === 'light' ? lightStyleSheet : darkStyleSheet;
};

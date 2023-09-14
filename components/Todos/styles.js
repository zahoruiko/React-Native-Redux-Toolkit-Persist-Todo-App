import { StyleSheet } from 'react-native';

const headerStyle = {
  flex: 1,
  marginTop: 20,
  marginLeft: 20,
  marginRight: 15,
}

const containerStyle = {
  flex: 1,
};

const contentStyle = {
  paddingTop: 0,
};

const buttonsContainerStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft: 20,
  marginRight: 15,
  height: 50,
};

const lightStyleSheet = StyleSheet.create({
  header: {
    ...headerStyle,
  },
  container: {
    ...containerStyle,
    backgroundColor: '#f5f5f5',
  },
  content: {
    ...contentStyle,
  },
  buttonsContainer: {
    ...buttonsContainerStyle,
  }
});

const darkStyleSheet = StyleSheet.create({
  header: {
    ...headerStyle,
  },
  container: {
    ...containerStyle,
    backgroundColor: '#334',
  },
  content: {
    ...contentStyle,
  },
  buttonsContainer: {
    ...buttonsContainerStyle,
  }
});

export function getStyleSheet(theme) {
  return theme === 'light' ? lightStyleSheet : darkStyleSheet;
};

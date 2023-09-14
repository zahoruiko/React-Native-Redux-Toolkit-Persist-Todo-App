import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>My todo's</Text>
  </View>
);

export default Heading;

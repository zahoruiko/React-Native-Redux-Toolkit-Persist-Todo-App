import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import TabBarItem from '../TabBarItem/TabBarItem';

const TabBar = ({ setType, type }) => (
  <View style={styles.container}>
    <TabBarItem 
      type={type} 
      title="All" 
      setType={() => setType('All')} />
    <TabBarItem
      type={type}
      border
      title="Active"
      setType={() => setType('Active')}
    />
    <TabBarItem
      type={type}
      border
      title="Complete"
      setType={() => setType('Complete')}
    />
  </View>
);

export default TabBar;

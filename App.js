import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import Init from './Screens/init';
const App = props => {
  return (
    <View style={styles.container}>
      <Init />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;

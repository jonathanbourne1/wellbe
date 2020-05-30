import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Init = props => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/wellbelogoinit.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  image: {
    alignItems: 'center',
  },
});

export default Init;

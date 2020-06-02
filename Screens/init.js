import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

const Init = props => {
  const navigation = props.navigation;
  console.log(navigation);

  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate('Login');
      }}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/images/wellbelogoinit.png')}
            style={styles.image}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
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

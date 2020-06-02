import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginInput from '../Components/loginInput';
import LoginLogos from '../Components/LoginLogos';
const Login = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.component}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/wellbe-black.png')}
            style={styles.Image}
          />
        </View>
        <View>
          <LoginInput />
        </View>
        <View>
          <LoginLogos />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  component: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    //backgroundColor: 'red',
  },
  Image: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
    paddingVertical: 10,
    flex: 1,
    width: 237,
    height: 111.5,
  },
  imageContainer: {
    width: 237,
    height: 111.5,
    flexDirection: 'row',
  },
});

export default Login;

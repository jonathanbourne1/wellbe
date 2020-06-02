import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Colors from './Colors.js';
const LoginLogos = props => {
  return (
    <View>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image source={require('../assets/images/googleIcon.png')} />
        </View>
        <View>
          <View style={styles.logo}>
            <Image source={require('../assets/images/facebookIcon.png')} />
          </View>
        </View>
      </View>
      <Text>Create new account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  logo: {
    borderColor: Colors.rosita,
    borderWidth: 1,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default LoginLogos;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import Colors from './Colors';
const LoginInput = props => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          style={styles.email}
          keyboardType="email-address"
        />
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.password}
          //keyboardType="email-address"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('   login     ');
        }}>
        <View style={styles.LoginButton}>
          <Text style={{fontWeight: 'bold'}}> Login </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.forgotPassword}>
        <TouchableNativeFeedback
          onPress={() => {
            console.log('forgot password');
          }}>
          <Text>Forgot password?</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {},
  email: {
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  inputContainer: {
    width: 300,
    maxWidth: '100%',
  },
  password: {
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  LoginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: Colors.rosita,
    borderRadius: 25,
    marginTop: 20,
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LoginInput;

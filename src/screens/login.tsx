import React, {FC} from 'react';
import {View, TextInput} from 'react-native';

const Login: FC<{}> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput secureTextEntry placeholder={'Password'} />
    </View>
  );
};

export default Login;

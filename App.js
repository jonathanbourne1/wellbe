import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import Init from './Screens/init';
import Login from './Screens/LogIn';

//react Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = props => {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Inicio" component={Init} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;

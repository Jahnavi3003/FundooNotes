import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Registration';

import ResetPassword from '../screens/ResetPassword';
import NewPassword from '../screens/NewPassword';

import Gmail from '../screens/Gmail';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gmail"
        component={Gmail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;

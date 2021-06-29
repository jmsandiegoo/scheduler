import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login/login';
import Register from '../screens/login/register';
import RegisterConfirm from '../screens/login/registerconfirm';
import Landing from '../screens/login/landing';
import ForgotPassword from '../screens/login/forgotPassword';
import ResetPassword from '../screens/login/resetPassword';
// import {navOptions} from '../styles/global';

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterConfirm" component={RegisterConfirm} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

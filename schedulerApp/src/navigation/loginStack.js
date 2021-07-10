import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../containers/login/login';
import Register from '../containers/login/register';
import RegisterConfirm from '../containers/login/registerconfirm';
import Landing from '../containers/login/landing';
import ForgotPassword from '../containers/login/forgotPassword';
import ResetPassword from '../containers/login/resetPassword';
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

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/home';
import ModifyMount from '../screens/home/modifyMount';
import {navOptions} from '../styles/global';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{...navOptions}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'MOUNT DATES'}}
      />
      <Stack.Screen
        name="ModifyMount"
        component={ModifyMount}
        options={{title: 'ADD MOUNT'}}
      />
    </Stack.Navigator>
  );
}

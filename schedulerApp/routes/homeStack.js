import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/home';
import ModifyMount from '../screens/home/modifyMount';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ModifyMount" component={ModifyMount} />
    </Stack.Navigator>
  );
}

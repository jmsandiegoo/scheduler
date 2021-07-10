import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/home/home';
import ModifyMount from '../containers/home/modifyMount';
import {navOptions} from '../styles/global';
import HamburgerButton from '../components/hamburgerButton';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{...navOptions}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'MOUNT DATES',
          headerLeft: (props) => <HamburgerButton props={props} />,
        }}
      />
      <Stack.Screen
        name="ModifyMount"
        component={ModifyMount}
        options={{title: 'ADD MOUNT'}}
      />
    </Stack.Navigator>
  );
}

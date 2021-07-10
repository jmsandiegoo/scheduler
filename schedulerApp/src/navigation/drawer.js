import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';
import ScheduleStack from './scheduleStack';
import Settings from '../containers/settings';

const RootDrawerNavigator = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <RootDrawerNavigator.Navigator initialRouteName="Home">
      <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
      <RootDrawerNavigator.Screen
        name="ScheduleStack"
        component={ScheduleStack}
      />
      <RootDrawerNavigator.Screen name="Settings" component={Settings} />
    </RootDrawerNavigator.Navigator>
  );
}

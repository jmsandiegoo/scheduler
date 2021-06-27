import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FindMount from '../screens/schedule/findMount';
import ViewSchedule from '../screens/schedule/viewSchedule';
import {navOptions} from '../styles/global';

const Stack = createStackNavigator();

export default function ScheduleStack() {
  return (
    <Stack.Navigator screenOptions={{...navOptions}}>
      <Stack.Screen
        name="FindMount"
        component={FindMount}
        options={{title: 'Find Mount'}}
      />
      <Stack.Screen
        name="ViewSchedule"
        component={ViewSchedule}
        options={{title: 'MOUNT SCHEDULE'}}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FindMount from '../screens/schedule/findMount';
import ViewSchedule from '../screens/schedule/viewSchedule';

const Stack = createStackNavigator();

export default function ScheduleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FindMount" component={FindMount} />
      <Stack.Screen name="ViewSchedule" component={ViewSchedule} />
    </Stack.Navigator>
  );
}

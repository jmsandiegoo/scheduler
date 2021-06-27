import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navOptions} from '../styles/global';
import FindMount from '../screens/schedule/findMount';
import ViewSchedule from '../screens/schedule/viewSchedule';
import HamburgerButton from '../components/hamburgerButton';

const Stack = createStackNavigator();

export default function ScheduleStack() {
  return (
    <Stack.Navigator screenOptions={{...navOptions}}>
      <Stack.Screen
        name="FindMount"
        component={FindMount}
        options={{
          title: 'Find Mount',
          headerLeft: (props) => <HamburgerButton props={props} />,
        }}
      />
      <Stack.Screen
        name="ViewSchedule"
        component={ViewSchedule}
        options={{title: 'MOUNT SCHEDULE'}}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';
import ScheduleStack from './scheduleStack';
import VerifyEmail from '../containers/verifyEmail';
import DrawerContent from '../components/drawerContent';
import Settings from '../containers/settings';
import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const user = useSelector((state) => state.user);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} user={user} />}>
      {user.emailVerified ? (
        <>
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="ScheduleStack" component={ScheduleStack} />
          <Drawer.Screen name="Settings" component={Settings} />
        </>
      ) : (
        <>
          <Drawer.Screen name="VerifyEmail" component={VerifyEmail} />
        </>
      )}
    </Drawer.Navigator>
  );
}

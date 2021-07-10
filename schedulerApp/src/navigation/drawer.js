import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';
import ScheduleStack from './scheduleStack';
import VerifyEmail from '../containers/verifyEmail';
import DrawerContent from '../components/drawerContent';
import auth from '@react-native-firebase/auth';
import Settings from '../containers/settings';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const user = auth().currentUser;

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
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

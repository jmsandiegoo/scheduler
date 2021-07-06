/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './routes/drawer';
import LoginStack from './routes/loginStack';

export default function App() {
  // Set an initializing state while Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state change
  // eslint-disable-next-line no-shadow
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <>
        <StatusBar barStyle="default" />
        <NavigationContainer>
          <LoginStack />
        </NavigationContainer>
      </>
    );
  } else {
    return (
      <>
        <StatusBar barStyle="default" />
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </>
    );
  }
}

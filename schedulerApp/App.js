/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './routes/drawer';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

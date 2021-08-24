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
import {
  StatusBar,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/navigation/loginStack';
import DrawerNavigator from './src/navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from './src/redux/userSlice';
import {globalStyles} from './src/styles/global';

export default function App() {
  // Set an initializing state while Firebase connects
  const user = useSelector((state) => state.user);
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const onAuthStateChanged = (user) => {
      let userData = null;
      if (user) {
        userData = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
        };
      }
      dispatch(updateUser(userData));

      if (initializing) {
        setInitializing(false);
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={[styles.container]}>
          {!user ? (
            <>
              <NavigationContainer theme={{colors: {background: '#1B1B1B'}}}>
                <LoginStack />
              </NavigationContainer>
            </>
          ) : (
            <>
              <NavigationContainer theme={{colors: {background: '#1B1B1B'}}}>
                <DrawerNavigator />
              </NavigationContainer>
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    padding: 0,
  },
});

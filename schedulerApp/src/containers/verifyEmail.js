import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  SafeAreaView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../styles/global';

export default function RegisterConfirm({navigation}) {
  const [timer, setTimer] = useState(60);
  const [isCounting, setIsCounting] = useState(false);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('sign out successful');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const countDown = () => {
    setIsCounting(true);
    if (timer <= 0) {
      setIsCounting(false);
      return;
    }
    setTimer(timer - 1);
  };
  useEffect(() => {
    const timeOut = setTimeout(countDown, 1000);
    return clearTimeout(timeOut);
  });

  return (
    <View style={globalStyles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <Pressable
          style={styles.signOutText}
          onPress={() => {
            signOut();
          }}>
          <Icon
            name="logout-variant"
            size={15}
            color="#fff"
            style={styles.icon}
          />
          <Text style={globalStyles.headerText2}>Sign Out</Text>
        </Pressable>
        <Text style={[styles.headerText1, styles.centerText]}>
          Check Your Mail
        </Text>
        <Text style={[styles.text, styles.centerText]}>
          {'Please verify email to \n complete account creation'}
        </Text>
        <Text>{isCounting}</Text>
        <Text>{timer}</Text>
        <Pressable style={styles.primaryButton}>
          <Text style={[globalStyles.text, styles.centerText]}>
            Resend Email
          </Text>
        </Pressable>
        <Pressable onPress={() => {}}>
          <Text style={[globalStyles.text, styles.centerText]}>
            Already Verfied
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText1: {
    marginBottom: 30,
    ...globalStyles.headerText1,
  },
  safeAreaView: {
    justifyContent: 'center',
    alignContent: 'center',
    ...globalStyles.safeAreaView,
  },
  text: {
    marginVertical: 20,
    ...globalStyles.text,
  },
  primaryButton: {
    marginTop: 50,
    maxWidth: 250,
    width: '100%',
    alignSelf: 'center',
    ...globalStyles.primaryButton,
  },
  centerText: {
    textAlign: 'center',
  },
  signOutText: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 10,
  },
});

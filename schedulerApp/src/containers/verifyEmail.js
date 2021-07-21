import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  SafeAreaView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../styles/global';
import LoadingModal from '../components/loadingModal';
import {useDispatch} from 'react-redux';
import {updateUser} from '../redux/userSlice';

export default function RegisterConfirm({navigation}) {
  const [timer, setTimer] = useState(5); // seconds
  const [isCounting, setIsCounting] = useState(true);
  const [isLoading, setIsLoading] = useState({
    message: 'Loading',
    value: false,
  });
  const dispatch = useDispatch();

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

  const resendEmail = () => {
    setIsLoading({
      ...isLoading,
      message: 'Sending',
      value: true,
    });
    auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        setTimer(60);
        setIsLoading({...isLoading, bool: false});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkVerification = () => {
    setIsLoading({
      ...isLoading,
      message: 'Checking',
      value: true,
    });
    auth()
      .currentUser.reload()
      .then(() => {
        const user = auth().currentUser;
        const userData = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
        };
        console.log(userData);
        dispatch(updateUser(userData));
        setIsLoading({...isLoading, bool: false});
      });
  };

  const formatTime = () => {
    let mins = Math.floor(timer / 60);
    let sec = timer - mins * 60;
    return `${mins}:${String(sec).padStart(2, '0')}`;
  };

  useEffect(() => {
    const countDown = () => {
      setIsCounting(true);
      if (timer < 1) {
        setIsCounting(false);
        return;
      }
      setTimer(timer - 1);
    };
    const timeoutID = setTimeout(countDown, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [timer]);

  return (
    <View style={globalStyles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <LoadingModal isLoading={isLoading} />
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
        <Text style={[globalStyles.text, styles.centerText]}>
          {formatTime()}
        </Text>
        <Pressable
          style={[styles.primaryButton, isCounting ? styles.disabled : '']}
          disabled={isCounting}
          onPress={() => resendEmail()}>
          <Text style={[globalStyles.text, styles.centerText]}>
            Resend Email
          </Text>
        </Pressable>
        <Pressable onPress={() => checkVerification()}>
          <Text
            style={[
              globalStyles.text,
              styles.centerText,
              styles.underlineText,
            ]}>
            Already Verified
          </Text>
        </Pressable>
        <Text style={[styles.smallText, styles.centerText]}>
          {'*Unverified accounts will be deleted within an hour'}
        </Text>
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
    marginBottom: 10,
    maxWidth: 250,
    width: '100%',
    alignSelf: 'center',
    ...globalStyles.primaryButton,
  },
  centerText: {
    textAlign: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
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
  smallText: {
    ...globalStyles.smallText,
    color: '#D1D3D8',
    fontStyle: 'italic',
    marginTop: 30,
  },
  disabled: {
    backgroundColor: '#828282',
    opacity: 0.5,
  },
});

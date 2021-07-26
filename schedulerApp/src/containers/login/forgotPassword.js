import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {globalStyles} from '../../styles/global';
import LoadingModal from '../../components/loadingModal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState({
    message: 'Loading',
    value: false,
  });

  // eslint-disable-next-line no-shadow
  const resetPwdEmail = (email) => {
    setIsLoading({
      message: 'Sending',
      value: true,
    });
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setIsLoading({
          value: false,
        });
        console.log('reset password email sent!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={globalStyles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <LoadingModal isLoading={isLoading} />
        <Pressable
          style={styles.backButton}
          onPress={() => {
            navigation.navigate('Landing');
          }}>
          <Icon
            name="chevron-left"
            size={25}
            color="#fff"
            style={styles.icon}
          />
        </Pressable>
        <Text
          style={[
            styles.headerText1,
            globalStyles.centerText,
            globalStyles.boldText,
          ]}>
          Reset Password
        </Text>
        <Text style={[styles.text, globalStyles.centerText]}>
          {
            "Enter your email address that you used to register.\nWe'll send you an email with a link to reset your password."
          }
        </Text>
        <View style={globalStyles.textBoxContainer}>
          <Text style={globalStyles.text}>Email</Text>
          <TextInput
            style={globalStyles.textBox}
            onChangeText={(value) => {
              setEmail(value);
            }}
            value={email}
          />
        </View>
        <Pressable
          style={[styles.primaryButton]}
          onPress={() => resetPwdEmail(email)}>
          <Text style={[globalStyles.text, globalStyles.centerText]}>Send</Text>
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
  backButton: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
    ...globalStyles.text,
  },
  icon: {
    paddingRight: 10,
  },
  primaryButton: {
    ...globalStyles.primaryButton,
    marginVertical: 30,
    marginHorizontal: 30,
  },
});

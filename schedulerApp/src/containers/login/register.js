import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import {globalStyles} from '../../styles/global';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoadingModal from '../../components/loadingModal';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState({
    message: 'Loading',
    value: false,
  });

  // Firebase create user
  // eslint-disable-next-line no-shadow
  const register = (email, password) => {
    setIsLoading({
      ...isLoading,
      message: 'Signing Up',
      value: true,
    });
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        const userData = {
          displayName: name,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified,
        };
        const sendEmailVerificationPromise = user.sendEmailVerification();
        const updateUserDetailPromise = user.updateProfile({
          displayName: name,
        });
        const writeToDatabasePromise = firestore()
          .collection('users')
          .doc(user.uid)
          .set(userData);
        return Promise.all([
          sendEmailVerificationPromise,
          updateUserDetailPromise,
          writeToDatabasePromise,
        ]);
      })
      .then(() => {
        setIsLoading({
          ...isLoading,
          value: false,
        });
        console.log('successfully registered');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={globalStyles.container}>
      <LoadingModal isLoading={isLoading} />
      <Pressable
        onPress={() => {
          navigation.navigate('Landing');
        }}>
        <Icon name="chevron-left" size={25} color="#fff" />
      </Pressable>
      <Text style={[styles.headerText, globalStyles.boldText]}>Sign Up</Text>
      <ScrollView>
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
        <View style={globalStyles.textBoxContainer}>
          <Text style={globalStyles.text}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={globalStyles.textBox}
            onChangeText={(value) => {
              setPassword(value);
            }}
            value={password}
          />
        </View>
        <View style={globalStyles.textBoxContainer}>
          <Text style={globalStyles.text}>Name</Text>
          <TextInput
            style={globalStyles.textBox}
            onChangeText={(value) => {
              setName(value);
            }}
            value={name
              .toLowerCase()
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
              .join(' ')}
          />
        </View>
        <Pressable
          style={styles.primaryButton}
          onPress={() => {
            register(email, password);
          }}>
          <Text style={[globalStyles.text, globalStyles.centerText]}>
            Sign Up
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    ...globalStyles.primaryButton,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  headerText: {
    ...globalStyles.headerText1,
    marginVertical: 10,
  },
});

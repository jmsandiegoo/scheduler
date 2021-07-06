import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {globalStyles} from '../../styles/global';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Firebase create user
  const register = (email, password) => {
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
        console.log('successfully registered');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Register</Text>
      <Text>Email</Text>
      <TextInput
        style={globalStyles.input}
        onChangeText={(value) => {
          setEmail(value);
        }}
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={globalStyles.input}
        onChangeText={(value) => {
          setPassword(value);
        }}
        value={password}
      />
      <Text>Name</Text>
      <TextInput
        style={globalStyles.input}
        onChangeText={(value) => {
          setName(value);
        }}
        value={name
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
          .join(' ')}
      />
      <Button
        title="Create Account"
        onPress={() => {
          register(email, password);
        }}
      />
    </View>
  );
}

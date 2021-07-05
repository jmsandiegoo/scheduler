import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {globalStyles} from '../../styles/global';
import auth from '@react-native-firebase/auth';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Firebase create user
  const register = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed In
        console.log('successfully registered');
        var user = userCredential.user;
        console.log(user);
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'RegisterConfirm'}],
        // })
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
        value={name}
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

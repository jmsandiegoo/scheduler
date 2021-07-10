import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {globalStyles} from '../../styles/global';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed In
        console.log('User Logged In');
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
      <Button
        title="Sign In"
        onPress={() => {
          signIn(email, password);
        }}
      />
    </View>
  );
}

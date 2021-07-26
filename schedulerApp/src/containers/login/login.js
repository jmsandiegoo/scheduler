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
import LoadingModal from '../../components/loadingModal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState({
    message: 'Loading',
    value: false,
  });

  // eslint-disable-next-line no-shadow
  const signIn = (email, password) => {
    setIsLoading({
      ...isLoading,
      message: 'Signing In',
      value: true,
    });
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed In
        setIsLoading({
          ...isLoading,
          value: false,
        });
        console.log('User Logged In');
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
      <Text style={[styles.headerText, globalStyles.boldText]}>Sign In</Text>
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
        <Pressable
          style={styles.forgotButton}
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={[styles.forgotText]}>Forget Password?</Text>
        </Pressable>
        <Pressable
          style={styles.primaryButton}
          onPress={() => {
            signIn(email, password);
          }}>
          <Text style={[globalStyles.text, globalStyles.centerText]}>
            Sign In
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    ...globalStyles.primaryButton,
    marginHorizontal: 30,
  },
  forgotButton: {
    marginVertical: 30,
  },
  forgotText: {
    ...globalStyles.smallText,
    ...globalStyles.centerText,
    ...globalStyles.underlineText,
    color: '#D1D3D8',
  },
  headerText: {
    ...globalStyles.headerText1,
    marginVertical: 10,
  },
});

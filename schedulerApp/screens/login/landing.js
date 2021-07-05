import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Landing({navigation}) {
  return (
    <View>
      <Text>Landing Page</Text>
      <Button
        title="Sign up With Email"
        onPress={() => navigation.navigate('Register')}
      />

      <Button
        title="Already have an account? Sign In"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

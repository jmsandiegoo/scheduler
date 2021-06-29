import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackActions} from '@react-navigation/native';

export default function Register({navigation}) {
  return (
    <View>
      <Text>Register</Text>
      <Button
        title="Create Account"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'RegisterConfirm'}],
          })
        }
      />
    </View>
  );
}

import React from 'react';
import {View, Text, Button} from 'react-native';

export default function RegisterConfirm({navigation}) {
  return (
    <View>
      <Text>Register Confirmation</Text>
      <Button
        title="Sign In"
        onPress={() =>
          navigation.reset({
            index: 1,
            routes: [{name: 'Landing'}, {name: 'Login'}],
          })
        }
      />
    </View>
  );
}

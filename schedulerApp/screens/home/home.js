import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Add Mount"
        onPress={() => navigation.navigate('ModifyMount')}
      />
    </View>
  );
}

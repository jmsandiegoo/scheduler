import React from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../../styles/global';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
      <Button
        title="Add Mount"
        onPress={() => navigation.navigate('ModifyMount')}
      />
    </View>
  );
}

import React from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../../styles/global';

export default function FindMount({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text>Find Mount</Text>
      <Button
        title="View Sched"
        onPress={() => navigation.navigate('ViewSchedule')}
      />
    </View>
  );
}

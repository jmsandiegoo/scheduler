import React from 'react';
import {View, Text, Button} from 'react-native';

export default function FindMount({navigation}) {
  return (
    <View>
      <Text>Find Mount</Text>
      <Button
        title="View Sched"
        onPress={() => navigation.navigate('ViewSchedule')}
      />
    </View>
  );
}

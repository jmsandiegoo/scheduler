import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../../styles/global';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text>
        Home <Icon name="menu" size={30} color="#fff" />
      </Text>

      <Button
        title="Add Mount"
        onPress={() => navigation.navigate('ModifyMount')}
      />
    </View>
  );
}

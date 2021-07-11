import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {globalStyles} from '../../styles/global';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('ModifyMount')}
        style={globalStyles.fabTouchableOpacityStyle}>
        <Image
          source={require('../../assets/images/fab_icon.png')}
          style={globalStyles.fabStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

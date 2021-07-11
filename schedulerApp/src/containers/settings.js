import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {globalStyles} from '../styles/global';
import Button from 'apsl-react-native-button'

export default function Settings({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.subTitleStyle}>Maximum hours of continuous sentry (per combatant)</Text>
      <View style={{paddingTop: 10, paddingBottom: 20,}}>
        <TextInput 
          style={globalStyles.outlineInputStyle}
          placeholder={'Hours'}
          placeholderTextColor="#fff"
          keyboardType="phone-pad"
        />
      </View>

      <Text style={globalStyles.subTitleStyle}>Maximum prowls (per combatant - weekday)</Text>
      <View style={{paddingTop: 10, paddingBottom: 20,}}>
        <TextInput 
          style={globalStyles.outlineInputStyle}
          placeholder={'Number'}
          placeholderTextColor="#fff"
          keyboardType="phone-pad"
        />
      </View>

      <Text style={globalStyles.subTitleStyle}>Maximum prowls (per combatant - weekend)</Text>
      <View style={{paddingTop: 10, paddingBottom: 20,}}>
        <TextInput 
          style={globalStyles.outlineInputStyle}
          placeholder={'Number'}
          placeholderTextColor="#fff"
          keyboardType="phone-pad"
        />
      </View>

      <Button 
        style={globalStyles.buttonStyle}
        textStyle={globalStyles.buttonTextStyle}
      >
        Set
      </Button>
    </View>
  );
}

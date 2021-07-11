import React from 'react';
import {View, Text, TextInput, Image, Pressable, TouchableOpacity,} from 'react-native';
import {globalStyles} from '../../styles/global';
import ToggleSwitch from 'rn-toggle-switch'

export default function ModifyMount() {
  return (
    <View style={globalStyles.container}>
      <TextInput 
        style={globalStyles.outlineInputStyle}
        placeholder={'Camp'}
        placeholderTextColor="#fff"
      />
      <View style={globalStyles.modifyMountSubtitleStyle}>
        <Text style={globalStyles.subTitleStyle}>Starts</Text>
        <View style={globalStyles.modifyMountSubSubtitleStyle}>
          <Text style={globalStyles.subTitleStyle}>Date</Text>
          <Text>         </Text>
          <Text style={globalStyles.subTitleStyle}>Time</Text>
        </View>
      </View>
      
      <View style={globalStyles.modifyMountSubtitleStyle}>
        <Text style={globalStyles.subTitleStyle}>Ends</Text>
        <View style={globalStyles.modifyMountSubSubtitleStyle}>
          <Text style={globalStyles.subTitleStyle}>Date</Text>
          <Text>         </Text>
          <Text style={globalStyles.subTitleStyle}>Time</Text>
        </View>
      </View>

      <View style={globalStyles.modifyMountSubtitleStyle}>
        <Text style={globalStyles.subTitleStyle}>Repeat</Text>
        <ToggleSwitch
          text={{on: '', off: '', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
          textStyle={{fontWeight: 'bold'}}
          color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
          active={true}
          disabled={false}
          width={30}
          radius={15}
          onValueChange={(val) => {
            /* your handler function... */
          }}
        />
      </View>

      <View style={globalStyles.modifyMountSubtitleStyle}>
        <Text style={globalStyles.subTitleStyle}>Team</Text>
          <Pressable>
            <TouchableOpacity>
              <Image source={require('../../assets/images/pencil_icon.png')} />
            </TouchableOpacity>
          </Pressable>
      </View>
    </View>
  );
}
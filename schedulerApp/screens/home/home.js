import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {globalStyles} from '../../styles/global';
import { CalendarList } from 'react-native-calendars';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
      
      <CalendarList 
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        //Current Date
        current={'2021-06-29'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2021-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2099-12-31'}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMM yyyy'}
         // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ModifyMount')} style={globalStyles.fabTouchableOpacityStyle} >
        <Image source={require('../../images/fab_icon.png')}  style={globalStyles.fabStyle} />
      </TouchableOpacity>
    </View>
  );
}

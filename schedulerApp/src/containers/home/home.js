import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {globalStyles} from '../../styles/global';

import CustomCalendar from '../../components/customCalendar';
import {CalendarList} from 'react-native-calendars';
import {useSelector, useDispatch} from 'react-redux';
import {getMounts} from '../../redux/mountSlice';

export default function Home({navigation, createFirestoreInstance}) {
  const dispatch = useDispatch();
  const mounts = useSelector((state) => state.mount_info.mounts);
  const firestore = createFirestoreInstance;
  useEffect(() => {
    dispatch(getMounts());
  }, [dispatch]);

  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
      
      <CustomCalendar/>
        
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
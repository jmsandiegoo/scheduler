import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../styles/global';

export default function AgendaItem({date, isActive}) {
  const weekDays = ['Sun', 'Mon', 'Teu', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <View style={styles.container}>
      {/* <Text>{weekDays[date.getDay()]}</Text> */}
      <Text style={[styles.text, globalStyles.centerText]}>
        {weekDays[date.getDay()]}
      </Text>
      <View style={[styles.dayContainer, styles.active]}>
        <Text style={[styles.text, globalStyles.centerText]}>
          {date.getDate()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    ...globalStyles.text,
    marginVertical: 0,
  },
  dayContainer: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    margin: 8,
  },
  active: {
    backgroundColor: '#FF6231',
    borderRadius: 50,
  },
});

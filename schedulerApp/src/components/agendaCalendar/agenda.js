import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../styles/global';
import AgendaItem from './agendaItem';

export default function Agenda({onDayChange, startDate, endDate}) {
  const [mountDates, setMountDates] = useState([]);
  useEffect(() => {
    const getDates = (startDate, endDate) => {
      const dates = [];
      let currentDate = startDate;
      console.log(startDate, endDate);
      while (currentDate.getTime() <= endDate.getTime()) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (setMountDates) {
        setMountDates(dates);
      }
    };
    getDates(startDate, endDate);
  }, [startDate, endDate]);

  return (
    <View style={styles.container}>
      {mountDates.map((date, i) => {
        return <AgendaItem key={i.toString()} date={date} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#302F2F',
  },
  text: {
    ...globalStyles.text,
    marginVertical: 0,
  },
  active: {
    backgroundColor: '#FF6231',
  },
});

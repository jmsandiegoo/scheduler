import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HamburgerButton(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.icon}
      onPress={() => navigation.openDrawer()}>
      <Icon name="menu" size={25} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 24,
  },
});

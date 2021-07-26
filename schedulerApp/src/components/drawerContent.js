import React from 'react';
import {StyleSheet, View, Text, Pressable, SafeAreaView} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {globalStyles} from '../styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

export default function drawerContent(props) {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('sign out successful');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <DrawerContentScrollView
      contentContainerStyle={globalStyles.container}
      style={globalStyles.container}>
      {/* Header */}
      <SafeAreaView style={globalStyles.safeAreaView}>
        <View style={styles.drawerHeaderSection}>
          <Text style={styles.headerText}>ST SCHEDULER APP</Text>
          <Text style={styles.userNameText}>{props.user.displayName}</Text>
          <Text style={styles.emailText}>{props.user.email}</Text>
        </View>
        <View style={styles.drawerItemContainer}>
          <Pressable
            style={styles.drawerItem}
            onPress={() => {
              props.navigation.navigate('Home');
            }}>
            <Icon name="home" size={15} color="#fff" style={styles.icon} />
            <Text style={styles.subTitleText}>Home</Text>
          </Pressable>
          <Pressable
            style={styles.drawerItem}
            onPress={() => {
              props.navigation.navigate('ScheduleStack');
            }}>
            <Icon
              name="clock-time-two"
              size={15}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.subTitleText}>Schedule</Text>
          </Pressable>
          <Pressable
            style={styles.drawerItem}
            onPress={() => {
              props.navigation.navigate('Settings');
            }}>
            <Icon name="cog" size={15} color="#fff" style={styles.icon} />
            <Text style={styles.subTitleText}>Settings</Text>
          </Pressable>
          <Pressable
            style={[styles.drawerItem, styles.signOutText]}
            onPress={() => {
              signOut();
            }}>
            <Icon
              name="logout-variant"
              size={15}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.subTitleText}>Sign Out</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeaderSection: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 0.3,
    borderRadius: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    color: '#FF6231',
    fontSize: 20,
  },
  emailText: {
    color: '#D1D3D8',
    fontSize: 12,
    marginTop: 5,
  },
  userNameText: {
    fontSize: 19,
    color: '#FFF',
    marginTop: 10,
  },
  drawerItemContainer: {
    flexGrow: 1,
  },
  drawerItem: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignContent: 'center',
  },
  icon: {
    paddingRight: 10,
  },
  signOutText: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  subTitleText: {
    color: '#fff',
  },
});

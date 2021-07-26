import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {globalStyles} from '../../styles/global';

export default function Landing({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text style={[styles.title]}>ST SCHEDULER APP</Text>
        <View style={styles.heroTextContainer}>
          <Text style={[styles.heroText, globalStyles.boldText]}>WITH</Text>
          <Text style={[styles.heroText, globalStyles.boldText, styles.offSet]}>
            YOU
          </Text>
        </View>
        <Text style={[styles.welcomeMessage]}>
          {
            'Efficiently create your duty schedule\nthrough the tip of your hands'
          }
        </Text>
      </View>
      <View style={styles.content2}>
        <Pressable
          style={styles.primaryButton}
          title="Sign up With Email"
          onPress={() => navigation.navigate('Register')}>
          <Text style={[globalStyles.text, globalStyles.centerText]}>
            Sign Up with Email
          </Text>
        </Pressable>
        <Text style={[globalStyles.text, globalStyles.centerText]}>
          Already have an account?{' '}
          <Text
            style={[globalStyles.text, globalStyles.underlineText]}
            onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    justifyContent: 'space-between',
  },
  content1: {
    flex: 2,
    // backgroundColor: 'red',
    // justifyContent: 'space-evenly',
  },
  content2: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  primaryButton: {
    ...globalStyles.primaryButton,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  title: {
    ...globalStyles.headerText2,
    ...globalStyles.boldText,
    ...globalStyles.centerText,
    flex: 1,
  },
  heroTextContainer: {
    position: 'relative',
    marginLeft: 10,
    paddingBottom: 40,
    flex: 1,
  },
  heroText: {
    textTransform: 'uppercase',
    color: '#D1D3D8',
    fontSize: 40,
  },
  offSet: {
    position: 'absolute',
    top: 40,
    marginLeft: 20,
    color: '#BDBDBD',
  },
  welcomeMessage: {
    ...globalStyles.text,
    ...globalStyles.centerText,
    flex: 1,
  },
});

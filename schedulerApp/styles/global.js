import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1B1B1B',
  },
  titleText: {
    textTransform: 'uppercase',
    color: '#FFF',
  },
  text: {
    marginVertical: 8,
    lineHeight: 20,
  },

  fabTouchableOpacityStyle: {
    position: 'absolute',
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  fabStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  input: {
    borderWidth: 1,
  },
});

export const navOptions = {
  headerStyle: {
    backgroundColor: '#141414',
    height: 75,
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    textTransform: 'uppercase',
    color: '#FF6231',
  },
  headerTitleAlign: 'center',
};

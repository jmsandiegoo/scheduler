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
});

export const navOptions = {
  headerStyle: {
    backgroundColor: '#141414',
    height: 75,
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    textTransform: 'uppercase',
    color: '#FF3D00',
  },
  headerTitleAlign: 'center',
};

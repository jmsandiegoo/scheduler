import {StyleSheet} from 'react-native';

const variables = {
  headerText: {
    textTransform: 'uppercase',
    color: '#D1D3D8',
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1B1B1B',
  },
  safeAreaView: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  headerText1: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: 'bold',
    ...variables.headerText,
  },
  headerText2: {
    fontSize: 20,
    ...variables.headerText,
  },
  headerText3: {
    fontSize: 20,
    ...variables.headerText,
  },
  text: {
    marginVertical: 8,
    lineHeight: 20,
    color: '#FFF',
  },
  smallText: {
    fontSize: 12,
    color: '#FFF',
  },
  primaryButton: {
    backgroundColor: '#FF6231',
    borderRadius: 30,
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
  headerTintColor: '#D1D3D8',
  headerTitleStyle: {
    textTransform: 'uppercase',
    color: '#FF6231',
  },
  headerTitleAlign: 'center',
};

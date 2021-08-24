import {StyleSheet} from 'react-native';

const variables = {
  headerText: {
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
    ...variables.headerText,
  },
  headerText2: {
    fontSize: 22,
    ...variables.headerText,
  },
  headerText3: {
    fontSize: 20,
    ...variables.headerText,
  },
  headerText4: {
    fontSize: 20,
    ...variables.headerText,
  },
  text: {
    marginVertical: 8,
    // lineHeight: 20,
    color: '#FFF',
  },
  smallText: {
    fontSize: 12,
    color: '#FFF',
  },
  centerText: {
    textAlign: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  boldText: {
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: '#FF6231',
    borderRadius: 30,
  },
  textBoxContainer: {
    margin: 5,
  },
  textBox: {
    backgroundColor: '#424242',
    borderWidth: 0.5,
    borderColor: '#000',
    color: '#fff',
  },

  fabTouchableOpacityStyle: {
    position: 'absolute',
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    right: 40,
    bottom: 40,
  },

  fabStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  input: {
    borderWidth: 1,
  },

  outlineInputStyle: {
    backgroundColor: '#1b1b1b',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 20,
    borderColor: '#FF3D00'
  },

  subTitleStyle: {
    color: '#fff',
    fontSize: 20,
  },

  modifyMountSubtitleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  modifyMountSubSubtitleStyle: {
    flexDirection: 'row', 
    justifyContent: 'center',
  },

  buttonStyle: {
    backgroundColor: '#EB5757',
  },

  buttonTextStyle: {
    fontWeight: 'bold'
  }
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

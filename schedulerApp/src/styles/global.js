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
    right: 40,
    bottom: 40,
  },

  fabStyle: {
    resizeMode: 'contain',
    width:   50,
    height: 50,
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
  headerTintColor: '#FFF',
  headerTitleStyle: {
    textTransform: 'uppercase',
    color: '#FF3D00',
  },
  headerTitleAlign: 'center',
};

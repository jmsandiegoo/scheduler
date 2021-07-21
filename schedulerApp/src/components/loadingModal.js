import React from 'react';
import {Modal, View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles/global';

export default function LoadingModal({isLoading}) {
  return (
    <Modal animationType="fade" transparent={true} visible={isLoading.value}>
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <ActivityIndicator color="#FF6231" size="large" />
          <Text style={[styles.smallText, styles.centerText]}>
            {isLoading.message}
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    ...globalStyles.container,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    padding: 20,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#1B1B1B',
  },
  centerText: {
    textAlign: 'center',
  },
  smallText: {
    ...globalStyles.smallText,
    color: '#D1D3D8',
  },
});

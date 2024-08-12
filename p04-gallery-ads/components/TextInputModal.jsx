import { } from 'react';
import { Modal, View } from 'react-native';

export default function TextInputModal({ modalVisible, closeModal }) {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={{ flex: 1, backgroundColor: 'lightgreen' }}>

      </View>
    </Modal>
  );
}
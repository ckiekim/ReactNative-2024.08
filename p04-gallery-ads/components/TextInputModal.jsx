import { KeyboardAvoidingView, Modal, Platform, Pressable, SafeAreaView, TextInput } from 'react-native';

export default function TextInputModal({ 
  modalVisible, closeModal, albumTitle, setAlbumTitle, addAlbum
}) {
  const onSubmitEditing = () => {
    if (!albumTitle)
      return;
    addAlbum();
    closeModal();
    setAlbumTitle('');
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        style={{ flex: 1 }}
      >
        <Pressable style={{ flex: 1 }} onPress={closeModal}> 
          <SafeAreaView style={{ width: '100%', position: 'absolute', bottom: 0 }}>
            <TextInput 
              value={albumTitle}
              onChange={setAlbumTitle}
              onSubmitEditing={onSubmitEditing}
              style={{ width: '100%', padding: 10, borderWidth: 0.5, borderColor: 'lightgrey' }} 
              placeholder="앨범명을 입력해주세요."
              autoFocus={true}
            />
          </SafeAreaView>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
import { Image, Modal, Pressable, TouchableOpacity, View } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const ArrowButton = ({ iconName, onPress, disabled }) => {
  return (
    <TouchableOpacity 
      style={{ paddingVertical: 30, paddingHorizontal: 10 }}
      onPress={onPress}
      disabled={disabled}
    >
      <SimpleLineIcons name={iconName} size={24} color={disabled ? 'transparent' : 'black'} />
    </TouchableOpacity>
  )
}

export default function BigImageModal({ 
  bigImageModalVisible, closeBigImageModal, selectedImage, onPressLeftArrow, onPressRightArrow, 
  showPreviousArrow, showNextArrow,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={bigImageModalVisible}
    >
      <Pressable 
        style={{ 
          flex: 1, justifyContent: 'center', alignItems: 'center', 
          backgroundColor: 'rgba(110, 110, 110, 0.5)'
        }}
        onPress={closeBigImageModal}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ArrowButton 
            iconName="arrow-left" onPress={onPressLeftArrow} disabled={!showPreviousArrow}
          />
          <Pressable>
            <Image 
              source={{ uri: selectedImage?.uri }}
              style={{ width: 280, height: 210, backgroundColor: 'white' }}
              resizeMode="contain"
            />
          </Pressable>
          <ArrowButton 
            iconName="arrow-right" onPress={onPressRightArrow} disabled={!showNextArrow}
          />
        </View>
      </Pressable>
    </Modal>
  );
}
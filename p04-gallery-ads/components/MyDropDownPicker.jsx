import { Text, TouchableOpacity, View } from 'react-native';

const headerHeight = 50;

export default function MyDropDownPicker({ onPressHeader, selectedAlbumTitle, openModal }) {

  return (
    <TouchableOpacity 
      onPress={onPressHeader}
      style={{
        height: headerHeight, justifyContent: 'center', alignItems: 'center'
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{selectedAlbumTitle}</Text>
      <TouchableOpacity 
        onPress={openModal}
        style={{ 
          position: 'absolute', right: 0, height: headerHeight, paddingRight: 10,
          justifyContent: 'center', alignItems: 'center'
        }}
      >
        <Text>앨범 추가</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
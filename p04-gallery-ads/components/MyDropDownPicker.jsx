import { Text, TouchableOpacity, View } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const headerHeight = 50;

export default function MyDropDownPicker({ 
  isDropdownOpen, onPressHeader, selectedAlbum, openModal, albums, onPressAlbum
}) {

  return (
    <View>
      <TouchableOpacity 
        activeOpacity={1}
        onPress={onPressHeader}
        style={{
          flexDirection: 'row',
          height: headerHeight, 
          justifyContent: 'center', alignItems: 'center'
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{selectedAlbum.title}</Text>
        <SimpleLineIcons 
          name={isDropdownOpen ? 'arrow-down' : 'arrow-up'} 
          size={12} color="black" style={{ marginLeft: 8 }}
        />
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

      {isDropdownOpen && (
        <View 
          style={{ 
            position: 'absolute', top: headerHeight, width: '100%', backgroundColor: '#ffffff',
            borderBottomColor: 'grey', borderBottomWidth: 0.4,
            borderTopColor: 'grey', borderTopWidth: 0.4,
          }}
        >
          {albums.map(album => {
            const isSelectedAlbum = album.id === selectedAlbum.id;
            return (
            <TouchableOpacity 
              key={`album-${album.id}`}
              onPress={() => onPressAlbum(album)}
              style={{ paddingVertical: 6, width: '100%', alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ fontWeight: isSelectedAlbum ? 'bold' : 'normal' }}>
                {album.title}
              </Text>
            </TouchableOpacity>
          )})}
        </View>
      )}
    </View>
  );
}
import { useState } from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MyDropDownPicker from '@/components/MyDropDownPicker';
import TextInputModal from '@/components/TextInputModal';
import useGallery from '@/hooks/use-gallery';

const width = Dimensions.get('screen').width;
const columnWidth = width / 3;
const columnHeight = width / 4;   // aspect-ratio = 4 : 3

export default function HomeScreen() {
  const { 
    imagesWithAddButton, selectedAlbum, modalVisible, albumTitle, isDropdownOpen, albums,
    pickImage, deleteImage, openModal, closeModal, setAlbumTitle, addAlbum, onPressHeader,
    openDropdown, closeDropdown, onPressAlbum,
  } = useGallery();

  const renderItem = ({ item: image }) => {
    if (image.id === -1) {
      return (
        <TouchableOpacity 
          onPress={pickImage}
          style={{ 
            width: columnWidth, height: columnHeight, backgroundColor: '#c2c2c2',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ fontWeight: '100', fontSize: 32 }}>+</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onLongPress={() => deleteImage(image.id)} >
        <Image 
          source={{ uri: image.uri }} 
          style={{ width: columnWidth, height: columnHeight, }} 
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyDropDownPicker 
        isDropdownOpen={isDropdownOpen}
        onPressHeader={onPressHeader}
        selectedAlbum={selectedAlbum} 
        openModal={openModal} 
        albums={albums}
        onPressAlbum={onPressAlbum}
      />
      <TextInputModal 
        modalVisible={modalVisible} closeModal={closeModal} 
        albumTitle={albumTitle} setAlbumTitle={setAlbumTitle} addAlbum={addAlbum}
      />
      <FlatList 
        data={imagesWithAddButton}
        keyExtractor={(item) => `image-${item.id}`}
        renderItem={renderItem}
        numColumns={3}
        style={{ zIndex: -1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: Platform.OS === 'android' ? 20 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

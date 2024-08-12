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
    imagesWithAddButton, selectedAlbum, modalVisible, 
    pickImage, deleteImage, openModal, closeModal,
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
        selectedAlbumTitle={selectedAlbum.title} 
        openModal={openModal}
      />
      <TextInputModal modalVisible={modalVisible} closeModal={closeModal} />
      <FlatList 
        data={imagesWithAddButton}
        keyExtractor={(item) => `image-${item.id}`}
        renderItem={renderItem}
        numColumns={3}
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

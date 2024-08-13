import { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const defaultAlbum = { id: 1, title: '기본' }

export default function useGallery() {
  const [images, setImages] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(defaultAlbum);
  const [albums, setAlbums] = useState([defaultAlbum]);
  const [modalVisible, setModalVisible] = useState(false);
  const [albumTitle, setAlbumTitle] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);

    if (!result.canceled) {
      const lastId = images.length === 0 ? 0 : images[images.length - 1].id;
      const newImage = {
        id: lastId + 1,
        uri: result.assets[0].uri
      };
      setImages([
        ...images, newImage
      ]);
    }
  };

  const deleteImage = (imageId) => {
    Alert.alert('이미지를 삭제하시겠습니까?', '', [
      { style: 'cancel', text: '아니오' },
      { text: '네', onPress: () => {
          const newImages = images.filter(image => image.id !== imageId);
          setImages(newImages);
      }}
    ])
  };

  const imagesWithAddButton = [
    ...images, 
    {
      id: -1, uri: '',
    }
  ];

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const addAlbum = () => {
    const newAlbumId = albums[albums.length - 1].id + 1;
    const newAlbum = { id: newAlbumId, title: albumTitle };
    const newAlbums = [ ...albums, newAlbum ];
    setAlbums(newAlbums);
  }

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);
  const onPressHeader = () => {

  }

  return {
    imagesWithAddButton, selectedAlbum, modalVisible, albumTitle,
    pickImage, deleteImage, openModal, closeModal, setAlbumTitle, addAlbum, onPressHeader,
  }
}
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({name}) => {
  return (
    <View style={{ paddingHorizontal: 6}}>
      <Ionicons name={name} size={24} color="black" />
    </View>
  );
}

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>친구</Text>
      <View style={{ flexDirection: 'row' }}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="musical-notes-outline" />
        <IconButton name="settings-outline" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', justifyContent: 'space-between', 
    alignItems: 'center',     // Center items vertically
    paddingHorizontal: 5,   // paddingVertical: 8, // backgroundColor: 'skyblue'
  },
  title: {
    fontSize: 22, fontWeight: 'bold'
  }
})
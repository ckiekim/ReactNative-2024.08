import { useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Division from '@/components/Division';
import FriendList from '@/components/FriendList';
import FriendSection from '@/components/FriendSection';
import Header from '@/components/Header';
import Margin from '@/components/Margin';
import Profile from '@/components/Profile';
import TabBar from '@/components/TabBar';
import { myProfile, friendProfiles } from '@/assets/data/mockData';

export default function HomeScreen() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const handleArrow = () => { setIsOpened(!isOpened) };

  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}> */}
      <View style={styles.container}>
        <Header />
        <Margin height={10} />
        <Profile 
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
          isMe={true}
        />
        <Margin height={15} />
        <Division />
        <Margin height={8} />
        <FriendSection 
          friendProfileLen={friendProfiles.length} 
          onPressArrow={handleArrow}
          isOpened={isOpened}
        />
        <FriendList 
          friendList={friendProfiles} 
          isOpened={isOpened}
        />
      </View>
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});

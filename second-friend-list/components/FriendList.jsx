import { ScrollView, View } from 'react-native';
import Margin from './Margin';
import Profile from './Profile';

export default function FriendList({ friendList, isOpened }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      { isOpened && friendList.map((friend, index) => (
        <View key={index}>
          <Profile
            uri={friend.uri}
            name={friend.name}
            introduction={friend.introduction}
            isMe={false}      
          />
          <Margin height={6} />
        </View>
      ))}
    </ScrollView>
  );
}
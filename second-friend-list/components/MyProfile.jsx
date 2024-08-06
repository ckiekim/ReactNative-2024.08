import { Image, View, Text } from 'react-native';
import { myProfile } from '@/assets/data/mockData';
import Margin from './Margin';

export default function MyProfile() {

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: myProfile.uri }} style={{ width: 50, height: 50, borderRadius: 20 }} />
      <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{myProfile.name}</Text>
        <Margin height={6} />
        <Text style={{ fontSize: 12, color: 'grey' }}>{myProfile.introduction}</Text>
      </View>
    </View>
  );
}

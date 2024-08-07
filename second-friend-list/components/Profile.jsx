import { Image, View, Text } from 'react-native';
import Margin from './Margin';

export default function Profile({ uri, name, introduction, isMe }) {
  const size = isMe ? 50 : 40;
  const borderRadius = isMe ? 20 : 16;
  const fontSize = isMe ? 16 : 14;
  const height = isMe ? 6 : 2;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: uri }} style={{ width: size, height: size, borderRadius: borderRadius }} />
      <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: fontSize }}>{name}</Text>
        <Margin height={height} />
        <Text style={{ fontSize: 12, color: 'grey' }}>{introduction}</Text>
      </View>
    </View>
  );
}
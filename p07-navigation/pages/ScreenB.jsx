import { Text, View } from 'react-native';
import Margin from '@/components/Margin';

export default function ScreenB() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
      <Text>이 페이지는 Screen B 입니다.</Text>
      <Margin height={20} />
    </View>
  );
}
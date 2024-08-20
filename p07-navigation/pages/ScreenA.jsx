import { Text, View } from 'react-native';
import Margin from '@/components/Margin';

export default function ScreenA() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue' }}>
      <Text>This page is Screen A.</Text>
      <Margin height={20} />
    </View>
  );
}
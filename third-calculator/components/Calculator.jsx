import { Text, TouchableOpacity, View } from 'react-native';
import MyButton from './MyButton';
import { COLOR } from '@/constants/color';

export default function Calculator() {
  return (
    <View style={{ flex: 1, width: '60%', marginTop: 100 }}>
      
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <MyButton type="reset" text="AC" onPress={() => null} flex={3} />
        <MyButton type="operator" text="÷" onPress={() => null} flex={1} />
      </View>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <MyButton type="num" text="7" onPress={() => null} flex={1} />
        <MyButton type="num" text="8" onPress={() => null} flex={1} />
        <MyButton type="num" text="9" onPress={() => null} flex={1} />
        <MyButton type="operator" text="×" onPress={() => null} flex={1} />
      </View>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <MyButton type="num" text="4" onPress={() => null} flex={1} />
        <MyButton type="num" text="5" onPress={() => null} flex={1} />
        <MyButton type="num" text="6" onPress={() => null} flex={1} />
        <MyButton type="operator" text="－" onPress={() => null} flex={1} />
      </View>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <MyButton type="num" text="1" onPress={() => null} flex={1} />
        <MyButton type="num" text="2" onPress={() => null} flex={1} />
        <MyButton type="num" text="3" onPress={() => null} flex={1} />
        <MyButton type="operator" text="＋" onPress={() => null} flex={1} />
      </View>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <MyButton type="num" text="0" onPress={() => null} flex={2} />
        <MyButton type="num" text="." onPress={() => null} flex={1} />
        <MyButton type="operator" text="＝" onPress={() => null} flex={1} />
      </View>
    </View>
  );
}
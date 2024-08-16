import { Text, View } from 'react-native';
import { COLOR } from '@/constants/color';

export default function NextBusInfo({ 
  hasInfo, remainedTimeText, numOfRemainedStops, seatStatusText, 
}) {
  if (!hasInfo)
    return <Text style={{ fontSize: 12, color: COLOR.GRAY_2 }}>도착정보 없음</Text>

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 11, color: COLOR.BLACK, marginRight: 10 }}>
        {remainedTimeText}
      </Text>
      <View 
        style={{ flexDirection: 'row', alignItems: 'center', padding: 2,
          borderWidth: 0.8, borderColor: COLOR.GRAY_1, borderRadius: 3 }}
      >
        <Text style={{ fontSize: 10, color: COLOR.GRAY_3, marginRight: 4 }}>
          {numOfRemainedStops}번째전
        </Text>
        <Text style={{ fontSize: 10, color: COLOR.CORAL }}>
          {seatStatusText}
        </Text>
      </View>
    </View>
  );
}
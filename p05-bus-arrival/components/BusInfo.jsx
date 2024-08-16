import { Text, View } from 'react-native';

import AlarmButton from './AlarmButton';
import BookmarkButton from './BookmarkButton';
import NextBusInfo from './NextBusInfo';
import { COLOR } from '@/constants/color';

export default function BusInfo({
  isBookmarked, onPressBookmark, num, numColor, directionDescription,
}) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <BookmarkButton
          isBookmarked={isBookmarked} 
          onPressBookmark={onPressBookmark}
          style={{ padding: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
          <Text style={{ color: COLOR.GRAY_2, fontSize: 9 }}>{directionDescription} 방향</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <NextBusInfo 
            hasInfo={true}
            remainedTimeText={'8분 46초'} 
            numOfRemainedStops={5} 
            seatStatusText={'여유'}
          />
          {/* <Text>도착정보 없음</Text> */}
          <NextBusInfo 
            hasInfo={false}
            remainedTimeText={'21분 5초'} 
            numOfRemainedStops={12} 
            seatStatusText={'여유'}
          />
        </View>
        <AlarmButton onPressAlarm={() => {}} style={{ padding: 10 }} />
      </View>
    </View>
  );
}
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, SafeAreaView, SectionList, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import dayjs from 'dayjs';

import BusInfo from '@/components/BusInfo';
import Margin from '@/components/Margin';
import { COLOR } from '@/constants/color';
import { busStop, getSections, getBusNumColorByType, getRemainedTimeText, getSeatStatusText } from '@/assets/data/mockData';

export default function HomeScreen() {
  const sections = getSections(busStop.buses);
  const [now, setNow] = useState(dayjs());
  // const now = dayjs();

  useEffect(() => {
    const si = setInterval(() => {
      const newNow = dayjs();
      setNow(newNow);
    }, 10000);
    return () => {      // unmount 될때 실행하는 코드
      clearInterval(si);
    }
  }, []);

  const ListHeaderComponent = () => (
    <SafeAreaView style={{ backgroundColor: COLOR.GRAY_3 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={{ padding: 10 }}>
          <AntDesign name="left" size={20} color={COLOR.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <AntDesign name="home" size={20} color={COLOR.WHITE} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Margin height={8} />
        <Text style={{ color: COLOR.WHITE, fontSize: 13 }}>{busStop.id}</Text>
        <Margin height={2} />
        <Text style={{ color: COLOR.WHITE, fontSize: 20 }}>{busStop.name}</Text>
        <Margin height={6} />
        <Text style={{ color: COLOR.GRAY_1, fontSize: 14 }}>{busStop.directionDescription}</Text>
        <Margin height={16} />
      </View>
    </SafeAreaView>
  );
  const renderSectionHeader = ({ section: { title } }) => (
    <View 
      style={{ paddingHorizontal: 12, paddingBottom: 5, backgroundColor: COLOR.GRAY_1, 
      borderTopWidth: 0.5, borderBottomWidth: 0.5, borderTopColor: COLOR.GRAY_2, borderBottomColor: COLOR.GRAY_2 }}
    >
      <Text style={{ color: COLOR.GRAY_4, fontSize: 12 }}>{title}</Text>
    </View>
  );
  const renderItem = ({ item: bus }) => {
    const numColor = getBusNumColorByType(bus.type);

    const firstNextBusInfo = bus.nextBusInfos?.[0] ?? null;   // ?? 앞의 값이 null 또는 undefined 일 때 뒤의 값으로 할당
    const secondNextBusInfo = bus.nextBusInfos?.[1] ?? null;
    const newNextBusInfos =
      !firstNextBusInfo && !secondNextBusInfo
      ? [null]
      : [firstNextBusInfo, secondNextBusInfo];

    const processedNextBusInfos = newNextBusInfos.map((info) => {
      if (!info)
        return { hasInfo: false, remainedTimeText: '도착정보 없음' };
      const { arrivalTime, numOfRemainedStops, numOfPassengers } = info;
      const remainedTimeText = getRemainedTimeText(now, arrivalTime);
      const seatStatusText = getSeatStatusText(bus.type, numOfPassengers);
      return { hasInfo: true, remainedTimeText, numOfRemainedStops, seatStatusText };
    });

    return (
      <BusInfo
        isBookmarked={bus.isBookmarked}
        onPressBookmark={() => {}}
        num={bus.num}
        numColor={numColor}
        directionDescription={bus.directionDescription}
        processedNextBusInfos={processedNextBusInfos}
      />
    )
  };

  return (
    <View style={styles.container}>
      <SectionList 
        style={{ flex: 1, width: '100%' }}
        sections={sections}
        ListHeaderComponent={ListHeaderComponent}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

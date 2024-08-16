import { Image, StyleSheet, Platform, SafeAreaView } from 'react-native';

import BusInfo from '@/components/BusInfo';
import { COLOR } from '@/constants/color';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <BusInfo
        isBookmarked={true}
        onPressBookmark={() => {}}
        num={146}
        numColor={COLOR.BUS_B}
        directionDescription={'강남역.강남역사거리'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

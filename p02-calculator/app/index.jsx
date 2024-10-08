import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Calculator from '@/components/Calculator';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 50 }}>나의 계산기</Text>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

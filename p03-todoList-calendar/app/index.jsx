import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CalendarForm from '@/components/CalendarForm';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CalendarForm />
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

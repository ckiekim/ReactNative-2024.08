import { Image, StyleSheet, Text, View } from 'react-native';

import MyButton from '@/components/MyButton';
import useTransition from '@/hooks/use-translation';

export default function HomeScreen() {
  const { t, locale } = useTransition();

  if (locale === null) return null;

  return (
    <View style={styles.container}>
      <Text>{t('cookie_1')}</Text>
      <Text>{t('cookie_10')}</Text>

      <View style={styles.buttonsContainer}>
        {['ko', 'en', 'es', 'ja', 'zh'].map((country) => (
          <MyButton 
            key={country}
            onPress={() => {}}
            isSelected={country === locale}
            text={country.toUpperCase()}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

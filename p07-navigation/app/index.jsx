import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import ScreenA from '@/pages/ScreenA';
// import ScreenB from '@/pages/ScreenB';

const Stack = createNativeStackNavigator();

function ScreenA() {
  return (
    <View>
      <Text>Screen A</Text>
    </View>
  );
}

function ScreenB() {
  return (
    <View>
      <Text>Screen B</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

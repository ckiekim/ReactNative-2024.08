// import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function LoadingView() {
  // const ref = useRef(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current?.play();
  //   }, 2000);
  // }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView
        autoPlay
        // ref={ref}
        style={{ width: 200, height: 200, }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/images/loading.json')}
      />
    </View>
  )
}
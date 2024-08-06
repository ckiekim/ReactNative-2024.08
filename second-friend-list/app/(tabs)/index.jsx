import { Image, StyleSheet, View, Text } from 'react-native';
import Header from '@/components/Header';
import MyProfile from '@/components/MyProfile';
import Margin from '@/components/Margin';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


const Division = () => {
  return (<Text>Division</Text>);
};
const FriendSection = () => {
  return (<Text>FriendSection</Text>);
};
const FriendList = () => {
  return (<View style={{gap: 3}}>
    <Profile 
      name='지원' size={30} 
      uri='https://res.cloudinary.com/dqullcaz5/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1715585949/lk2kg2emjvofmkj8tn2n.jpg'
    />
    <Profile 
      name='수현' size={30} 
      uri='https://res.cloudinary.com/dqullcaz5/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1715582288/ej1xmlsz9iin4bqge8rd.png'
    />
    <Profile 
      name='쯔양' size={30} 
      uri='https://res.cloudinary.com/dqullcaz5/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1715929313/brbq4nw16eaizyfcvre0.jpg'
    />
  </View>);
};
const Profile = ({name, size, uri}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image 
        source={{uri: uri}} 
        style={{width: size, height: size, borderRadius: 5, marginRight: 5}}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
        <Header />
        <Margin height={10} />
        <MyProfile />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

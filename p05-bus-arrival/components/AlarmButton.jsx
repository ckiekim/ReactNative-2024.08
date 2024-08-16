import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLOR } from '../constants/color';

export default function AlarmButton({ onPressAlarm, style }) {
  return (
    <TouchableOpacity onPress={onPressAlarm} style={style}>
      <Ionicons 
        name="alarm-outline" 
        size={24} 
        color={COLOR.GRAY_3} 
      />
    </TouchableOpacity>
  );
}
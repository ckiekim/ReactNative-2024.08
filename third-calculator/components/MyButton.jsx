import { Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '@/constants/color';

export default function MyButton({ text, onPress, flex, type }) {
  const backgroundColor = type === 'reset' ? COLOR.RESET :
                            type === 'operator' ? COLOR.OPERATOR :
                              type === 'num' ? COLOR.NUM : 'transparent';
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{ 
        flex,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 0.2,
        borderColor: 'black'
      }}
    >
      <Text style={{ color: 'white', fontSize: 24 }}>{text}</Text>
    </TouchableOpacity>
  )
}
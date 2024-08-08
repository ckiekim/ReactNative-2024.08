import { Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '@/constants/color';

export default function MyButton({ text, onPress, flex, type, isSelected }) {
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
        borderWidth: isSelected ? 1 : 0.2,
        borderColor: 'black'
      }}
    >
      <Text style={{ color: 'white', fontSize: 24 }}>{text}</Text>
    </TouchableOpacity>
  )
}
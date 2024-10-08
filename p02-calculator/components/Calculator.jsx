import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import MyButton from './MyButton';
import useCalculator from '@/hooks/useCalculator';
import { COLOR } from '@/constants/color';

const ButtonContainer = styled.View`
  flex-direction: row; width: 100%;
`;
const InputContainer = styled.View`
  background-color: ${COLOR.RESULT}; min-height: 50px;
  border-width: 0.2px; border-color: black;
  justify-content: center; align-items: flex-end;
  padding: 5px 10px;
`;

export default function Calculator() {
  const [debugMode, setDebugMode] = useState(false);
  const {
    input, currentOperator, result, tempInput, tempOperator, hasInput, equalClicked,
    onPressNum, onPressOperator, onPressReset
  } = useCalculator();

  return (
    <View style={{ flex: 1, width: '70%' }}>
      <InputContainer>
        <Text style={{ color: 'white', fontSize: 28, textAlign: 'right' }}>
          {input}
        </Text>
      </InputContainer>
      <ButtonContainer>
        <MyButton type="reset" text={hasInput && !equalClicked ? 'C' : 'AC'} onPress={onPressReset} flex={3} />
        <MyButton type="operator" text="÷" onPress={() => onPressOperator('/')} 
          flex={1} isSelected={currentOperator === '/'} />
      </ButtonContainer>
      <ButtonContainer>
        {[7, 8, 9].map(num => (
          <MyButton key={num} type="num" text={num} onPress={() => onPressNum(String(num))} flex={1} />
        ))}
        {/* <MyButton type="num" text="7" onPress={() => null} flex={1} />    // Refactoring
        <MyButton type="num" text="8" onPress={() => null} flex={1} />
        <MyButton type="num" text="9" onPress={() => null} flex={1} /> */}
        <MyButton type="operator" text="×" onPress={() => onPressOperator('*')} 
          flex={1} isSelected={currentOperator === '*'} />
      </ButtonContainer>
      <ButtonContainer>
        {[4, 5, 6].map(num => (
          <MyButton key={num} type="num" text={num} onPress={() => onPressNum(String(num))} flex={1} />
        ))}
        <MyButton type="operator" text="-" onPress={() => onPressOperator('-')} 
          flex={1} isSelected={currentOperator === '-'} />
      </ButtonContainer>
      <ButtonContainer>
        {[1, 2, 3].map(num => (
          <MyButton key={num} type="num" text={num} onPress={() => onPressNum(String(num))} 
            flex={1} isSelected={currentOperator === '+'} />
        ))}
        <MyButton type="operator" text="+" onPress={() => onPressOperator('+')} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <MyButton type="num" text="0" onPress={() => onPressNum('0')} flex={2} />
        <MyButton type="operator" text="=" onPress={() => onPressOperator('=')} flex={2} />
      </ButtonContainer>

      {debugMode && <View style={{ marginTop: 20 }} >
        <Text>input: {input}</Text>
        <Text>currentOperator: {currentOperator}</Text>
        <Text>result: {result}</Text>
        <Text>tempInput: {tempInput}</Text>
        <Text>tempOperator: {tempOperator}</Text>
      </View>}
      <TouchableOpacity
        onPress={() => {setDebugMode(!debugMode)}}
        style={{ marginTop: 20 }}
      >
        <Text>디버그 모드 {debugMode ? 'OFF' : 'ON'}</Text>
      </TouchableOpacity>
    </View>
  );
}
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import MyButton from './MyButton';
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
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);
  const [equalClicked, setEqualClicked] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const hasInput = !!input;     // input ? true : false;

  const onPressNum = (num) => {
    setEqualClicked(false);
    if (!currentOperator) {
      const newInput = `${input}${num}`;
      setInput(Number(newInput));
    } else {
      setInput(num);
      setTempOperator(currentOperator);
      setCurrentOperator(null);
    }
  }
  const onPressOperator = (op) => {
    if (op !== '=') {
      setEqualClicked(false);
      setCurrentOperator(op);
      setTempInput(input);
    } else {
      let value = eval(`${tempInput} ${tempOperator} ${input}`);
      if (equalClicked) {
        value = eval(`${input} ${tempOperator} ${tempInput}`);
      } else {
        setTempInput(input);
        setEqualClicked(true);
      }
      setResult(value);
      setInput(value);
    }
  }
  const onPressReset = () => {
    setInput(0); 
    if (!hasInput || equalClicked) {
      setTempInput(0); setCurrentOperator(null); setTempOperator(null); 
      setResult(null); setEqualClicked(false);
    }
  }

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
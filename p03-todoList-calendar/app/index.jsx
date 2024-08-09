import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import dayjs from 'dayjs';

import CalendarForm from '@/components/CalendarForm';
import useCalendar from '@/hooks/use-calendar';
import useTodoList from '@/hooks/use-todo-list';

const statusBarHeight = getStatusBarHeight(true);     // 내 안드로이드 폰에서는 23.2157

export default function HomeScreen() {
  const {
    selectedDate, isDatePickerVisible, setSelectedDate,
    showDatePicker, hideDatePicker, handleConfirm, onPressLeftArrow, onPressRightArrow,
  } = useCalendar();
  const {
    input, setInput, todoList, addTodo, removeTodo, toggleTodo
  } = useTodoList(selectedDate);
  const ListHeaderComponent = () => (
    <CalendarForm 
      selectedDate={selectedDate} 
      setSelectedDate={setSelectedDate} 
      onPressLeftArrow={onPressLeftArrow} 
      showDatePicker={showDatePicker} 
      onPressRightArrow={onPressRightArrow}
    />
  );

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?t=st=1723167237~exp=1723170837~hmac=49b8b76b475c487b5b412eb9d42c247ab444e2df9f4e1fde2b55afff5058b5e4&w=1060"}} 
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      />
      <FlatList
        data={todoList}
        keyExtractor={item => `todo-${item.id}`}
        renderItem={({ item: todo }) => {
          return (
            <Text>{todo.content}</Text>
          )
        }}
        ListHeaderComponent={ListHeaderComponent}
      />
      <View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
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

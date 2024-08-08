import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from '@expo/vector-icons/Ionicons';
import dayjs from 'dayjs';
import CalendarColumn from './CalendarColumn';
import Margin from './Margin';
import { getCalendarColumns } from '@/utils/calendar-util';

const dayColors = ['#e67639', '#2b2b2b', '#2b2b2b', '#2b2b2b', '#2b2b2b', '#2b2b2b', '#5872d1'];
const dayTexts = '일월화수목금토'.split('');

export default function CalendarForm() {
  const now = dayjs();
  const [selectedDate, setSelectedDate] = useState(now);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const columns = getCalendarColumns(selectedDate);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    // console.log("A date has been picked: ", date);
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };

  const renderItems = ({ item: date }) => {
    const dateText = dayjs(date).get('date');
    const day = dayjs(date).get('day');
    const isCurrentMonth = dayjs(date).isSame(selectedDate, 'month');
    return (
      <CalendarColumn 
        text={dateText} color={dayColors[day]} 
        opacity={isCurrentMonth ? 1 : 0.4} 
        onPress={() => setSelectedDate(date)}
        isSelected={dayjs(date).isSame(selectedDate, 'date')}
      />
    )
  };
  const ListHeaderComponent = () => (
    <View>
      <Margin height={20} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ padding: 6 }}
          onPress={() => {setSelectedDate(dayjs(selectedDate).subtract(1, 'month'))}}
        >
          <Ionicons name="chevron-back" size={28} color="#404040" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={{ fontSize: 20, color: '#404040' }}>
            {dayjs(selectedDate).format('YYYY-MM-DD')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 6 }}
          onPress={() => {setSelectedDate(dayjs(selectedDate).add(1, 'month'))}}
        >
          <Ionicons name="chevron-forward" size={28} color="#404040" />
        </TouchableOpacity>
      </View>
      <Margin height={10} />
      <View style={{ flexDirection: 'row' }}>
        {[0, 1, 2, 3, 4, 5, 6].map(day => (
          <CalendarColumn key={`day-${day}`} text={dayTexts[day]} color={dayColors[day]} opacity={1} disabled />
        ))}
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={columns}
        keyExtractor={(_, index) => `column-${index}`}
        numColumns={7}
        renderItem={renderItems}
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
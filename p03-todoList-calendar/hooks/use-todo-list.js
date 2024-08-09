import { useState } from 'react';
import dayjs from 'dayjs';
import { defaultTodoList } from '../assets/data/mock-todo-list';


export default function useTodoList(selectedDate) {
  const [todoList, setTodoList] = useState(defaultTodoList);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const len = todoList.length;
    const lastId = len === 0 ? 0 : todoList[len - 1].id;
    const newTodoList = [
      ...todoList, 
      { id: lastId + 1, content: input, date: selectedDate, isSuccess: false }
    ];
    setTodoList(newTodoList);
  }
  const removeTodo = (todoId) => {
    const newTodoList = todoList.filter(todo => todo.id !== todoId);
    setTodoList(newTodoList);
  }
  const toggleTodo = (todoId) => {
    const newTodoList = todoList.map(todo => {
      if (todo.id !== todoId)
        return todo;
      return {
        ...todo, isSuccess: !todo.isSuccess
      };
    });
    setTodoList(newTodoList);
  }

  return {
    input, setInput,
    todoList,   //: todoList.filter(todo => dayjs(selectedDate).isSame(todo.date, 'date')),
    addTodo, removeTodo, toggleTodo
  }
}
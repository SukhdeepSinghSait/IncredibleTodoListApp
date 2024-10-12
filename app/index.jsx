import { View, Text } from 'react-native';
import React from 'react';
import App from './app.jsx';
import ToDoList from '../components/lab2/ToDoList.jsx';
import ToDoForm from '../components/lab2/ToDoForm.jsx';

const Index = () => {
  return (
    <View>
        <ToDoList />
        <ToDoForm />
    </View>
  )
}


export default Index;
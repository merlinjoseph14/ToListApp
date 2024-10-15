import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
    return (
      <SafeAreaView style={StyleSheet.container}>
        <Text>Welcome to the ToDoList App</Text>
        <ScrollView>
          <ToDoList />
          <ToDoForm />
        </ScrollView>
        
      </SafeAreaView>
    );
      
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },  
  });
  export default App;
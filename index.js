import { View, Text } from 'react-native'
import React from 'react'

//parent function
const Index = () => {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems: "center"}}>
      <Text style={{fontSize:40,backgroundColor:"green"}}>
        this is my parent component
        </Text>
        <Fruit>
        </Fruit>
    </View>
  )
}
export default Index;

//child function
const Fruit=() => {
    return (
        <View>
            <text style={{fontSize: 40, backgroundColor: "green"}}>  
            this is my child component
            </text>
        </View>
    )
}

const Empdata=()=>{
    const name = "John";
    const id = "EMP001";
    const email = "johngmail.com";
    return(
        <View>
            <Text style={{fontSize: 40, backgroundColor: "blue"}}>Emp Name:{name}</Text>
            <Text style={{fontSize: 40, backgroundColor: "blue"}}>Emp Id:{id}</Text>
            <Text style={{fontSize: 40, backgroundColor: "blue"}}>Emp Email:{email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

const Cust_props1=()=>{
    return (
        <View>
          <Childcomponent name="john" age={40}/>
        </View>
      );
}

const Custstate=()=>{
    return (
        <View>
          <Childcomponent name="john" age={40}/>
        </View>
      );
};
//rnfes
import { StyleSheet, Text, View, Button } from 'react-native'; //since we are using Button make sure Button is called
import React, {useState} from 'react'; //useState reads value and update the value. useState is a good way to track the value status

const Custstate = () => {
    const [name,setName]=useState("John"); //name is readable value, setName is updatable value
    const [counter,setCounter]=useState(0);
    const [color,setColor]=useState("Red");
    const [person,setPerson]=useState({
        name:"shaun", 
        age:45, 
        location:"Calgary"
    });
    const Handlepress= () => {
        setName("Steven");
        setColor("Yellow");
        setPerson({
            name:"newname", 
            age: 12, 
            location: "newyork"
        });
    };

    return (
        <View>
        <Text>State Examples</Text>
        <Text style={{fontSize: 21}}>Name is: {name}</Text>
        <Text style={{fontSize: 21}}>Color: {color}</Text>
        <Text>
            {person.name}
            {person.age}
            {person.location}
        </Text>
        <Button title="StateUpdate" onPress={Handlepress}></Button> {/*HandlePress is function that is updating the name and color as established earlier*/}
        <Button title="increment" onPress={()=> setCounter(counter + 1)}></Button>
        <Text>{counter}</Text>
        </View>
  );
};

export default Custstate;

const styles = StyleSheet.create({})
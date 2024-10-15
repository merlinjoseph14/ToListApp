//rnfe
import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

//parent component
const Cust_props1 = () => {
    const items=["Go to Home", "Lets play", "Chess", "Tiktok","Shopping mall"]; //for array, array index starts at 0
    const user={name:"John Doe", age:40, Location:"New York"} //passing user an object
  return (
    <View>
      <Childcomponent name="john" age={40}/> {/*name and age are props*/}
      <Child2 
        title="Increment" 
        count={5} 
        onsubmit={()=>alert("Button clicked")}
        ></Child2>
    <Childarray items={items}></Childarray>
    <ChildObject user={user}></ChildObject> {/*here the prop user has name, age, location*/}
    </View>
  );
};

export default Cust_props1; //in every file we can only have one parent component = one export 

//we use child component when our data is dynamic
//child component = everything in this compoennt will be rendered on the screen
// or const Childcomponent=({props})=>{
    //<Text>{props.name}</Text>
const Childcomponent=({name, age})=>{
    return(
        <View>
            <Text style={{color:"brown",fontSize:26}}>
                The name is: {name}
                and the age is {age}
            </Text>
        </View>
    );
};

const Child2=({title, count, onsubmit})=>{
    return (
        //touchableopacity=effect when touching the button (stops when button released). this makes sense for mobile devices
        <TouchableOpacity 
            style={{
                backgroundColor:"blue", 
                padding:10, 
                borderRadius:5, 
                width:100
            }}
            {/*we call onsubmit because it is a touchable event/props*/}
            onPress={onsubmit}
            >
            {/*call on the props we estbalished within the parent component*/}
            <Text>
                {title}
                {count}
            </Text>     
        </TouchableOpacity>
    );
};

//parent component passes array to the child component renders using array as a props
const Childarray=({items})=>{
    return(
        <View>
            {items.map((item,index)=> (
            <Text style={{fontSize:16, color:"coral"}}key={index}>
                the element: {item} is places at
                {index} location
            </Text>
            ))}
        </View>
    );
};

//pass an object as a prop and access it props as component in the child
const ChildObject=({user})=>{S
    return(
        <View>
            <Text>name: {user.name}</Text>
            <Text>age: {user.age}</Text>
            <Text>location: {user.Location}</Text>
        </View>
    );
};
 //rnfe
 
 import { View, Text } from 'react-native'
 import React from 'react'
 import { Stack } from 'expo-router';
 
 const _layout = () => {
   return (
     <Stack>
        <Stack.Screen name="index" options={{
            title:'Mainscreen', 
            headerStyle:{
                backgroungColor: "coral",
                headTintColor: "#357482", 
                headerTitleStyle: {fontWeight: "bold"}}
            }}/> {/*first screen is index screen*/}
        <Stack.Screen name="(tabs)" options={{title:'Mainscreen'}}/> {/*second screen is undefined*/}
     </Stack>
   );
 };
 
 export default _layout
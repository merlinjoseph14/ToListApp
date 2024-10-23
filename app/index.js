import { Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { Link } from "expo-router";

const Index = () => {
  const navigator=useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "centre"}}>
      <Text style={{ fontSize: 26, fontWeight: "bold"}}>LoginScreen</Text>
      <Link href="/home">Go to Tabs</Link> {/*linking to the url*/}
      <Button 
        title="Login" 
        onPress={()=>navigator.navigate("(tabs)")}>
      </Button>
    </View>
  );
};
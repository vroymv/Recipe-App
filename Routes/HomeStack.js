import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home";
import DetailsScreen from "./Details";
import Categories from "./Categories";
import Ingredients from "./Ingredients";


const Stack = createNativeStackNavigator();

function HomeStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Details" component={DetailsScreen}  />
      <Stack.Screen name="Category" component={Categories}  />
      <Stack.Screen name="Ingredients" component={Ingredients}  />
    </Stack.Navigator>
  );
}

export default HomeStack;

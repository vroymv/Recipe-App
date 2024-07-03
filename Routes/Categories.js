import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "twrnc";
import CatCard from "../Components/CatCard";
import { Ionicons } from "@expo/vector-icons";

const photo = require("../assets/Images/food.jpeg");

function Categories({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={tw`flex-row items-center`} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="#2072e6" />
          <Text style={tw`text-[#2072e6] text-xl`}>Home</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={tw`p-2 flex-1 flex-col gap-3 bg-[#ffffff]`}>
      <CatCard imgSrc={photo} name={"Coookies"} category={"4 recipes"} />
      <CatCard imgSrc={photo} name={"Coookies"} category={"4 recipes"} />
      <CatCard imgSrc={photo} name={"Coookies"} category={"4 recipes"} />
    </View>
  );
}

export default Categories;

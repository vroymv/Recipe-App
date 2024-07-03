import React from "react";
import { Pressable, Text, Image } from "react-native";
import tw from "twrnc";

function Card({ imgSrc, name, category, ingredients, time, navigation }) {
  function NavToDetails() {
    navigation.navigate("Details", {
      imgSrc: imgSrc,
      name: name,
      category: category,
      ingredients: ingredients,
      time: time,
    });
  }

  return (
    <Pressable
      onPress={NavToDetails}
      style={tw`w-41 border-2 border-[#d9dbda] m-2 rounded-2xl bg-[#fafafa]`}
    >
      <Image
        source={{ uri: imgSrc }}
        style={{
          ...tw`w-40 h-40 rounded-xl`,
          resizeMode: "cover",
          objectFit: "cover",
        }}
      />
      <Text style={tw`text-center font-bold mt-2`}>{name}</Text>
      <Text style={tw`text-center mt-4`}>{category}</Text>
    </Pressable>
  );
}

export default Card;

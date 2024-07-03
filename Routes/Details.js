import React, { useEffect, useState } from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Down, Up } from "../assets/icons";

const photo = require("../assets/Images/shake.jpeg");

function DetailsScreen({ route, navigation }) {
  const [accordianVisibility, setAccordianVisibility] = useState(false);

  const { imgSrc, name, category, time, ingredients } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={tw`flex-1 `}>
      <Image
        source={{
          uri: imgSrc,
        }}
        style={tw`w-full h-1/2`}
      />
      <Pressable
        style={tw`absolute top-15 left-5`}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="leftcircle" size={24} color="black" />
      </Pressable>

      <ScrollView style={tw`flex-1 flex-col mb-6`}>
        <View style={tw`flex items-center`}>
          <Text style={tw`text-2xl font-bold mt-5`}>{name}</Text>
          <Text style={tw`text-[#43e082] font-bold my-2`}>{category}</Text>
          <Text style={tw`font-bold`}>⏱️{time} minutes</Text>
          <Pressable
            onPress={() => setAccordianVisibility(!accordianVisibility)}
            style={tw`border-2 mt-2 px-10 pt-5 pb-2 rounded-full items-center`}
          >
            <Text style={tw``}>View Ingredients</Text>
            <Image
              style={tw`w-[20px] h-[20px]`}
              source={accordianVisibility ? Up : Down}
            />
          </Pressable>
        </View>

        {accordianVisibility
          ? ingredients.map((ingredient, index) => {
              return (
                <Text style={tw`pl-8 w-full text-lg mt-4`} key={index}>
                  💧
                  {ingredient}
                </Text>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
}

export default DetailsScreen;

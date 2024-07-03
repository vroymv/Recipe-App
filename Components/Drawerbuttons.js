import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";

function Drawerbutton({ imgSrc, label, navigation }) {
  
  return (
      <Pressable
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate(label);
        }}
        style={tw`flex-row gap-2 items-center bg-[#dfe6df] w-[240px] p-2 rounded-lg`}
      >
        <Image source={imgSrc} style={tw`w-24px h-24px`} />
        <Text>{label}</Text>
      </Pressable>
  );
}

export default Drawerbutton;

import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import Drawerbutton from "../../Components/Drawerbuttons";

function DrawerContaner({ navigation }) {
  return (
    <SafeAreaView style={tw`flex-1 justify-start items-center`}>
      <View style={tw`w-full items-center rounded-40`}>
        <Image
          source={require("../../assets/icon.png")}
          style={tw`w-[100px] h-[100px] rounded-full`}
        />
        <Text style={tw`text-xl text-center`}>Recipe App</Text>
      </View>
      <View style={tw`flex-col gap-2 p-5`}>
        <Drawerbutton
          navigation={navigation}
          imgSrc={require("../../assets/icons/home.png")}
          label="Home"
        />
        <Drawerbutton
          navigation={navigation}
          imgSrc={require("../../assets/icons/category.png")}
          label="Category"
        />
      </View>
    </SafeAreaView>
  );
}

export default DrawerContaner;

import React, { useEffect, useState } from "react";
import { Text, View, Pressable, FlatList } from "react-native";
import tw from "twrnc";
import Card from "../Components/Card";
import { AntDesign } from "@expo/vector-icons";
import { getRecepes } from "../api/index";

const photo = require("../assets/Images/food.jpeg");

function HomeScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={tw`flex-row items-center`}
          onPress={() => navigation.openDrawer()}
        >
          <AntDesign name="menuunfold" size={24} color="black" />
        </Pressable>
      ),
    });

    async function fetchRecipes(params) {
      try {
        const recipesss = await getRecepes();
        setRecipes(recipesss);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRecipes();
  }, []);

  // console.log(recipes[0].recipe.label);

  return (
    <View style={tw`p-2 flex flex-1 items-center justify-center bg-[#ffffff]`}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <Card
            navigation={navigation}
            imgSrc={item?.recipe?.image}
            name={item?.recipe?.label}
            category={item?.recipe?.source}
            time={item?.recipe?.totalTime}
            ingredients={item?.recipe?.ingredientLines}
            title="Food"
          />
        )}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={tw`mx-auto`}
      />
    </View>
  );
}

export default HomeScreen;

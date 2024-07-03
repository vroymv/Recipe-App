import React from 'react';
import { Text, Image, View } from 'react-native';
import tw from 'twrnc';
import IngredientCard from '../Components/IngredientCard';

const photo = require('../assets/Images/oil.webp')

function Ingredients() {
  return (
        <View style={tw`flex-1 flex-row flex-wrap justify-center bg-white px-1 pt-6`}>
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
            <IngredientCard imgSrc={photo} label="Oil" quantity="2 tablespoons" />
        </View>
  )
}

export default Ingredients
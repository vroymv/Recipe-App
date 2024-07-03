import React from 'react';
import {Text, View, Image} from 'react-native';
import tw from 'twrnc';


function IngredientCard({imgSrc, label, quantity}) {
  return (
    <View style={tw`flex w-30 my-4 items-center`}>
        <Image source={imgSrc} style={tw`w-30 h-25`} />
        <Text style={tw`font-medium mt-2`}>{label}</Text>
        <Text style={tw`font-thin`}>{quantity}</Text>
    </View>
  )
}

export default IngredientCard
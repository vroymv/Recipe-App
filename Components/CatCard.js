import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';



function CatCard({imgSrc, name, category}) {
  return (
    <View style={tw`border-2 border-[#d9dbda] rounded-3xl bg-[#fafafa]`}>
        <Image source={imgSrc} style={{...tw`w-full h-40 rounded-2xl`,resizeMode: 'cover', objectFit: 'cover'}}/>
        <Text style={tw`text-center font-bold text-lg mt-2`}>{name}</Text>
        <Text style={tw`text-center mt-3`}>{category}</Text>
    </View>
  )
}

export default CatCard
import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const SearchButton=({title,imgSource}) =>{
  return (
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
     <TouchableOpacity style={{width:'20%',height:26,backgroundColor:'#5FBDC5'}}>
     <Image style={styles.buttonImage} source={imageSource} />
        <Text>{title}</Text>
     </TouchableOpacity>
    </View>
  )
};
export default SearchButton;
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Categories=({img,name,onPress})=> {
  return (
    <View>
     <View>
        <TouchableOpacity onPress={onPress}>
            <Image style={{width:120,height:120,borderRadius:20}} source={img}/>
        </TouchableOpacity>
     </View>
     <View style={{alignItems:'center',width:120}}>
        <Text style={{fontSize:14,marginTop:10,color:'#073059',fontFamily:'Poppins-Medium'}}>{name}</Text>
     </View>
    </View>
  )
};
const styles=StyleSheet.create({});
export default Categories;

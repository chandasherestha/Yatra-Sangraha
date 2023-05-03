import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const Interest = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    backgroundColor: '#5FBDC5',
    height: 30,
    marginTop: 10,
    borderRadius: 16,alignItems:'center',
  },

  text: {fontFamily: 'Poppins-Medium', color: '#fff',marginLeft:10,marginRight:10,marginTop:3},
});
export default Interest;

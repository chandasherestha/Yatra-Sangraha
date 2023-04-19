 import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
 import React from 'react'
 
 const Button = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2866AB',
    borderRadius: 10,
    width:'90%',
    height:60,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  fontFamily:'Poppins-Medium',
    paddingTop:15,
  },
});

  export default Button;
  
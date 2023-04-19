import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

const MyButton = ({ onPress, imageSource, buttonText, isOdd }) => {
  const buttonColor = isOdd ? '#fff' : '#fff';
  const textColor = isOdd ? '#5FBDC5' : '#2866AB';

  return (
    <View style={[styles.item, { backgroundColor: buttonColor }]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image style={styles.image} source={imageSource} />
        <Text style={[styles.text, { color: textColor }]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 5,marginLeft:10
  },
  image: {
    marginRight: 8,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  item: {
    width: '25%',
    height: 100,
    marginTop: 10,
   
  },
});

export default MyButton;

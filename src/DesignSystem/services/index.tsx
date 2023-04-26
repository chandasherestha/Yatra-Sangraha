import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const Services = ({imgSource, title}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.button}>
          <Image source={imgSource} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 62,
    height: 62,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {alignSelf: 'center', marginTop: 15},
  title: {
    marginTop: 5,
    color: '#576874',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    width: 62,
  },
});
export default Services;

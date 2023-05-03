import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';

const Places = ({imgSource, title, rating,onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
      <Image style={styles.img} source={imgSource} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rate}>
        <Icon name="star" size={25} color="#FFD700" />
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '30%'},
  img: {width: '100%', height: 120, borderRadius: 20},
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: 10,
    color: '#073059',
  },
  rate: {flexDirection: 'row', marginTop: 5},
  rating: {
    fontFamily: 'Poppins-Medium',
    color: '#6C7B85',
    fontSize: 14,
    marginLeft: 5,
  },
});
export default Places;

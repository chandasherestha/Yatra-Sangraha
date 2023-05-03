import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';

const BookingButton = ({
  imgSource,
  title,
  details,
  icon,
  rating,
  size,
  color,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={imgSource} style={styles.imgStyle} />
      </View>
      <View style={styles.text}>
        <Text style={styles.hotelName}>{title}</Text>
        <Text style={styles.detail}>{details}</Text>
        <View style={styles.ratingContainer}>
          <Icon name={icon} size={size} color={color} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flexDirection: 'row',marginTop:20,width:'100%',justifyContent:'space-between'},
  image: {width: '30%'},
  imgStyle: {borderRadius: 20, height: 130},
  text: {width: '65%'},
  hotelName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#2866AB',
  },
  detail: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#6C7B85',
  },
  ratingContainer: {flexDirection: 'row'},
  rating: {
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  }, 
});
export default BookingButton;

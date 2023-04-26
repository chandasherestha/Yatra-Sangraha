import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const SearchHotel = ({
  imgSource,
  hotelname,
  icon,
  size,
  color,
  rating,
  price,
  day,
  review,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={imgSource} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.detail}>
        <View style={styles.hotelDetail}>
          <Text style={styles.hotelName}>{hotelname}</Text>
          <View style={styles.ratingSection}>
            <Icon name={icon} size={size} color={color} />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>
        <View style={styles.priceRange}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.day}>{day}</Text>
        </View>

        <View>
          <Text style={styles.review}>{review}</Text>
        </View>
      </View>
    </View>
  );
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

const styles = StyleSheet.create({
  container: {marginTop: 20},
  image: {height: 180, borderRadius: 20,width:'100%'},
  hotelName: {fontFamily: 'Poppins-SemiBold', color: '#2866AB', fontSize: 14},
  detail: {marginTop: 12},
  hotelDetail: {flexDirection: 'row', justifyContent: 'space-between'},
  rating: {
    fontFamily: 'Poppins-Regular',
    color: '#6C7B85',
    paddingLeft: 10,
    fontSize: 12,
    paddingTop:8
  },
  ratingSection: {flexDirection: 'row'},
  priceRange: {flexDirection: 'row'},
  price: {fontFamily: 'Poppins-SemiBold', color: '#5FBDC5'},
  day: {fontFamily: 'Poppind-Regular', marginLeft: 10, color: '#6C7B85'},
  review:{fontFamily:'Poppins-Regular',fontSize:12,color:'#6C7B85'}
});

export default SearchHotel;

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {BookingButton} from '../DesignSystem';
import Icon from 'react-native-vector-icons/Foundation';

const Booking = () => {
  const hotel = [
    {
      imgSource: require('../../assets/hotel1.png'),
      title: 'Namabuddha Hotel, Kavre',
      details:
        'Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa Namobuddha in the Himalaya mountains',
      icon: 'star',
      size: 20,
      color: '#FFD700',
      rating: 'Rating 4.0',
    },
    {
      imgSource: require('../../assets/hotel1.png'),
      title: 'Namabuddha Hotel, Kavre',
      details:
        'Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa Namobuddha in the Himalaya mountains',
      icon: 'star',
      size: 20,
      color: '#FFD700',
      rating: 'Rating 4.0',
    },
    {
      imgSource: require('../../assets/hotel1.png'),
      title: 'Namabuddha Hotel, Kavre',
      details:
        'Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa Namobuddha in the Himalaya mountains',
      icon: 'star',
      size: 20,
      color: '#FFD700',
      rating: 'Rating 4.0',
    },
    {
      imgSource: require('../../assets/hotel1.png'),
      title: 'Namabuddha Hotel, Kavre',
      details:
        'Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa Namobuddha in the Himalaya mountains',
      icon: 'star',
      size: 20,
      color: '#FFD700',
      rating: 'Rating 4.0',
    },
    {
      imgSource: require('../../assets/hotel1.png'),
      title: 'Namabuddha Hotel, Kavre',
      details:
        'Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa Namobuddha in the Himalaya mountains',
      icon: 'star',
      size: 20,
      color: '#FFD700',
      rating: 'Rating 4.0',
    },
    {
      imgSource: require('../../assets/hotel1.png'),
      title: 'Namabuddha Hotel, Kavre',
      details:
        'Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa Namobuddha in the Himalaya mountains',
      icon: 'star',
      size: 20,
      color: '#FFD700',
      rating: 'Rating 4.0',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.pageTitle}>Bookings</Text>
        </View>
        <View>
          {hotel.map((hotel, index) => (
            <BookingButton
              key={index}
              imgSource={hotel.imgSource}
              title={hotel.title}
              details={hotel.details}
              icon={hotel.icon}
              size={hotel.size}
              color={hotel.color}
              rating={hotel.rating}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  pageTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#073059',
  },
});
export default Booking;

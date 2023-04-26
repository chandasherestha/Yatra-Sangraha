import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from '../DesignSystem';
import {SearchHotel} from '../DesignSystem';
import Button from '../DesignSystem/button/index.tsx';
import HotelDetails from '../hoteldetails';

const Map = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    // handle search logic here
  };
  const hotel = [
    {
      imgSource: require('../../assets/hotelRoom.png'),
      hotelname: 'The Himalayan Hotel',
      icon: 'star',
      size: 30,
      color: '#f1c40f',
      rating: 'Rating 4.0',
      price: '$200',
      day: 'Per Night',
      review: '120 Reviews',
    },
    {
      imgSource: require('../../assets/hotelRoom.png'),
      hotelname: 'The Himalayan Hotel',
      icon: 'star',
      size: 30,
      color: '#f1c40f',
      rating: 'Rating 4.0',
      price: '$200',
      day: 'Per Night',
      review: '120 Reviews',
    },
    {
      imgSource: require('../../assets/hotelRoom.png'),
      hotelname: 'The Himalayan Hotel',
      icon: 'star',
      size: 30,
      color: '#f1c40f',
      rating: 'Rating 4.0',
      price: '$200',
      day: 'Per Night',
      review: '120 Reviews',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar
            placeholder="Search for Hotels"
            onChangeText={handleSearch}
          />
        </View>
        <View>
          {hotel.map((hotel, index) => (
            <View key={index}>
              <SearchHotel
                imgSource={hotel.imgSource}
                hotelname={hotel.hotelname}
                icon={hotel.icon}
                size={hotel.size}
                color={hotel.color}
                rating={hotel.rating}
                price={hotel.price}
                day={hotel.day}
                review={hotel.review}
              />

              <View style={{marginTop: 10}}>
                <Button title={'Boook Now'} onPress={()=>navigation.navigate('HotelDetails')} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
});
export default Map;

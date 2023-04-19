import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {PopularButton, SearchBar} from '../DesignSystem';
import MyButton from '../DesignSystem/category/Category';
import HotelCard from '../DesignSystem/hotelcard/HotelCard';


const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    // handle search logic here
  };
  const data = [
    {
      id: 1,
      imageSource: require('../../assets/Vector1.png'),
      buttonText: 'Popular',
    },
    {
      id: 2,
      imageSource: require('../../assets/Vector2.png'),
      buttonText: 'Popular',
    },
    {
      id: 3,
      imageSource: require('../../assets/Vector1.png'),
      buttonText: 'Popular',
    },
    {
      id: 4,
      imageSource: require('../../assets/Vector2.png'),
      buttonText: 'Popular',
    },
  ];
  const popularButtons = [
    {imageSource: require('../../assets/popular1.png'), text: 'Annapurna'},
    {imageSource: require('../../assets/popular2.png'), text: 'Langtang'},
    {imageSource: require('../../assets/popular3.png'), text: 'Everest'},
  ];
  const hotel = [
    {
      imageSource: require('../../assets/hotel1.png'),
      title: 'The Himalayan Hotel',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'star',
      iconSize: '20',
      imageSource: require('../../assets/hotel1.png'),
      title: 'The Himalayan Hotel',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'star',
      iconSize: 20,
    },
    {
      imageSource: require('../../assets/hotel1.png'),
      title: 'The Himalayan Hotel',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'star',
      iconSize: '20',
      imageSource: require('../../assets/hotel1.png'),
      title: 'The Himalayan Hotel',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'star',
      iconSize: 20,
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar placeholder="Search" onChangeText={handleSearch} />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Categories</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryList}>
            {data.map((item, index) => (
              <MyButton
                key={index}
                imageSource={item.imageSource}
                buttonText={item.buttonText}
                // onPress={() => console.log(`Pressed ${item.buttonText}`)}
                isOdd={index % 2 === 0 ? false : true}
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.titleIcon}>
          <Image source={require('../../assets/popular.png')} />
          <Text style={styles.textIcon}>Popular</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Image
            source={require('../../assets/card.png')}
            style={styles.card}
          />
          <View style={styles.cardContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/location.png')} />
              <Text style={styles.locationTitle}>Namabuddha Stupa, Kavre</Text>
            </View>
            <View>
              <Text style={styles.locationDescription}>
                Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa
                Namobuddha in the Himalaya mountains
              </Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.popularButtons}>
            {popularButtons.map((buttonProps, index) => (
              <PopularButton key={index} {...buttonProps} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.titleIcon}>
          <Image source={require('../../assets/hotelIcon.png')} />
          <Text style={styles.textIcon}>Hotels</Text>
        </View>
        <View style={{marginTop:20}}>
          {hotel.map((hotel, index) => (
            <HotelCard
              key={index}
              imageSource={hotel.imageSource}
              title={hotel.title}
              subtitle={hotel.subtitle}
              icon={hotel.icon}
              iconSize={hotel.iconSize}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  title: {fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#073059'},
  categoryList: {flexDirection: 'row', justifyContent: 'space-around'},
  titleIcon: {flexDirection: 'row', marginTop: 20},
  textIcon: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#073059',
    marginLeft: 10,
  },
  card: {borderRadius: 20, width: '100%'},
  cardContainer: {position: 'absolute', top: 180, marginLeft: 15},
  locationTitle: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  locationDescription: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Poppinsd-Medium',
    marginLeft: 30,
    lineHeight: 16,
  },
  popularButtons: {flexDirection: 'row', justifyContent: 'space-between'},
});
export default Home;

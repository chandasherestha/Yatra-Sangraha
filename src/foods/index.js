import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SearchBar} from '../DesignSystem';
import {PopularButton} from '../DesignSystem';
import {Categories} from '../DesignSystem';

const Foods = ({navigation}) => {
  const popularButtons = [
    {
      imageSource: require('../../assets/roti.png'),
      text: 'Roti Tarkari with Rice and Curry',
      icon: require('../../assets/foodicon.png'),
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      imageSource: require('../../assets/panipuri.png'),
      text: 'Special Panipuri',
      icon: require('../../assets/foodicon.png'),
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      imageSource: require('../../assets/noodles.png'),
      text: 'Chinses Noodles',
      icon: require('../../assets/foodicon.png'),
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      imageSource: require('../../assets/food1.png'),
      text: 'Everest',
      icon: require('../../assets/foodicon.png'),
      onPress: () => navigation.navigate('FoodDetails'),
    },
  ];
  const categories = [
    {
      img: require('../../assets/food1.png'),
      name: 'Nepali Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/food2.png'),
      name: 'Indian Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/food3.png'),
      name: 'Indian Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/food1.png'),
      name: 'Nepali Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/food2.png'),
      name: 'Indian Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/food3.png'),
      name: 'Indian Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar placeholder="Search for Nepali Foods" />
        </View>
        <View style={styles.titleIcon}>
          <Image source={require('../../assets/foodVector.png')} />
          <Text style={styles.textIcon}>Nepali Authentic Foods </Text>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('FoodDetails')}>
            <Image
              source={require('../../assets/dalbhat.png')}
              style={styles.card}
            />
          </TouchableOpacity>
          <View style={styles.cardContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/foodWhiteLogo.png')} />
              <Text style={styles.foodName}>Nepali Dal Bhat</Text>
            </View>
            <View>
              <Text style={styles.foodDescription}>
                Dal bhat is the national dish of Nepal. It literally means
                'lentils with rice' in Hindi.
              </Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {popularButtons.map((buttonProps, index) => (
              <PopularButton key={index} {...buttonProps} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.titleIcon}>
          <Image source={require('../../assets/foodVector.png')} />
          <Text style={styles.textIcon}>Food Categories </Text>
        </View>
        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {categories.slice(0, 3).map((category, index) => (
              <Categories
                key={index}
                img={category.img}
                name={category.name}
                onPress={category.onPress}
              />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            {categories.slice(3, 6).map((category, index) => (
              <Categories
                key={index}
                img={category.img}
                name={category.name}
                onPress={category.onPress}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  titleIcon: {flexDirection: 'row', marginTop: 20},
  textIcon: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#5FBDC5',
    marginLeft: 10,
  },
  card: {borderRadius: 20, width: '100%'},
  cardContainer: {position: 'absolute', top: 180, marginLeft: 15},
  foodName: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  foodDescription: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    marginLeft: 30,
    lineHeight: 16,
  },
  categoryList: {flexDirection: 'row', justifyContent: 'space-around'},
});
export default Foods;

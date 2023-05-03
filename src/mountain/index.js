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

const Mountain = ({navigation}) => {
  const popularButtons = [
    {
      imageSource: require('../../assets/m1.png'),
      text: 'Upper Mustang Trek',
      icon: require('../../assets/mlogo.png'),
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      imageSource: require('../../assets/m2.png'),
      text: 'SGokyo Lake Trek',
      icon: require('../../assets/mlogo.png'),
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      imageSource: require('../../assets/m3.png'),
      text: 'Dhaulagiri Circuit Trek',
      icon: require('../../assets/mlogo.png'),
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      imageSource: require('../../assets/m4.png'),
      text: 'Upper Mustang Trek',
      icon: require('../../assets/mlogo.png'),
      onPress: () => navigation.navigate('FoodDetails'),
    },
  ];
  const categories = [
    {
      img: require('../../assets/m1.png'),
      name: 'Nepali Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/m2.png'),
      name: 'Indian Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/m3.png'),
      name: 'Indian Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/m4.png'),
      name: 'Nepali Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/m1.png'),
      name: 'Indian Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
    {
      img: require('../../assets/m2.png'),
      name: 'Indian Food',
      onPress: () => navigation.navigate('FoodDetails'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar placeholder="Search" />
        </View>
        <View style={styles.titleIcon}>
          <Image source={require('../../assets/mlogo.png')} />
          <Text style={styles.textIcon}>Mountains </Text>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('FoodDetails')}>
            <Image
              source={require('../../assets/m4.png')}
              style={styles.card}
            />
          </TouchableOpacity>
          <View style={styles.cardContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/mwhite.png')} />
              <Text style={styles.foodName}>Langtang Trek</Text>
            </View>
            <View>
              <Text style={styles.foodDescription}>
                The Langtang trek is a trek with real heart. After having been
                devoid of travelers for a couple of years after the 2015
                earthquake, the trails and guesthouses have been rebuilt, and
                trekkers are back.
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
          <Image source={require('../../assets/mlogo.png')} />
          <Text style={styles.textIcon}>Mountains</Text>
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
    color: '#073059',
    marginLeft: 10,
  },
  card: {borderRadius: 20, width: '100%'},
  cardContainer: {position: 'absolute', bottom:10, marginLeft: 15},
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
export default Mountain;

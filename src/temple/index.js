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

const Temple = ({navigation}) => {
  const popularButtons = [
    {
      imageSource: require('../../assets/temple1.png'),
      text: 'Swayambhunath Temple',
      icon: require('../../assets/blueLocation.png'),
      onPress: () => navigation.navigate(''),
    },
    {
      imageSource: require('../../assets/temple2.png'),
      text: 'Swayambhunath Temple',
      icon: require('../../assets/blueLocation.png'),
      onPress: () => navigation.navigate(''),
    },
    {
      imageSource: require('../../assets/temple3.png'),
      text: 'Swayambhunath Temple',
      icon: require('../../assets/blueLocation.png'),
      onPress: () => navigation.navigate(''),
    },
    {
      imageSource: require('../../assets/temple4.png'),
      text: 'Swayambhunath Temple',
      icon: require('../../assets/blueLocation.png'),
      onPress: () => navigation.navigate(''),
    },
  ];
 
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar placeholder="Search for Temples" />
        </View>
        <View style={styles.titleIcon}>
          <Image source={require('../../assets/templelogo.png')} />
          <Text style={styles.textIcon}>Temple </Text>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image
              source={require('../../assets/temple1.png')}
              style={styles.card}
            />
          </TouchableOpacity>

          <View style={styles.cardContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/location.png')} />
              <Text style={styles.foodName}>Pasupatinath Temple</Text>
            </View>
            <View>
              <Text style={styles.foodDescription}>
                Pashupatinath Temple (Nepali: श्री पशुपतिनाथ मन्दिर) is a Hindu
                temple dedicated to Lord Pashupati, and is located in Kathmandu
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
  card: {borderRadius: 20, height: 300, width: '100%', flex: 1},
  cardContainer: {position: 'absolute', marginLeft: 15, bottom: 20},
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
    marginRight:20
  },
  categoryList: {flexDirection: 'row', justifyContent: 'space-around'},
});
export default Temple;

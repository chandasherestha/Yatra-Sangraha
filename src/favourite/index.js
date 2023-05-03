import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SearchBar} from '../DesignSystem';
import {FavouriteSection} from '../DesignSystem';
const Favourite = ({navigation}) => {
  const fav = [
    {
      imgSource: require('../../assets/dalbhat.png'),
      name: 'The Himalayan Hotel',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imgSource: require('../../assets/BackgroundImage.png'),
      name: 'The Himalayan Hotel',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imgSource: require('../../assets/food.png'),
      name: 'The Himalayan Hotel',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imgSource: require('../../assets/noodles.png'),
      name: 'The Himalayan Hotel',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar placeholder="Search for favourite Hotels" />
        </View>
        <View>
          {fav.map((fav, index) => (
            <FavouriteSection
            key={index}
              imgSource={fav.imgSource}
              name={fav.name}
              desc={fav.desc}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
});
export default Favourite;

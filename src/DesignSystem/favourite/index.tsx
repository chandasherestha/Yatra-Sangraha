import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavouriteSection = ({imgSource, name, desc, onPress,styleContainer}) => {
  const icons = new Array(5).fill(null);
  const [liked, setLiked] = useState(false);
  const color = liked ? '#FF0000' : '#6C7B85';
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <View style={[styles.container,{styleContainer}]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={styles.subContainer}>
          <View style={styles.img}>
            <Image source={imgSource} style={styles.image} />
          </View>
          <View style={styles.text}>
            <Text style={styles.hotelName}>{name}</Text>
            <Text style={styles.description}>{desc}</Text>
            <View style={styles.rating}>
              {icons.map((_, index) => (
                <Icon key={index} name="star" size={25} style={styles.star} />
              ))}
            </View>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.view}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLike}>
        <Icons name="heart" size={30} color={color} style={styles.likeButton} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   height:250,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
  },
  likeButton: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  subContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  img: {width: '35%'},
  image: {width: '100%', borderRadius: 20, height: '100%'},
  text: {width: '60%'},
  hotelName: {
    fontSize: 18,
    color: '#2866AB',
    fontFamily: 'Poppins-SemiBold',
  },
  description: {
    fontFamily: 'Poppins-Medium',
    color: '#6C7B85',
    fontSize: 12,
  },
  rating: {flexDirection: 'row', marginTop: 5},
  star: {marginRight: 3, color: '#FFD700'},
  view: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2866AB',
    fontSize: 12,
    marginTop: 6,
  },
});
export default FavouriteSection;

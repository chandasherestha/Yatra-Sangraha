import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const Review = ({imgSource, review, user, iconSize}) => {
  const icons = new Array(3).fill(0);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={imgSource} style={styles.imgStyle} />
      </View>
      <View style={styles.review}>
        <Text style={styles.reviewTextStyle}>
          {review}
          <Text style={styles.userName}>{user}</Text>
        </Text>
        <View style={styles.icons}>
          {icons.map((_, index) => (
            <Icon
              key={index}
              name="star"
              size={iconSize}
              style={{marginLeft: 5, color: '#FFD700'}}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:15
  },
  image: {
    width: '15%',
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  review: {
    flex: 1,
    marginLeft: 20,
  },
  reviewTextStyle: {
    fontSize: 12,
    color: '#576874',
    fontFamily: 'Poppins-Medium',
  },
  userName: {
    fontSize: 12,
    color: '#004FAC',
    fontFamily: 'Poppins-Medium',
  },
  icons: {
    flexDirection: 'row',
  },
});

export default Review;

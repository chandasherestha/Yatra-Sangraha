import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';

const PopularButton = ({imageSource, text}) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image style={styles.buttonImage} source={imageSource} />
      </TouchableOpacity>
      <View style={styles.title}>
        <Image source={require('../../../assets//blueLocation.png')} />
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    justifyContent: 'space-around',
    marginTop: 20,marginRight:20
  },
  buttonImage: {
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {flexDirection: 'row', marginTop: 10},
  textStyle: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Poppins-SemiBold',
    color: '#2866AB',
  },
});

export default PopularButton;

import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const SearchButton = ({title, imgSource, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Image source={imgSource} />
        <Text style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width:'auto',
    backgroundColor: '#5FBDC5',
    height: 30,
    marginTop: 10,
    borderRadius: 16,
  },button:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  text:{fontFamily: 'Poppins-Medium', color: '#fff',paddingLeft:5}
});
export default SearchButton;

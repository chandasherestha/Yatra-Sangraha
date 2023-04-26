import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';

const PopularButton = ({imageSource, text, icon,onPress}) => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image source={imageSource} style={styles.imgProperty} />
        </TouchableOpacity>
      </View>
      <View style={styles.nameSection}>
        <View>
          <Image source={icon} />
        </View>

        <View style={styles.font}>
          <Text style={styles.name}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {width: '40%', marginTop: 20},
  imgProperty: {width: 140, height: 140, borderRadius: 20},
  nameSection: {flexDirection: 'row', marginTop: 8},
  font: {width: 120, marginRight: 20},
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 10,
    color: '#2866AB',
  },
});

export default PopularButton;

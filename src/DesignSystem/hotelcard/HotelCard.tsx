import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const HotelCard = ({imageSource, title, subtitle, onPress, iconSize = 8,}) => {
  const icons = new Array(5).fill(null);
  return (
   <TouchableOpacity activeOpacity={1} onPress={onPress}>
     <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardRight}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
        <View style={{ flexDirection: 'row', }}>
      {icons.map((_, index) => (
        <Icon key={index} name="star" size={iconSize} style={{marginLeft:3,color:'#FFD700'}} />
      ))}
    </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.view}>View all</Text>
          </TouchableOpacity>
      </View>
    </View>
   </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 130,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    marginBottom:20
  },
  cardImage: {width: '35%', height: 110, borderRadius: 20, marginRight: 10},
  cardRight: {paddingRight: 10, width: '70%'},
  title: {fontSize: 16, fontFamily: 'Poppins-Medium', color: '#2866AB'},
  subTitle: {fontFamily: 'Poppins-Regular', fontSize: 12},
  view:{fontSize:12,fontFamily:'Poppins-SemiBold',color:'#2866AB',marginTop:5}
});
export default HotelCard;

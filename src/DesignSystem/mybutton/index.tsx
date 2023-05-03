import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Btn = ({text, icon, size, color,onPress}) => {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Icon name={icon} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#5FBDC5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
  },
  text: {fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#fff'},
});
export default Btn;

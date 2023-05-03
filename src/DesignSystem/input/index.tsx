import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const MyTextInput = ({title, palceholder, value, onChangeText}) => {
  return (
    <View style={{marginTop: 18}}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.border}>
        <TextInput
          placeholder={palceholder}
          value={value}
          onChangeText={onChangeText}></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginBottom: 8,
    color: '#073059',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  border: {
    height: 50,
    borderWidth: 1,
    borderColor: '#5FBDC5',
    borderRadius: 10,
    paddingLeft: 20,
  },
});
export default MyTextInput;

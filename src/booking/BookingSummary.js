import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {MyTextInput} from '../DesignSystem';
import Button from '../DesignSystem/button';
const BookingSummary = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const inputs = [
    {
        title: 'Name of Card Holder',
        value: name,
        onChangeText: setName,
        style: styles.font,
      },
      {
        title: 'Phone Number',
        value: phone,
        onChangeText: setPhone,
        style: styles.font,
      },
      {
        title: 'Email',
        value: email,
        onChangeText: setEmail,
        style: styles.font,
      },
      {
        title: 'Room Number',
        value: room,
        onChangeText: setRoom,
        style: styles.font,
      },
      {
        title: 'Price',
        value: price,
        onChangeText: setPrice,
        style: styles.font,
      },
      {
        title: 'Amount',
        value: amount,
        onChangeText: setAmount,
        style: styles.font,
      },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/calendar.png')} />
          <Text style={styles.fontStyle}>Booking Details</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Image source={require('../../assets/money.png')} />
          <Text style={styles.fontStyle}>Booking Summary</Text>
        </View>
        {inputs.map((inputs, index) => (
          <View key={index}>
            <MyTextInput
              title={inputs.title}
              value={inputs.value}
              onChangeText={inputs.onChangeText}
              style={inputs.style}
            />
          </View>
        ))}
        <View style={{marginTop:20}}>
            <Button title='Continue' onPress={()=>navigation.navigate('')}/>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  fontStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#073059',
    marginLeft: 10,
  },
  font: {fontFamily: 'Poppins-Medium'},
});
export default BookingSummary;

import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { MyTextInput } from '../DesignSystem';
import Button from '../DesignSystem/button';
const Payment = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const inputs = [
    {
        title: 'Name of Card Holder',
        value: name,
        onChangeText: setName,
        style: styles.font,
      },
      {
        title: 'Card Number',
        value: card,
        onChangeText: setCard,
        style: styles.font,
      },
      {
        title: 'phone Number',
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
      
  ];
  return (
    <View style={styles.contaier}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/calendar.png')} />
          <Text style={styles.fontStyle}>Choose a booking date</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Calendar
            style={{
              fontFamily: 'Poppins-Medium',
              borderRadius: 20,
              backgroundColor: 'rgba(95, 189, 197, 0.15)',
            }}
            theme={{
              textMonthFontFamily: 'Poopins-SemiBold',
              monthTextColor: '#073059',
              textDayFontFamily: 'Poppins-SemiBold',
              textDayFontFamily: 'Poppins-Medium',
              arrowColor: '#2866AB',
              backgroundColor: 'rgba(95, 189, 197, 0.15)',
              calendarBackground: 'rgba(95, 189, 197, 0.15)',
              textSectionTitleColor: '#6C7B85',
              selectedDayBackgroundColor: '#2866AB',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#2866AB',
              dayTextColor: '#073059',
              textDisabledColor: '#d9e',
            }}
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: '#2866AB',
              },
            }}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Image source={require('../../assets/money.png')} />
          <Text style={styles.fontStyle}>Payment Method</Text>
        </View>
        <View style={styles.creditCard}>
          <View style={styles.visa}>
            <Image source={require('../../assets/visa.png')} />
            <View style={{flexDirection: 'row'}}>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
              <View style={styles.circle}></View>
            </View>
          </View>
          <View style={styles.number}>
            <Text style={styles.cardNumber}>4678</Text>
            <Text style={styles.cardNumber}>4678</Text>
            <Text style={styles.cardNumber}>4678</Text>
            <Text style={styles.cardNumber}>4678</Text>
          </View>
          <View style={styles.name}>
            <Text style={styles.accountHolder}>Chanda Shrestha</Text>
            <Image source={require('../../assets/chip.png')} />
          </View>
          <View
            style={{
              backgroundColor: 'rgba(95, 189, 197, 0.2)',
              height: 100,
              width: '60%',
              position: 'absolute',
              top: 40,
            }}></View>
          <View
            style={{
              backgroundColor: 'rgba(95, 189, 197, 0.2)',
              height: 100,
              width: '60%',
              position: 'absolute',
              top: 20,
              right: 0,
            }}></View>
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

        <View style={{marginTop: 30}}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('BookingSummary')}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contaier: {flex: 1, padding: 20, backgroundColor: '#fff'},
  fontStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#073059',
    marginLeft: 10,
  },
  creditCard: {
    backgroundColor: 'rgba(95, 189, 197, 0.5)',
    height: 180,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
  visa: {flexDirection: 'row', justifyContent: 'space-between'},
  circle: {
    borderRadius: 50,
    height: 15,
    backgroundColor: '#fff',
    width: 15,
    marginRight: 5,
  },
  number: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  cardNumber: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  accountHolder: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#073059',
  },
  font: {fontFamily: 'Poppins-Medium'},
});
export default Payment;

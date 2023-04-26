import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
//mian test
const Payment = ({navigation}) => {
  return (
    <View style={styles.contaier}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../assets/calendar.png')} />
          <Text style={{fontSize:16,fontFamily:'Poppins-SemiBold',color:'#073059',marginLeft:10}}>Choose a booking date</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contaier: {flex: 1, padding: 20, backgroundColor: '#fff'},
});
export default Payment;

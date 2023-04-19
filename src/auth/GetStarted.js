import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import Button from '../DesignSystem/button';
import Login from './Login';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require('../../assets/BackgroundImage.png')}
        resizeMode="cover"
        style={styles.BackgroundImage}>
        <Text style={styles.Heading}>Let’s explore </Text>
        <Text style={styles.BigHeading}>Nepal </Text>
        <Text style={styles.NormalContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
          leo feugiat orci feugiat pellentesque quis eget neque. Maecenas
          ullamcorper ligula eget nunc euismod auctor sed vel arcu.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Phasellus id leo feugiat
          orci feugiat pellentesque quis eget neque. Maecenas ullamcorper ligula
          eget nunc euismod auctor sed vel arcu.{' '}
        </Text>
        <Button
          title="Get Started"
          buttonStyle={{marginTop: 100, marginLeft: 20, marginRight: 20}}
          onPress={() => navigation.navigate('Login')}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },
  BackgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  Heading: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 20,
    marginTop: 200,
    fontFamily:'Poppins-Medium'
  },
  BigHeading: {fontSize: 48, color: '#fff',fontFamily:'Poppins-SemiBold', paddingLeft: 20},
  NormalContent: {
    fontSize: 14,
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    fontFamily:'Poppins-Regular',
  },
  Button: {marginLeft: 20, marginRight: 20},
});
export default GetStarted;

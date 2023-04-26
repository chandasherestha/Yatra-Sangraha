import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
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
        <View style={styles.innerContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.Heading}>Let’s explore </Text>
            <Text style={styles.BigHeading}>Nepal </Text>
            <Text style={styles.NormalContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              id leo feugiat orci feugiat pellentesque quis eget neque. Maecenas
              ullamcorper ligula eget nunc euismod auctor sed vel arcu.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
              leo feugiat orci feugiat pellentesque quis eget neque. Maecenas
              ullamcorper ligula eget nunc euismod auctor sed vel arcu.{' '}
            </Text>
          </ScrollView>
        </View>
        <View style={{bottom: 10, padding: 20}}>
          <Button
            title="Get Started"
            buttonStyle={styles.buttonStyle}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
  },
  BackgroundImage: {
    flex: 1,
  },
  innerContainer: {
    padding: 20,
    flex: 1,
  },
  Heading: {
    fontSize: 20,
    color: '#fff',
    marginTop: 200,
    fontFamily: 'Poppins-Medium',
  },
  BigHeading: {
    fontSize: 48,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  NormalContent: {
    fontSize: 14,
    color: '#fff',
    paddingTop: 30,
    fontFamily: 'Poppins-Regular',
  },
  buttonStyle: {},
});

export default GetStarted;

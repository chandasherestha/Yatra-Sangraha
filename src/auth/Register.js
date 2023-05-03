import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Button from '../DesignSystem/button';
import {Input} from '../DesignSystem';
import axios from 'axios';

const Register = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState({fullname: '', email: '', password: ''});
  const handleInputFocus = () => {
    setError({...error, fullname: '', email: '', password: ''});
  };

  const handleLogin = () => {
    let fullnameError = '';
    let emailError = '';
    let passwordError = '';
    if (!fullname) {
      fullnameError = 'Please enter yor full name';
    }
    if (!email) {
      emailError = 'Please enter your email';
    }
    if (!password) {
      passwordError = 'Please enter your password';
    } else if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters long';
    }
    if (fullnameError || emailError || passwordError) {
      setError({
        fullname: fullnameError,
        email: emailError,
        password: passwordError,
      });
      return;
    }
    var data = JSON.stringify({
      email: email,
      fullName: fullname,
      password: password,
      role: 1,
    });
    console.log('data', data);
    var config = {
      method: 'post',
      url: 'https://travel-nodejs.vercel.app/auth',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigation.navigate('Home');
      })
      .catch(function (error) {
        console.log(error);
        setError('Incorrect email or password');
      });
  };
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.MediumText}>Welcome to</Text>
      </View>
      <View>
        <Text style={styles.SemiBoldText}>YATRA SANGRAHA</Text>
      </View>
      <View>
        <Text style={styles.RegularHeading}>
          Login to your existing account
        </Text>
      </View>
      <View>
        <Input
          title="Full Name"
          placeholder="Enter your fullname"
          placeholderTextColor="#B7C3CD"
          value={fullname}
          onChangeText={setFullname}
          showMailIcon={true}
          icon="user"
          onFocus={handleInputFocus}
        />
        {error.fullname ? (
          <Text style={styles.Error}>{error.fullname}</Text>
        ) : null}
      </View>
      <View>
        <Input
          title="Email"
          placeholder="Enter your email address"
          placeholderTextColor="#B7C3CD"
          value={email}
          onChangeText={setEmail}
          showMailIcon={true}
          icon="mail"
          onFocus={handleInputFocus}
        />

        {error.email ? <Text style={styles.Error}>{error.email}</Text> : null}
      </View>
      <View>
        <Input
          title="Password"
          placeholder="Enter your password"
          placeholderTextColor="#B7C3CD"
          value={password}
          onChangeText={setPassword}
          showMailIcon={true}
          icon={passwordVisible ? 'eye' : 'eye-off'}
          onFocus={handleInputFocus}
        />
        {error.password ? (
          <Text style={styles.Error}>{error.password}</Text>
        ) : null}
      </View>

      <View style={styles.button}>
        <Button
          title="Register"
          buttonStyle={{width: '100%'}}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff', padding: 20},
  MediumText: {
    fontSize: 20,
    marginTop: 50,
    color: '#2866AB',
    fontFamily: 'Poppins-SemiBold',
  },
  SemiBoldText: {
    fontSize: 32,
    color: '#073059',
    fontFamily: 'Poppins-Bold',
  },
  RegularHeading: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#5FBDC5',
    marginTop: 5,
  },
  button: {marginTop: 50},
  Error: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'red',
    marginTop: 10,
  },
});

export default Register;

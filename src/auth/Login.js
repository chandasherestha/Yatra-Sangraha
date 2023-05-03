import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from '../DesignSystem/button';
import {Input} from '../DesignSystem';
import axios from 'axios';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputFocus = () => {
    setErrors({...errors, username: '', password: ''});
  };

  const handleLogin = async () => {
    let usernameError = '';
    let passwordError = '';

    if (!username) {
      usernameError = 'Please enter your email';
    }

    if (!password) {
      passwordError = 'Please enter your password';
    } else if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters long';
    }

    if (usernameError || passwordError) {
      setErrors({username: usernameError, password: passwordError});
      return;
    }

    var data = JSON.stringify({
      email: username,
      password: password,
    });
    var config = {
      method: 'post',
      url: 'https://travel-nodejs.vercel.app/auth/login',
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
        // alert(error);
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
          title="Email"
          placeholder="Enter your email address"
          placeholderTextColor="#B7C3CD"
          value={username}
          onChangeText={setUsername}
          showMailIcon={true}
          icon="mail"
          onFocus={handleInputFocus}
        />
        {errors.username ? (
          <Text style={styles.Error}>{errors.username}</Text>
        ) : null}
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
        {errors.password ? (
          <Text style={styles.Error}>{errors.password}</Text>
        ) : null}
      </View>

      <View style={styles.ForgetContainer}>
        <Text style={styles.Forget}>Forget Password?</Text>
      </View>

      <View style={styles.login}>
        <Button title="Login" onPress={handleLogin} />
        <View style={styles.Bottom}>
          <Text style={styles.CreateAccount}>No account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.Register}>Register</Text>
          </TouchableOpacity>
        </View>
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

  Forget: {fontSize: 12, fontFamily: 'Poppins-SemiBold', color: '#2866AB'},
  ForgetContainer: {marginTop: 10, alignItems: 'flex-end'},
  login: {
    marginTop: 50,
  },
  Bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 10,
  },
  CreateAccount: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#6C7B85',
  },
  Register: {fontSize: 14, fontFamily: 'Poppins-SemiBold', color: '#073059'},
  Error: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'red',
    marginTop: 10,
  },
});

export default Login;

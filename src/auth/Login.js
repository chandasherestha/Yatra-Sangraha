import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import Button from '../DesignSystem/button';
import {Input} from '../DesignSystem';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // handle login logic
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
        />
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
        />
      </View>

      <View style={styles.ForgetContainer}>
        <Text style={styles.Forget}>Forget Password?</Text>
      </View>
      <View>
        <Button
          title="Login"
          buttonStyle={{marginTop: 150, width: '100%'}}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.Bottom}>
        <Text style={styles.CreateAccount}>No account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.Register}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff', padding: 20},
  MediumText: {
    fontSize: 20,
    marginTop: 100,
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

  Bottom: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CreateAccount: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#6C7B85',
  },
  Register: {fontSize: 14, fontFamily: 'Poppins-SemiBold', color: '#073059'},
});

export default Login;
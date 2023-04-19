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

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // handle login logic
  };
  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            placeholder="Enter your email address"
            placeholderTextColor="#B7C3CD"
            value={username}
            onChangeText={setUsername}
            showMailIcon={true}
            icon="user"
          />
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

        <View>
          <Button
            title="Register"
            buttonStyle={{marginTop: 150, width: '100%'}}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
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
});

export default Register;

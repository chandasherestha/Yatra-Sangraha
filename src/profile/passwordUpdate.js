import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React,{useState} from 'react';
  import { MyTextInput } from '../DesignSystem';
  import Button from '../DesignSystem/button';
  const PasswordUpdate = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm,setConfirm] = useState('');
    
    const inputs = [
      {
          title: 'Email',
          value: email,
          onChangeText: setEmail,
          style: styles.font,
        },
        {
          title: 'New Password',
          value: password,
          onChangeText: setPassword,
          style: styles.font,
        },
        {
          title: 'Confirm Password ',
          value: confirm,
          onChangeText: setConfirm,
          style: styles.font,
        },
       
    ];
  
    
    return (
      // <View style={[styles.triangleCorner, ]}>
      // </View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{}}>
            <Image
              source={require('../../assets/Rectangle201(1).png')}
              style={styles.coverPhoto}
            />
            <Image
              source={require('../../assets/profile.png')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.account}>
            <Text style={styles.name}>Chanda Shrestha</Text>
            <Image source={require('../../assets/pen.png')} />
          </View>
        <View style={{padding:20}}>
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
        </View>
        <View style={{padding:20}}>
      <Button title='Update' onPress={()=>navigation.navigate('')}/>
        </View>
        </ScrollView>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff'},
    coverPhoto: {width: '100%', height: 230},
    avatar: {
      width: 200,
      height: 200,
      backgroundColor: 'red',
      borderRadius: 100,
      position: 'absolute',
      top: 90,
      alignSelf: 'center',
    },
    account: {flexDirection: 'row', marginTop: 70, justifyContent: 'center'},
    name: {
      fontSize: 20,
      fontFamily: 'Poppins-SemiBold',
      color: '#073059',
      marginRight: 20,
    },
  
  });
  export default PasswordUpdate;
  
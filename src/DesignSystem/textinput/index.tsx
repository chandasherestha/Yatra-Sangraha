import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MailIcon from 'react-native-vector-icons/Feather';

const Input = ({
  title,
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  showMailIcon,
  icon,
  style,
  onFocus
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <View>
      <View>
        <Text style={styles.InputTitle}>{title}</Text>
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={style}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!isPasswordVisible && title === 'Password'}
          onFocus={onFocus}
        />
        {showMailIcon && (
          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            <MailIcon
              name={icon}
              size={25}
              color="#5FBDC5"
              style={styles.MailIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    marginTop: 8,
    borderRadius: 10,
    borderColor: '#5FBDC5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
  },
  InputTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#073059',
    marginTop: 24,
  },
  MailIcon: {marginTop: 10},
});

export default Input;

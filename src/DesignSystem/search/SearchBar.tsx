import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        <Icon name="search" size={30} style={styles.iconStyle} />
      </View>
      <View style={styles.filterButton}>
        <TouchableOpacity>
          <Icon name="sliders" size={30} style={styles.filter} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#5FBDC5',
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 16,
    width: '82%',
  },
  inputStyle: {
    flex: 1,fontFamily:'Poppins-Medium',
  },
  iconStyle: {
    color: '#5FBDC5',
  },
  filterButton: {width: '15%', backgroundColor: '#5FBDC5', borderRadius: 10},
  filter: {color: '#fff', position: 'absolute', top: 12, left: 12},
});

export default SearchBar;

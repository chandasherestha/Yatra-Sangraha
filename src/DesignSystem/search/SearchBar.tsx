import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const SearchBar = ({placeholder, onChangeText}) => {
  const [address,setAddress]=useState(false);
  const handleSubmit=()=>{
    setAddress(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
       <TouchableOpacity>
       <Icon name="search" size={30} style={styles.iconStyle} />
       </TouchableOpacity>
      </View>
      <View style={styles.filterButton}>
        <TouchableOpacity onPress={()=> setAddress(!address)}>
          <Icon name="sliders" size={30} style={styles.filter} />
        </TouchableOpacity>
      </View>
      {address && (
        <View style={{width:'40%',position:'absolute',top:70,right:0,borderRadius:10,borderWidth:1,borderColor:'#5FBDC5',zIndex:10,alignItems:'center'}}>
          <Text style={styles.filterList}>Near By</Text>
          <Text style={styles.filterList}>Kathmandu</Text>
          <Text style={styles.filterList}>Lalitpur</Text>
          <Text style={styles.filterList}>Bhaktapur</Text>
        </View>)}
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
  filterList:{fontSize:14, fontFamily:'Poppins-Medium',color:'#6C7B85',marginTop:12,}
});

export default SearchBar;

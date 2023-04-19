import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from '../DesignSystem';
import SearchButton from '../DesignSystem';
const Explore = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    // handle search logic here
  };
  const recent=[{
    imageSource: require('../../assets/blueLocation.png'),
  title: 'Popular',
  imageSource: require('../../assets/blueLocation.png'),
  title: 'Popular',}];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar placeholder="Search" onChangeText={'handleSearch'} />
        </View>
        <View>
          <Text style={styles.search}>Your recent searches</Text>
        </View>
        <View>

        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  search:{marginTop:20,fontFamily:'Poppins-SemiBold',fontSize:16,color:'#073059'}
});
export default Explore;

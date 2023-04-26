import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  requireNativeComponent,
} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from '../DesignSystem';
import {SearchButton} from '../DesignSystem';

const Explore = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    // handle search logic here
  };
  const recent = [
    {
      imgSource: require('../../assets/whitePopular.png'),
      title: 'Popular',
    },
    {
      imgSource: require('../../assets/whiteMountain.png'),
      title: 'Mountains',
    },
    {
      imgSource: require('../../assets/whiteTemple.png'),
      title: 'Temple',
    },
    {
      imgSource: require('../../assets/whiteTemple.png'),
      title: 'Temple',
    },
    {
      imgSource: require('../../assets/whiteTemple.png'),
      title: 'Temple',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchBar placeholder="Search" onChangeText={handleSearch} />
        </View>
        <View>
          <Text style={styles.search}>Your recent searches</Text>
        </View>
        <View style={styles.buttons}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {recent.map((recent, index) => (         
            <View style={{marginRight:10}}>
              <SearchButton
              key={index}
              imgSource={recent.imgSource}
              title={recent.title}
            />
            </View>
          ))}
          </ScrollView>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../../assets/card.png')}
            style={{borderRadius: 20,width:'100%'}}
          />
        </View>
        <View style={styles.locationContainer}>
          <View style={styles.title}>
            <Image source={require('../../assets/blueLocation.png')} />
            <Text style={styles.locationName}>Namabuddha Stupa, Kavre</Text>
          </View>
          <View style={styles.desSection}>
            <Text style={styles.description}>
              Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa
              Namobuddha in the Himalaya mountains
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  search: {
    marginTop: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#073059',
  },
  buttons: {flexDirection: 'row', justifyContent: 'space-around'},
  card: {borderRadius: 20, marginTop: 20,width:'100%'},
  locationContainer: {marginTop: 16},
  title: {flexDirection: 'row'},
  locationName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    paddingLeft: 12,
    color: '#2866AB',
  },
  desSection: {marginLeft: 30},
  description: {fontFamily: 'Poppins-Regular', color: '#6C7B85', fontSize: 12},
});
export default Explore;

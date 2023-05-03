import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Interest} from '../DesignSystem';
import {Places} from '../DesignSystem';
import {Btn} from '../DesignSystem';
const Profile = ({navigation}) => {
  const interest = [
    {title: 'History',imgSource:require('../../assets/blueLocation.png')},
    {title: 'Nature'},
    {title: 'Architecture'},
    {title: 'Food'},
    {title: 'Culture'},
    {title: 'History'},
    {title: 'Nature'},
    {title: 'Architecture'},
    {title: 'Food'},
    {title: 'Culture'},
  ];
  const location = [
    {
      imgSource: require('../../assets/f1.png'),
      title: 'Pokhara, Nepals',
      rating: 'Rating 4.0',
      
    },
    {
      imgSource: require('../../assets/f2.png'),
      title: 'Basantapur Durbar Square ',
      rating: 'Rating 4.0',
    },
    {
      imgSource: require('../../assets/f3.png'),
      title: 'Bhaktapur Durbar Square ',
      rating: 'Rating 4.0',
    },
  ];
  const food = [
    {
      imgSource: require('../../assets/food3.png'),
      title: 'Indian Food',
      rating: 'Rating 4.0',
    },
    {
      imgSource: require('../../assets/food1.png'),
      title: 'Spice Food ',
      rating: 'Rating 4.0',
    },
    {
      imgSource: require('../../assets/food2.png'),
      title: 'Nepali Food ',
      rating: 'Rating 4.0',
      
    },
  ];
  const button = [
    {
      text: 'Personal Information',
      icon: 'information-outline',
      size: 30,
      color: '#fff',
    onPress:()=>navigation.navigate('Information')
    },
    {
      text: 'Bookings',
      icon: 'calendar-check',
      size: 30,
      color: '#fff',
 
    },
    {
      text: 'Favourite',
      icon: 'heart',
      size: 30,
      color: '#fff',
    },
    {
      text: 'FAQS',
      icon: 'information-outline',
      size: 30,
      color: '#fff',
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
        <View style={{padding: 20}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>My Interest </Text>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Icon name="add" color="#2866AB" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {interest.slice(0, 5).map((interest, index) => (
              <Interest key={index} title={interest.title} />
            ))}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {interest.slice(5, 10).map((interest, index) => (
              <Interest key={index} title={interest.title} />
            ))}
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Visited Locations </Text>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Icon name="add" color="#2866AB" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            {location.map((location, index) => (
              <Places
                key={index}
                imgSource={location.imgSource}
                title={location.title}
                rating={location.rating}
              />
            ))}
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Foods </Text>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Icon name="add" color="#2866AB" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            {food.map((food, index) => (
              <Places
                key={index}
                imgSource={food.imgSource}
                title={food.title}
                rating={food.rating}
              />
            ))}
          </View>
          {button.map((button,index)=>( <Btn
          key={index}
            text={button.text}
            icon={button.icon}
            size={button.size}
            color={button.color}
            onPress={button.onPress}
          />))}
         
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  title: {fontFamily: 'Poppins-SemiBold', fontSize: 20, color: '#2866AB'},
  row: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 20},
});
export default Profile;

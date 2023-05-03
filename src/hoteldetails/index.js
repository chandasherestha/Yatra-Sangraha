import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Pressable,
  TouchableOpacity,
  TextInput,BackHandler
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import {Services} from '../DesignSystem';
import {Review} from '../DesignSystem';
import Button from '../DesignSystem/button';
import { useFocusEffect } from '@react-navigation/native';

const HotelDetails = ({navigation, size, initialRating}) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Login');
       
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );








  const [modalVisible, setModalVisible] = useState(true);
  const [rating, setRating] = useState(initialRating || 0);
  const rate = [
    {name: 'star', size: 25, color: '#FFD700'},
    {name: 'star', size: 25, color: '#FFD700'},
    {name: 'star', size: 25, color: '#FFD700'},
    {name: 'star', size: 25, color: '#FFD700'},
    {name: 'star', size: 25, color: '#6C7B85'},
  ];
  const service = [
    {imgSource: require('../../assets/swimming.png'), title: 'Parking'},
    {
      imgSource: require('../../assets/swimming.png'),
      title: 'Wheelchair Access',
    },
    {imgSource: require('../../assets/swimming.png'), title: 'Swimming Pool'},
    {imgSource: require('../../assets/swimming.png'), title: 'Furnished '},
    {imgSource: require('../../assets/swimming.png'), title: 'Air Conditioner'},
    {imgSource: require('../../assets/swimming.png'), title: 'Parking'},
    {imgSource: require('../../assets/swimming.png'), title: 'Parking'},
    {imgSource: require('../../assets/swimming.png'), title: 'Parking'},
  ];
  const foods = [
    {
      name: 'Nepali khanna set',
      imgSource: require('../../assets/food.png'),
    },
    {
      name: 'Nepali khanna set',
      imgSource: require('../../assets/food.png'),
    },
    {
      name: 'Nepali khanna set',
      imgSource: require('../../assets/food.png'),
    },
    {
      name: 'Nepali khanna set',
      imgSource: require('../../assets/food.png'),
    },
    {
      name: 'Nepali khanna set',
      imgSource: require('../../assets/food.png'),
    },
  ];
  const review = [
    {
      imgSource: require('../../assets/avatar.png'),
      review:
        'TYME has saved me so much hassle logging my monthly milage, it ties in seamlessly with the Irish Revenue requirements',
      user: '- Chanda Shrestha',
      iconSize: 20,
    },
    {
      imgSource: require('../../assets/avatar.png'),
      review:
        'TYME has saved me so much hassle logging my monthly milage, it ties in seamlessly with the Irish Revenue requirements',
      user: '- Chanda Shrestha',
      iconSize: 20,
    },
    {
      imgSource: require('../../assets/avatar.png'),
      review:
        'TYME has saved me so much hassle logging my monthly milage, it ties in seamlessly with the Irish Revenue requirements',
      user: '- Chanda Shrestha',
      iconSize: 20,
    },
  ];
  const handleRatingPress = newRating => {
    setRating(newRating);
  };

  const starIcon = index => (
    <TouchableOpacity key={index} onPress={() => handleRatingPress(index + 1)}>
      <Icon
        name="star"
        size={35}
        color={rating > index ? '#FFD700' : '#6C7B85'}
        style={{paddingRight: 5}}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
    
   
        <Image source={require('../../assets/card.png')} style={styles.image} />
    
      <Modal
        animationType={'none'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <View
            style={{
              height: '75%',
              width: '100%',
              position: 'absolute',
              bottom: 0,
            }}>
            <View
              style={{
                marginTop: 20,
                backgroundColor: '#fff',
                height: '100%',
                borderRadius: 20,
                borderTopColor: '#C7C7CC',
                padding: 20,
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title}>
                  <View style={{width: '70%'}}>
                    <Text style={styles.hotelName}>
                      Namabuddha Hotel, Kavre
                    </Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <Text style={styles.price}>$789.00 </Text>
                  </View>
                </View>
                <View style={styles.location}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/blueLocation.png')} />
                    <Text style={styles.place}>Kavre, Nepal</Text>
                  </View>
                  <View>
                    <Text style={styles.day}>Per Night</Text>
                  </View>
                </View>
                <View style={styles.rate}>
                  {rate.map((item, index) => (
                    <View style={styles.icon}>
                      <Icon
                        key={index}
                        name={item.name}
                        size={item.size}
                        color={item.color}
                      />
                    </View>
                  ))}
                  <Text style={styles.rating}>Rating 4.0</Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.section}>About</Text>
                  <Text style={styles.detail}>
                    Buddhist monastery Thrangu Tashi Yangtse, Nepal near Stupa
                    Namobuddha in the Himalaya mountains
                  </Text>
                  <Text style={styles.showMore}>Show more</Text>
                </View>
                <View style={styles.service}>
                  <Text style={styles.section}>Our Services</Text>
                  <Text style={styles.showMore}>See all</Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={styles.scroll}>
                    {service.map((item, index) => (
                      <View style={{paddingRight: 12}}>
                        <Services
                          key={index}
                          imgSource={item.imgSource}
                          title={item.title}
                        />
                      </View>
                    ))}
                  </View>
                </ScrollView>
                <View style={styles.service}>
                  <Text style={styles.section}>Foods</Text>
                  <Text style={styles.showMore}>See all</Text>
                </View>
                <View style={styles.scroll}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {foods.map((food, index) => (
                      <View style={{marginRight: 18}}>
                        <TouchableOpacity key={index}>
                          <Image
                            source={food.imgSource}
                            style={styles.foodImage}
                          />
                          <Text style={styles.foodName}>{food.name}</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </ScrollView>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.section}>Review</Text>
                </View>
                <View>
                  {review.map((review, index) => (
                    <Review
                      key={index}
                      imgSource={review.imgSource}
                      review={review.review}
                      user={review.user}
                      iconSize={review.iconSize}
                    />
                  ))}
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.section}>Images</Text>
                </View>
                <View style={styles.images}>
                  <View style={styles.firstSection}>
                    <View style={styles.left}>
                      <Image
                        source={require('../../assets/hotel1.png')}
                        style={styles.imgProperty}
                      />
                      <Image
                        source={require('../../assets/hotel1.png')}
                        style={styles.imgPropertyMargin}
                      />
                    </View>
                    <View style={{width: '48%'}}>
                      <Image
                        source={require('../../assets/hotel1.png')}
                        style={styles.right}
                      />
                    </View>
                  </View>
                  <View style={styles.imgSecondSec}>
                    <View style={{width: '48%'}}>
                      <Image
                        source={require('../../assets/hotel1.png')}
                        style={styles.imgProperty}
                      />
                    </View>
                    <View style={{width: '48%'}}>
                      <Image
                        source={require('../../assets/hotel1.png')}
                        style={styles.imgProperty}
                      />
                    </View>
                  </View>
                  <Text style={styles.showMore}>Show all photos</Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.section}>Location</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: 16}}>
                  <Image source={require('../../assets/blueLocation.png')} />
                  <Text style={styles.place}>
                    Narephat,koteshwor-32, Kathmandu, Nepal.
                  </Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.section}>Things To Know</Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={styles.scroll}>
                    {service.map((item, index) => (
                      <View style={{paddingRight: 12}}>
                        <Services
                          key={index}
                          imgSource={item.imgSource}
                          title={item.title}
                        />
                      </View>
                    ))}
                  </View>
                </ScrollView>
                <View style={styles.reviewSection}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.review}>Share your opinion</Text>
                  </View>
                  <View style={styles.star}>
                    {[0, 1, 2, 3, 4].map(index => starIcon(index))}
                  </View>
                  <View>
                    <Text style={styles.text}>Review</Text>
                    <TextInput
                      placeholder="Share your Review"
                      style={styles.reviewBox}></TextInput>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: '#5FBDC5',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: 10,
                        marginTop: 20,
                        padding: 12,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'Poppins-SemiBold',
                          color: '#fff',
                        }}>
                        Submit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.booking}>
                  <Button title="Book Now" onPress={()=>navigation.navigate('Payment')}/>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>


    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  image: {width: '100%', height: '100%'},
  title: {flexDirection: 'row', justifyContent: 'space-between', width: '100%'},
  hotelName: {color: '#2866AB', fontFamily: 'Poppins-SemiBold', fontSize: 18},
  price: {color: '#073059', fontSize: 20, fontFamily: 'Poppins-Bold'},
  location: {flexDirection: 'row', justifyContent: 'space-between'},
  place: {
    color: '#6C7B85',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    width: '100%',
  },
  day: {
    color: '#5FBDC5',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginLeft: 10,
  },
  rate: {flexDirection: 'row', marginTop: 6},
  icon: {marginRight: 5},
  rating: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5,
  },
  section: {
    fontSize: 18,
    color: '#073059',
    fontFamily: 'Poppins-SemiBold',
  },
  detail: {
    fontFamily: 12,
    fontFamily: 'Poppins-Medium',
    color: '#6C7B85',
  },
  showMore: {
    fontFamily: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#5FBDC5',
    paddingTop: 5,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  scroll: {flexDirection: 'row', marginTop: 14},
  foodImage: {width: 110, height: 110, borderRadius: 20},
  foodName: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#073059',
    marginTop: 10,
  },
  images: {marginTop: 15, width: '100%'},
  firstSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  left: {flexDirection: 'column', width: '48%'},
  imgProperty: {width: '100%', height: 100, borderRadius: 20},
  imgPropertyMargin: {
    width: '100%',
    height: 100,
    borderRadius: 20,
    marginTop: 18,
  },
  right: {width: '100%', borderRadius: 20, height: 218},
  imgSecondSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  star: {flexDirection: 'row', justifyContent: 'center', marginTop: 10},
  reviewSection: {
    width: '100%',
    backgroundColor: 'rgba(95, 189, 197, 0.15)',
    height: 280,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },
  review: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#073059',
  },
  reviewBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2866AB',
    padding: 10,
    fontFamily: 'Poppins-Medium',
    color: '#6C7B85',
    marginTop: 8,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: '#073059',
    marginTop: 10,
  },
  booking:{marginTop: 20, marginBottom: 30}
});
export default HotelDetails;

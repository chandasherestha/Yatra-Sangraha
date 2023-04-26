import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FoodDetails = () => {
  const [liked, setLiked] = useState(false);
  const color = liked ? '#FF0000' : '#FFFFFF';
  const handleLike = () => {
    setLiked(!liked);
  };
  const preparation = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fringilla metus. Suspendisse sed ligula sit amet enim scelerisque vehicula semper in erat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fringilla metus. Suspendisse sed ligula sit amet enim scelerisque vehicula semper in erat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fringilla metus. Suspendisse sed ligula sit amet enim scelerisque vehicula semper in erat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fringilla metus. Suspendisse sed ligula sit amet enim scelerisque vehicula semper in erat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fringilla metus. Suspendisse sed ligula sit amet enim scelerisque vehicula semper in erat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a fringilla metus. Suspendisse sed ligula sit amet enim scelerisque vehicula semper in erat.',
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleIcon}>
          <Image source={require('../../assets/foodVector.png')} />
          <Text style={styles.textIcon}>Nepali Authentic Foods</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Image
            source={require('../../assets/dalbhat.png')}
            style={styles.card}></Image>
          <TouchableOpacity onPress={handleLike}>
            <Icon
              name="heart"
              size={30}
              color={color}
              style={styles.likeButton}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.foodDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            fringilla metus. Suspendisse sed ligula sit amet enim scelerisque
            vehicula semper in erat.
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Ingredients</Text>
        </View>
        <View style={styles.ingredients}>
          <View>
            <Text style={styles.foodDescription}>
              Boneless, skinless chicken breast
            </Text>
            <Text style={styles.foodDescription}>Plain yougurt</Text>
            <Text style={styles.foodDescription}>Ginger gralic paste</Text>
            <Text style={styles.foodDescription}>Chili power</Text>
            <Text style={styles.foodDescription}>Garam masala</Text>
            <Text style={styles.foodDescription}>Salt</Text>
            <Text style={styles.foodDescription}>Tumeric</Text>
            <Text style={styles.foodDescription}>Cumin</Text>
          </View>
          <View>
            <Text style={styles.foodDescription}>1/2 Kg </Text>
            <Text style={styles.foodDescription}>8 Tablespoons</Text>
            <Text style={styles.foodDescription}>2 Tablespoons</Text>
            <Text style={styles.foodDescription}>2 Tablespoons</Text>
            <Text style={styles.foodDescription}>2 Tablespoons</Text>
            <Text style={styles.foodDescription}>2 Tablespoons</Text>
            <Text style={styles.foodDescription}>2 Tablespoons</Text>
            <Text style={styles.foodDescription}>2 Tablespoons</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Preparation</Text>
        </View>
        <View>
          {preparation.map((preparation, index) => (
            <View style={{flexDirection: 'row'}} key={index}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Medium',
                  color: '#6C7B85',
                  marginTop: 10,
                }}>
                {index + 1}.
              </Text>
              <Text style={styles.preparation}>{preparation}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  titleIcon: {flexDirection: 'row'},
  textIcon: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#5FBDC5',
    marginLeft: 10,
  },
  card: {borderRadius: 20, width: '100%'},
  likeButton: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    borderRadius: 50,
    padding: 10,
  },
  foodDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#6C7B85',
  },
  title: {fontSize: 16, color: '#073059', fontFamily: 'Poppins-SemiBold'},
  ingredients: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  preparation: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#6C7B85',
    marginTop: 10,
    marginLeft: 5,
  },
});

export default FoodDetails;

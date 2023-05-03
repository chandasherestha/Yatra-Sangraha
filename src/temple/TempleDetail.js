import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const TempleDetail = () => {
  const [liked, setLiked] = useState(false);
  const color = liked ? '#FF0000' : '#fff';
  const handleLike = () => {
    setLiked(!liked);
  };
  const temple = [
    {
      name: 'Pasupatinath Temple',
      imgSource: require('../../assets/pasupati.jpg'),
    },
    {
      name: 'Gokarna Temple',
      imgSource: require('../../assets/pasupati.jpg'),
    },
    {
      name: 'Ganesh Mandir',
      imgSource: require('../../assets/pasupati.jpg'),
    },
    {
      name: 'Chandragiri Temple',
      imgSource: require('../../assets/pasupati.jpg'),
    },
    {
      name: 'Manakamana Temple',
      imgSource: require('../../assets/pasupati.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleIcon}>
          <Image source={require('../../assets/templelogo.png')} />
          <Text style={styles.textIcon}>Pasupatinath Temple </Text>
        </View>
        <View>
          <View style={{marginTop: 20}}>
            <Image
              source={require('../../assets/temple1.png')}
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
        </View>
        <View>
          <Text style={styles.detail}>
            This temple situated on the banks of the holy River Bagmati is the
            most revered Hindu temple in Nepal. The main temple complex is open
            only to the Hindus; non-Hindus must satisfy themselves by observing
            from the terraces just across the Bagmati River to the east. As a
            mark of reverence and tradition, leather items that include shoes,
            belts and cameras are forbidden within the temple complex and must
            be left outside. Photography is strictly prohibited.
          </Text>
          <Text style={styles.detail}>
            The most important festival observed here is Shivaratri, or ‘the
            Night of Lord Shiva’ - the night Lord Shiva self-originated - when
            devotees and pilgrims from far and wide across Nepal and India,
            including sadhus (barely attired holy men with long locks of hair
            and smeared in ashes) and asceti cs, throng the temple to have a
            darshan (glimpse) of the sacred Shiva lingam. The other holy
            occasion when devotees descend to the temple in large numbers is on
            Teej (a festival solely observed by Hindu women) in mid-September.
            The whole temple complex and the adjoining areas turn into a sea of
            red as women draped in their bridal red sarees and wearing yellow or
            green bead necklaces offer prayers for the well-being, prosperity,
            and longevity of their husbands. The temple is just as crowded with
            devotees every fortnight on the 11th day of the lunar month on
            Ekadashi. Among the Ekadashis, the most prominent and holiest two
            are the Harishayani Ekadashi in Ashadh (June/July) and four months
            later, Haribodhini Ekadashi in Kartik (October/November).
          </Text>
        </View>
        <View style={styles.service}>
          <Text style={styles.section}>Also Try</Text>
          <Text style={styles.showMore}>See all</Text>
        </View>
        <View style={styles.scroll}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {temple.map((temple, index) => (
              <View style={{marginRight: 18}}>
                <TouchableOpacity key={index}>
                  <Image source={temple.imgSource} style={styles.templeImage} />
                  <Text style={styles.templeName}>{temple.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  titleIcon: {flexDirection: 'row', marginTop: 20},
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
  detail: {fontFamily: 'Poppins-Medium', color: '#6C7B85', marginTop: 20},
  section: {
    fontSize: 18,
    color: '#073059',
    fontFamily: 'Poppins-SemiBold',
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
  templeImage: {width: 110, height: 110, borderRadius: 20},
  templeName: {
    width: 110,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#073059',
    marginTop: 10,
  },
});
export default TempleDetail;

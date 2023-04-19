import { View, Image } from 'react-native'
import React,{useEffect, useState} from 'react'



const SplashScreen =({navigation})=> {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
        navigation.navigate('GetStarted')
    
    }, 1000);
  }, []);
  return (
    <View style={{flex:1,backgroundColor:"#fff",justifyContent:'center',alignItems:'center',}}>
     <Image
          source={require('../../assets/logo.jpg')}
          style={{width: 250, height: 250}}
        />
    </View>
  )
}
export default SplashScreen;
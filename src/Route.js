
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './auth/Splash_Screen';
import Login from './auth/Login';
import GetStarted from './auth/GetStarted';
import Register from './auth/Register';
import Home from './home/Home';
import Explore from './explore/Explore';
import Map from './map/Map';
import Booking from './booking/Booking';
import Favourite from './favourite/index'
import Profile from './profile/index'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#073059',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor:'#94B3D5',borderTopLeftRadius:20,borderTopRightRadius:20,height:65 },
        tabBarLabelStyle:{fontFamily:'Poppins-Medium',fontSize:12,marginBottom:10},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'earth' : 'earth';
          } else if (route.name === 'Map') {
            iconName = focused ? 'egoogle-maps' : 'google-maps';
          }else if (route.name === 'Booking') {
            iconName = focused ? 'calendar-check' : 'calendar-check';
          }else if (route.name === 'Favourite') {
            iconName = focused ? 'cards-heart' : 'cards-heart-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
        }}
        
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          title: 'Explore',
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          title: 'Map',
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabel: 'Booking',
          title: 'Booking',
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: 'Favourite',
          title: 'Favourite',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default Route;
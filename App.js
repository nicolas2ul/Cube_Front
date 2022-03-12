import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Comments from './components/Comment';
import Fav from './components/Fav';
import Search from './components/Search';
import User from './components/User';
import Discovery from './components/Discovery';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      //on définit les icônes 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if(route.name === 'Discovery') {
            iconName = focused
              ? 'home'
              : 'home';
          }
          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } 
          if (route.name === 'Favoris') {
            iconName = focused ? 'star' : 'star-o';
          }
          if (route.name === 'Comments') {
            iconName = focused ? 'comment' : 'comment-o';
          }
          if (route.name === 'User') {
            iconName = focused ? 'user' : 'user-o';
          }
          
          return <FontAwesome name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor : 'black',
        tabBarInactiveTintColor : 'gray',
      })}
    >
      
      <Tab.Screen name="Discovery" component={Discovery}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Favoris" component={Fav}/>
      <Tab.Screen name="Comments" component={Comments}/>
      <Tab.Screen name="User" component={User}/>
    </Tab.Navigator>
    </NavigationContainer>
  );

}
const styles = StyleSheet.create({


});

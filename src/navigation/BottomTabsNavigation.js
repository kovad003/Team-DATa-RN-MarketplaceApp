import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import AccountScreen from '../screens/AccountScreen'
import SearchScreen from '../screens/SearchScreen'
import CreateItemScreen from '../screens/CreateItemScreen'
import CategoryScreen from '../screens/CategoryScreen'
import HomeScreen from '../screens/HomeScreen'

import CategoryStackNavigation from '../navigation/CategoryStackNavigation'
import HomeStackNavigation from '../navigation/HomeStackNavigation'


/* HH - Here we create BottomTab navigation for 5 main pages of application
These five pages are (HomeScreen , categoryScreen, search,
 MyItems and Profile page)
*/
const Tab = createBottomTabNavigator();
function BottomTabsNavigation () {
  return (
    <NavigationContainer>
        <Tab.Navigator  
        /* HH - in screenOptions you can some modification and design 
        to This bottomTab navigation */     
        screenOptions={({ route }) => ({

        // HH - in this part we are adding icons for BottomTabs
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
            iconName = focused
            ? 'home' : 'home';
        } else if (route.name === 'My Items') {
            iconName = focused ? 'plus-circle' : 'plus-circle';
        } else if (route.name === 'Categories') {
            iconName = focused ? 'shape' : 'shape';
        }else if (route.name === 'Search') {
            iconName = focused ? 'magnify' : 'magnify';
        }else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account';
        }
        
        // You can return any component that you like here!
        return <MaterialCommunityIconsIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        })}
      >
        
            <Tab.Screen 
            name="Home" 
            component={HomeStackNavigation} 
            options={{headerShown: false}}  
            />
            <Tab.Screen 
            name="Categories" 
            component={CategoryStackNavigation} 
            options={{headerShown: false}}  

            />
       
            <Tab.Screen 
            name="Search" 
            component={SearchScreen}
            />        
            <Tab.Screen 
            name="My Items" 
            component={CreateItemScreen}
            />
            <Tab.Screen 
            name="Profile" 
            component={AccountScreen}
            /> 
        </Tab.Navigator>
    </NavigationContainer>

  );
}

export default BottomTabsNavigation;
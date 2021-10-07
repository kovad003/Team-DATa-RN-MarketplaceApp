import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import MainScreen from '../screens/MainScreen'
import AccountScreen from '../screens/AccountScreen'
import SearchScreen from '../screens/SearchScreen'
import CreateItemScreen from '../screens/CreateItemScreen'
import CategoryScreen from '../screens/CategoryScreen'
import HomeScreen from '../screens/HomeScreen'
import CategoryStackNavigation from '../navigation/CategoryStackNavigation'
//import LoginScreen from '../screens/LoginScreen'

const Tab = createBottomTabNavigator();

function BottomTabsNavigation () {
  return (
    <NavigationContainer>
        <Tab.Navigator        
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused
            ? 'home' : 'home';
        } else if (route.name === 'Create Item') {
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
            component={HomeScreen}   
            />
            <Tab.Screen 
            name="Categories" 
            component={CategoryStackNavigation}   
            />
            <Tab.Screen 
            name="Profile" 
            component={AccountScreen}   
            />        
            <Tab.Screen 
            name="Search" 
            component={SearchScreen}   
            />        
            <Tab.Screen 
            name="Create Item" 
            component={CreateItemScreen}   
            />
        </Tab.Navigator>
    </NavigationContainer>

  );
}

export default BottomTabsNavigation;
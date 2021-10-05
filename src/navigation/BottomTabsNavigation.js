import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../screens/MainScreen'
import AccountScreen from '../screens/AccountScreen'
import SearchScreen from '../screens/SearchScreen'
import CreateItemScreen from '../screens/CreateItemScreen'
//import CategoryScreen from '../screens/CategoryScreen'

const Tab = createBottomTabNavigator();

function BottomTabsNavigation () {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
            name="Main" 
            component={MainScreen}   
            />
            {/* <Tab.Screen 
            name="Category" 
            component={CategoryScreen}   
            /> */}
            {/* <Tab.Screen 
            name="Profile" 
            component={AccountScreen}   
            />         */}
            <Tab.Screen 
            name="Search" 
            component={SearchScreen}   
            />        
            <Tab.Screen 
            name="Add" 
            component={CreateItemScreen}   
            />
        </Tab.Navigator>
    </NavigationContainer>

  );
}

export default BottomTabsNavigation;
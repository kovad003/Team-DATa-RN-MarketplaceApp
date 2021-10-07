import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import CategoryScreen from '../screens/CategoryScreen'
import ListItemsScreen from '../screens/ListItemsScreen'
import ItemDetailScreen from '../screens/ItemDetailScreen'
import HomeScreen from '../screens/HomeScreen'

//import Colors from '../constants/Colors';

const Stack = createStackNavigator();
function HomeStackNavigation () {

    return (
        <Stack.Navigator >
          <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{headerShown: false}} 
          />
          <Stack.Screen 
          name="ItemDetail"  
          component={ItemDetailScreen}           
          options={{
            headerTitle: 'Item Details'} }
          />
        </Stack.Navigator>
    );

  }

export default HomeStackNavigation;
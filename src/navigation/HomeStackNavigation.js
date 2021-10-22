import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// HH - here needed pages and components are imported
import CategoryScreen from '../screens/CategoryScreen'
import ListItemsScreen from '../screens/ListItemsScreen'
import ItemDetailScreen from '../screens/ItemDetailScreen'
import HomeScreen from '../screens/HomeScreen'
import GuidForShoppingScreen from '../screens/GuidForShoppingScreen'

/* HH - Here we create stack navigation for 3 pages 
These three pages are (Home page , Item details and Guide page)
*/
const Stack = createStackNavigator();
function HomeStackNavigation () {

    return (
        <Stack.Navigator >
          <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          // HH - Here we are removing this screen's header - (becuse we have it in BottomTabsNavigation)
          options={{headerShown: false}} 
          />
          <Stack.Screen 
          name="ItemDetail"  
          component={ItemDetailScreen}           
          options={{
            headerTitle: 'Item Details'} }
          />
          <Stack.Screen 
          name="Guide"  
          component={GuidForShoppingScreen}           
          options={{
            headerTitle: 'Guide'} }
          />
        </Stack.Navigator>
    );

  }

export default HomeStackNavigation;
import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import CategoryScreen from '../screens/CategoryScreen'
import ListItemsScreen from '../screens/ListItemsScreen'
import ItemDetailScreen from '../screens/ItemDetailScreen'
import 'react-native-gesture-handler';
//import Colors from '../constants/Colors';

import GuidForShoppingScreen from '../screens/GuidForShoppingScreen'

/* HH - Here we create stack navigation for 4 pages 
These three pages are (categoryScreen, listitemsScreen, ItemdetailScreen and Guide page)
*/

const Stack = createStackNavigator();
function CategoryStackNavigation () {

    return (
        <Stack.Navigator >
          <Stack.Screen 
          name="CategoriesScreen" 
          component={CategoryScreen} 
          options={{
            headerTitle: 'Categories'} }
          />
          <Stack.Screen 
          name="CategoryList" 
          component={ListItemsScreen}   
          options={{
            headerTitle: 'Category Items'} }
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

export default CategoryStackNavigation;
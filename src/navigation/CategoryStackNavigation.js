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

const Stack = createStackNavigator();
function CategoryStackNavigation () {

    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen 
          name="Categories" 
          component={CategoryScreen} 
          />
          <Stack.Screen 
          name="CategoryList" 
          component={ListItemsScreen}   
          options={{
            headerTitle: 'Category List'} }
          />
          <Stack.Screen 
          name="ItemDetail"  
          component={ItemDetailScreen}           
          options={{
            headerTitle: 'Item Details'} }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }

export default CategoryStackNavigation;
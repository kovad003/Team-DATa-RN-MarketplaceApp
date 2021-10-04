import React, { Component, useState } from "react";
import { StyleSheet, View, ScrollView, Text, FlatList } from "react-native";
import SwitchFilter from "../components/SwitchFilter";
import ScrollDownList from "../components/ScrollDownList";
import PriceSetter from "../components/PriceSetter";
import SearchBar from "../components/SearchBar";

// Constants
import TextStyling from '../constants/fontstyling'
import colors from "../constants/colors";

function SearchScreen(props) {
  // Creating mock data
  const categoryList = [
    {id: '1', name: 'Furniture'},
    {id: '2', name: 'Sports'},
    {id: '3', name: 'Clothes'},
    {id: '4', name: 'Electronics'},
    {id: '5', name: 'Other'},
  ]
  console.log('categoryList: ' + categoryList);

  return (
    <View style={styles.container}>

      <View style={styles.searchBar}>
        <SearchBar style={styles.searchBar}/>
      </View>
        <ScrollView horizontal={false} contentContainerStyle={styles.scrollArea_contentContainerStyle}>
          {/* ---------------------------------------------------------------------------- */}
          <View style={styles.categoriesContainer}>
            <Text style={TextStyling.textBlackLarge}>Categories</Text>
            <SwitchFilter selectorLabel="All"></SwitchFilter>
            <FlatList //FlatList shouldnt be used with ScrollView
                keyExtractor={item=>item.id}
                data={categoryList}
                renderItem={itemData => <SwitchFilter label={itemData.item.name}/>}
            />
          </View>
          {/* ---------------------------------------------------------------------------- */}
          <View style={styles.locationContainer}>
            <Text style={TextStyling.textBlackLarge}>Location</Text>
            <ScrollDownList label="Select Location..."/>
            <ScrollDownList label="Select Radius..."/>
          </View>
          {/* ---------------------------------------------------------------------------- */}
          <View>
            <Text style={TextStyling.textBlackLarge}>Price</Text>
            <PriceSetter label='Min: €'/>
            <PriceSetter label='Max: €'/>
          </View>
          {/* ---------------------------------------------------------------------------- */}
        </ScrollView>     
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    
  },
  container: {
    flex: 1,
    backgroundColor: colors.light3,
  },
  categoriesContainer: {

  },
  searchBar: {
    height: 90,
    //flex: 0.15,
    // backgroundColor set in then component file
  }
});

export default SearchScreen;

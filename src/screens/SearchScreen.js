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

//usestat -> causing cont rendering issues bc add function is not wired to a button
/* 
  const [categoryList, addToCategoryList] = useState([]);

  const addNewCategory=(idParam, nameParam)=>{
    addToCategoryList(categoryList=>[...categoryList, {id:idParam, name:nameParam}])
  }

  addNewCategory('1', 'Furniture');
 */

  const categoryList = [
    /* {id: '0', name: 'All'}, */
    {id: '1', name: 'Furniture'},
    {id: '2', name: 'Sports'},
    {id: '3', name: 'Clothes'},
    {id: '4', name: 'Electronics'},
    {id: '5', name: 'Other'},
 /*    {id: '6', name: 'Clothes'},
    {id: '7', name: 'Electronics'},
    {id: '8', name: 'Other'},
    {id: '9', name: 'Clothes'},
    {id: '10', name: 'Electronics'},
    {id: '11', name: 'Other'}, */
  ]
  
  console.log('categoryList: ' + categoryList);

  return (
    <View style={styles.container}>
      <View >
        <SearchBar/>
      </View>
        <View>
          {/* ---------------------------------------------------------------------------- */}
          <View>
            <Text style={styles.fontTitle}>Categories:</Text>
            <ScrollDownList label="Set Category..."/>
            {/* <ScrollView horizontal={false}>
              {categoryList.map((category)=>
                <SwitchFilter label={category.name}></SwitchFilter>)}
            </ScrollView> */}
            {/* <SwitchFilter label='All' value='true'/> */}
            {/* <FlatList //FlatList shouldnt be used with ScrollView
                keyExtractor={item=>item.id}
                data={categoryList}
                renderItem={itemData => <SwitchFilter label={itemData.item.name}/>}
            /> */}   
          </View>
          {/* ---------------------------------------------------------------------------- */}
          <View>
            <Text style={styles.fontTitle}>Location:</Text>
            <ScrollDownList label="Set Location..."/>
            <ScrollDownList label="Set Radius..."/>
          </View>
          {/* ---------------------------------------------------------------------------- */}
          <View>
            <Text style={styles.fontTitle}>Price:</Text>
            <ScrollDownList label="Set Price..."/>
            {/* <PriceSetter label='Min: €'/>
            <PriceSetter label='Max: €'/> */}
          </View>
          {/* ---------------------------------------------------------------------------- */}
        </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.light3,
    backgroundColor: '#f5eeeb',
    // backgroundColor: '#e7ecf2'
  },
  fontTitle: {
    marginLeft: 5,
    marginTop: 15,
    //fontFamily: 'cake-n-truffles',
    fontSize: 26,
    color: '#2d3553',
  }
});

export default SearchScreen;

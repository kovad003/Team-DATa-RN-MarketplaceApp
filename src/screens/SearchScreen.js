import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, FlatList } from "react-native";
import SwitchFilter from "../components/SwitchFilter";
import ScrollDownList from "../components/ScrollDownList";
import PriceSetter from "../components/PriceSetter";
import SearchBar from "../components/SearchBar";

// Constants
import TextStyling from '../constants/fontstyling'
import colors from "../constants/colors";
import MenuSwipableRow from "../components/swipable/MenuSwipableRow";
import MenuRightSwipeAction from "../components/swipable/MenuRightSwipeAction";
import MenuLeftSwipeAction from "../components/swipable/MenuLeftSwipeAction";

function SearchScreen(props) {
const [hasMessage, setMessage] = useState(false);
const [messageDisplayed, setMessageDisplayed] = useState('');
const [items, setItems] = useState([]);
const [itemList, addItemToList] = useState([]);
const [isLoading, setLoading] = useState(true);
const [isVisible, setVisibility] = useState(false);
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

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function onPressFunction(){
    console.log('swipable was pressed');
  }
  function hello(){
    console.log('hello');
  }
  useEffect(() => {
    console.log('useEffect(() => {'); 
      if (isLoading==true){
        //fetchData();
        setLoading(false);
    }
  });
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <View style={styles.container}>
      <View >
        <SearchBar/>
      </View>
        <View>
          {/* ---------------------------------------------------------------------------- */}
            <MenuSwipableRow 
              iconMain="tag-multiple"
              iconColor="black"
              label="Category"
              onPress={onPressFunction}
             /*  renderLeftActions = {MenuLeftSwipeAction} */
             renderLeftActions = {() => (
              <MenuLeftSwipeAction 
                onPress={() => onPressFunction()} 
              />
            )}
              renderRightActions = {() => (
              <MenuRightSwipeAction 
                onPress={() => onPressFunction()} 
              />
            )}
              
              /* renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )} */

              /* onRef={(ref) => {this.inputs['projectDescription'] = ref;}} */
            />
            {/* const Greeting = ({ greeting }) => <h1>{greeting}</h1>; */}
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
            <MenuSwipableRow
              iconMain="map-marker"
              iconColor="black"
              label="Location"
              onPress={onPressFunction}
              renderLeftActions = {() => (
              <MenuLeftSwipeAction 
                onPress={() => onPressFunction()} 
              />
            )}
              renderRightActions = {() => (
              <MenuRightSwipeAction 
                onPress={() => onPressFunction()} 
              />
            )}
            />
            <MenuSwipableRow 
              iconMain="database"
              iconColor="black"
              label="Price"
              onPress={onPressFunction}
              renderLeftActions = {() => (
              <MenuLeftSwipeAction 
                onPress={() => onPressFunction()} 
              />
            )}
              renderRightActions = {() => (
              <MenuRightSwipeAction 
                onPress={() => onPressFunction()} 
              />
            )}
            />
            <MenuSwipableRow 
              iconMain="eye"
              iconColor="black"
              label="Condition"
              onPress={onPressFunction}
              renderLeftActions = {() => (
              <MenuLeftSwipeAction 
                onPress={() => onPressFunction()} 
              />
            )}
              renderRightActions = {() => (
              <MenuRightSwipeAction 
                onPress={() => onPressFunction()} 
              />
            )}
            />  
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

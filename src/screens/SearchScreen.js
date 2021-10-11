import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, FlatList, Modal, Button } from "react-native";
import SwitchFilter from "../components/SwitchFilter";
import ScrollDownList from "../components/ScrollDownList";
import PriceSetter from "../components/PriceSetter";
import SearchBar from "../components/SearchBar";

// Constants
import TextStyling from '../constants/fontstyling'
import colors from "../constants/colors";
import MenuSwipableRow from "../components/swipable/MenuSwipableRow";
import MenuSwipeActionResetFilter from "../components/swipable/MenuSwipeActionResetFilter";
import MenuSwipeActionFilter from "../components/swipable/MenuSwipeActionFilter";
import ListItemToSelect from "../components/swipable/ListItemToSelect";

const SearchScreen = (props) => {
  const [hasMessage, setMessage] = useState(false);
  const [messageDisplayed, setMessageDisplayed] = useState('');
  const [region, setRegion] = useState([]);
  const [regionList, addRegionToList] = useState([null]);
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisibility] = useState(false);
  const [isCityListVisible, setCityListVisibility] = useState(false);


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function onPressFunction(){
    console.log('swipable was pressed');
    setLoading(true);
  }
  function hello(){
    console.log('hello');
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Swipe Actions ------------------------------------ 
  const showModal=()=>{
    setVisibility(true);
    setLoading(true);

  }
  const clearSelection=()=>{
    console.log("clear selection");
  }
  const onCancel=()=>{
    setVisibility(false);
    setLoading(false);
  }
  // --------------------------------------------------
  // ListItem actions ---------------------------------
  const markSelection=(selectedItem)=>{
    console.log("selected item: " +  JSON.stringify(selectedItem));
    setCityListVisibility(true);
    setVisibility(false);
  }
  // --------------------------------------------------

  // *** GET ***
  async function getAllRegion() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      // response = await fetch("http://10.0.2.2:8080/rest/regionservice/getallregion");
      response = await fetch("http://10.0.2.2:8080/rest/regionservice/getallregion");
    }
    catch(error){
      console.log(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      console.log(responseData);//Just for checking.....
      //setRegion(responseData);
      //addRegionToList(regionList =>[...regionList, responseData]);
      addRegionToList(responseData);
      console.log('regionList: ' + regionList)
      
      //addRegionToList(responseData);
    }
    catch(error){
      console.log(error);
    }
  }
  async function getAllCityInRegion(regionId) {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      // response = await fetch("http://10.0.2.2:8080/rest/regionservice/getallregion");
      response = await fetch(`http://10.0.2.2:8080/rest/regionservice/getallcityfromregion/${regionId}`); //Template literal `${}`
    }
    catch(error){
      console.log(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      console.log(responseData);//Just for checking.....
      //setRegion(responseData);
      //addRegionToList(regionList =>[...regionList, responseData]);
      addRegionToList(responseData);
      console.log('regionList: ' + regionList)
      
      //addRegionToList(responseData);
    }
    catch(error){
      console.log(error);
    }
  }


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Will Rerender the screen in case the isLoading boolean is set to true
  useEffect(() => {
    console.log('useEffect(() => {'); 
      if (isLoading==true){
        getAllRegion();
        setLoading(false);
    }
  });

  return (
    <View style={styles.container}>
      <View >
        <SearchBar/>
      </View>
        <View>
{/* MODALS -------------------------------------------------------------------------------- */}
            <Modal visible={isVisible}>
              <FlatList
                keyExtractor={(region) => region.regionId.toString()} 
                data={regionList}
                renderItem={regionData =>
                  <ListItemToSelect 
                    id={regionData.item.regionId}
                    name={regionData.item.regionName}
                    onSelect={() => markSelection(regionData.item)}
                    onPress={() => markSelection(regionData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel} />
            </Modal>
             
{/* --------------------------------------------------------------------------------------- */}
            <MenuSwipableRow 
              iconMain="tag-multiple"
              iconColor="black"
              label="Category"
              onPress={onPressFunction}
              renderLeftActions = {() => (
               <MenuSwipeActionResetFilter 
                onPress={() => clearSelection()} 
              />      
            )}
              renderRightActions = {() => (
              <MenuSwipeActionFilter 
                onPress={() => showModal()} 
              />
            )}
            />

            <MenuSwipableRow
              iconMain="map-marker"
              iconColor="black"
              label="Region"
              onPress={onPressFunction}
              renderLeftActions = {() => (
              <MenuSwipeActionResetFilter  
                onPress={() => clearSelection()}
              />
            )}
              renderRightActions = {() => (
              <MenuSwipeActionFilter 
                onPress={() => showModal()} 
              />
            )}
            />
            <MenuSwipableRow 
              iconMain="database"
              iconColor="black"
              label="Price"
              onPress={onPressFunction}
              renderLeftActions = {() => (
              <MenuSwipeActionResetFilter  
                onPress={() => clearSelection()} 
              />
            )}
              renderRightActions = {() => (
              <MenuSwipeActionFilter 
                onPress={() => showModal()} 
              />
            )}
            />
            <MenuSwipableRow 
              iconMain="eye"
              iconColor="black"
              label="Condition"
              onPress={onPressFunction}
              renderLeftActions = {() => (
              <MenuSwipeActionResetFilter 
                onPress={() => clearSelection()} 
              />
            )}
              renderRightActions = {() => (
              <MenuSwipeActionFilter 
                onPress={() => showModal()}
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

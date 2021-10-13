/**
 * Summary: A class that can be used by the customer to make an advanced search in the sore DB.
 *
 * Description: This screen can be displayed by pressing the magnifier icon/button at the bottom navigation bar. The Screen consist of the following main parts: 
 *  - Header -> part of the stack navigation (configured by Hossein)
 *  - SearchBar -> Custom component, will trigger the search
 *  - SwipableMenuRows -> By swiping it will bring up a modal screen
 *  - Modal screens -> the customer can configure the search parameters
 *
 * @link   ./src/screens/SearchScreen.js
 * @file   This files defines the SearchScreen.js class.
 * @author Daniel Kovacs.
 * @since  03.10.2021
 */
 
/** jshint {inline configuration here} */
// IMPORTS ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Standard Imports
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, FlatList, Modal, Button } from "react-native";

// Component Imports
import SwitchFilter from "../components/SwitchFilter";
import ScrollDownList from "../components/ScrollDownList";
import PriceSetter from "../components/PriceSetter";
import SearchBar from "../components/SearchBar";
import MenuSwipableRow from "../components/swipable/MenuSwipableRow";
import MenuSwipeActionResetFilter from "../components/swipable/MenuSwipeActionResetFilter";
import MenuSwipeActionFilter from "../components/swipable/MenuSwipeActionFilter";
import ListItemToSelect from "../components/swipable/ListItemToSelect";

// Constants
import TextStyling from '../constants/fontstyling'
import colors from "../constants/colors";
// END OF IMPORTS ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/**
 * [Main function in SearchScreen class]
 * @param  {[any]} props [Will take props as param]
 * @return {[type]}      [Screen will be returned for display]
 */
const SearchScreen = (props) => {
// STATE VARIABLES ========================================================================================================
  // Handle Accessibility
  const [isCitySwipeAccessable, setCitySwipeAccessibility] = useState({isEnabled:false, colorDisplayed:'lightgrey'});

  // Handle Loading
  const [isLoadingRegions, setLoadingRegions] = useState(true); // Will trigger Data transfer
  const [isLoadingCities, setLoadingCities] = useState(false); // Will trigger Data transfer

  // Handle Category Data From DB
  const [categoryList, addCategoryToList] = useState([null]); // Will store available categories from DB (JAVA)
  const [selectedCategory, setCategory] = useState(); // Will be used to select a category
  
  // Handle Region Data From DB
  const [regionList, addRegionToList] = useState([null]); // Will store available regions from DB (JAVA)
  const [selectedRegionId, setRegionId] = useState(); // Will be used to fetch available cities in region (JAVA)

  // Handle City Data From DB
  const [cityList, addCityToList] = useState([null]); // Will store available cities per region
  const [selectedCity, setSelectedCity] = useState({}); // JSON taken from DB (JAVA)

  // Handle Swipe Button Display => For technical name has to be saved separately
  const [categoryNameToDisplay, setCategoryNameToDisplay] = useState("None"); 
  const [regionNameToDisplay, setRegionNameToDisplay] = useState("None");
  const [cityNameDisplay, setCityNameToDisplay] = useState("None");

  // Handle Modals
  const [isCategoryModalVisible, setCategoryModalVisibility] = useState(false); // Will show/hide category selection modal
  const [isRegionModalVisible, setRegionModalVisibility] = useState(false); // Will show/hide Region selection modal
  const [isCityModalVisible, setCityModalVisibility] = useState(false); // Will show/hide City selection modal

  // Handle Messages To Display
  const [hasMessage, setMessage] = useState(false);
  const [messageDisplayed, setMessageDisplayed] = useState('');
// END OF STATE VARIABLES =================================================================================================

// CUSTOM FUNCTIONS =======================================================================================================
  // TRASH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function onPressFunction(){
    console.log('swipable was pressed');
    console.log("regionList: " + JSON.stringify(regionList));
    //setLoading(true);
  }
  function hello(){
    console.log('hello');
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Swipe Controller ---------------------------------
  /**
   * [someFunction description]
   * @param  {[type]} arg1 [description]
   * @param  {[type]} arg2 [description]
   * @return {[type]}      [description]
  */
  const changeCitySwipeAccessibility=()=>{
    setCitySwipeAccessibility({isEnabled:true, colorDisplayed:"white"});
  }
  // --------------------------------------------------
  // Swipe Actions ------------------------------------ 
  const showCategoryModal=()=>{
    setCategoryModalVisibility(true);
  }
  const showRegionModal=()=>{
    setRegionModalVisibility(true);
  }
  const showCityModal=()=>{
    setCityModalVisibility(true);
  }
  const clearCitySelection=()=>{
    console.log("clear selection");
  }
  const onCancel=()=>{
    setCategoryModalVisibility(false);
    setRegionModalVisibility(false);
    setCityModalVisibility(false);
    setLoadingRegions(false);
  }
  // --------------------------------------------------
  // Handle Selections ---------------------------------
  const handleCategorySelection=(selectedItem)=>{
    setCategoryModalVisibility(false);
    setCategory(selectedItem.cityId);
    setCategoryNameToDisplay(selectedItem.title)
    // ToConsole
    console.log("selected item: " +  JSON.stringify(selectedItem));
    console.log("setRegion to " +selectedItem.regionId);
  }
  const handleRegionSelection=(selectedItem)=>{
    setRegionModalVisibility(false);
    setRegionId(selectedItem.regionId);
    setRegionNameToDisplay(selectedItem.regionName)
    changeCitySwipeAccessibility();
    setLoadingCities(true);
    // ToConsole
    console.log("selected item: " +  JSON.stringify(selectedItem));
    console.log("setRegion to " +selectedItem.regionId);
  }
  const handleCitySelection=(selectedItem)=>{
    setSelectedCity(selectedItem);
    setCityNameToDisplay(selectedItem.cityName);
    setRegionModalVisibility(false);
    setCityModalVisibility(false);
    // ToConsole
    console.log("selected item: " +  JSON.stringify(selectedItem));
  }
  // --------------------------------------------------
// END OF CUSTOM FUNCTIONS ================================================================================================

// SERVICE FUNCTIONS ======================================================================================================
  // *** GET ***
  async function getAllCategory() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch("http://10.0.2.2:8080/rest/categoryservice/getall");
    }
    catch(error){
      console.log(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      addCategoryToList(responseData);
      // To console
      // console.log(responseData);
      console.log('categoryList: ' + categoryList)
    }
    catch(error){
      console.log(error);
    }
  }

  // *** GET ***
  async function getAllRegion() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch("http://10.0.2.2:8080/rest/regionservice/getallregion");
    }
    catch(error){
      console.log(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      addRegionToList(responseData);
      // Toonsole
      // console.log(responseData);
      console.log('regionList: ' + regionList)
    }
    catch(error){
      console.log(error);
    }
  }
  // *** GET ***
  async function getAllCityInRegion(regionId) {
    console.log('regionId = ' + regionId);
    // Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      // This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch(`http://10.0.2.2:8080/rest/regionservice/getallcityfromregion/${regionId}`); //Template literal `${}`
    }
    catch(error){
      console.log(error);
    }
    try{
      // Getting json from the response
      let responseData = await response.json();
      addCityToList(responseData.regionCities);
      // console.log("cities in region" + JSON.stringify(responseData.regionCities));
    }
    catch(error){
      console.log(error);
    }
  }
// END OF SERVICE FUNCTIONS ===============================================================================================

// USE EFFECT FUNCTION ====================================================================================================
  // Will Rerender the screen in case the isLoading boolean is set to true
  useEffect(() => {
    console.log('useEffect(() => {'); 
      if (isLoadingRegions==true){
        getAllCategory();
        getAllRegion();   
        setLoadingRegions(false);
      }
      if(isLoadingCities==true){
          getAllCityInRegion(selectedRegionId);
          // changeCitySwipeAccessibility();
          setLoadingCities(false);
      }
  });
// ========================================================================================================================

// DATA TO BE RENDERED=====================================================================================================
  return (
    <View style={styles.container}>
      <View >
        <SearchBar/>
      </View>
        <View>
{/* MODALS -------------------------------------------------------------------------------- */}
            <Modal visible={isCategoryModalVisible}>
              <Text style={styles.modalTitle}>Available Categories</Text>
              <FlatList
                keyExtractor={(category) => category.id.toString()} 
                data={categoryList}
                renderItem={categoryData =>
                  <ListItemToSelect 
                    id={categoryData.item.id}
                    name={categoryData.item.title}
                    onPress={() => handleCategorySelection(categoryData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel} />
            </Modal>
{/*                       *******************                      */}
            <Modal visible={isRegionModalVisible}>
              <Text style={styles.modalTitle}>Available Regions</Text>
              <FlatList
                keyExtractor={(region) => region.regionId.toString()} 
                data={regionList}
                renderItem={regionData =>
                  <ListItemToSelect 
                    id={regionData.item.regionId}
                    name={regionData.item.regionName}
                    onPress={() => handleRegionSelection(regionData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel} />
            </Modal>
{/*                       *******************                      */}
            <Modal visible={isCityModalVisible}>
              <Text style={styles.modalTitle}>Region: {regionNameToDisplay}</Text>
              <FlatList
                keyExtractor={(city) => city.cityId.toString()}
                data={cityList}
                renderItem={cityData =>
                  <ListItemToSelect 
                    id={cityData.item.cityId}
                    name={cityData.item.cityName}
                    onPress={() => handleCitySelection(cityData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel} />
            </Modal>
{/*                       *******************                      */}
            <Modal visible={true}>
              <Text style={styles.modalTitle}>Select a price range:</Text>
              <PriceSetter
                /*  onValueChange={} */
              />
              <PriceSetter/>
              <Button title='Cancel' onPress={onCancel} />
            </Modal>
{/*                       *******************                      */}
             
{/* --------------------------------------------------------------------------------------- */}
            <MenuSwipableRow 
              value={categoryNameToDisplay}
              iconMain="tag-multiple"
              iconColor="black"
              label="Category"
              onPress={onPressFunction}
              renderLeftActions = {() => (
               <MenuSwipeActionResetFilter 
                onPress={() => clearCitySelection()} 
              />      
            )}
              renderRightActions = {() => (
              <MenuSwipeActionFilter 
                onPress={() => showCategoryModal()} 
              />
            )}
            />
            <MenuSwipableRow
              value={regionNameToDisplay}
              iconMain="map"
              iconColor="black"
              label="Region"
              onPress={onPressFunction}
              renderLeftActions = {() => (<MenuSwipeActionResetFilter  
                onPress={() => clearCitySelection()} />)}
              renderRightActions = {() => (<MenuSwipeActionFilter 
                onPress={() => showRegionModal()} />)}
            />
            <MenuSwipableRow
              value={cityNameDisplay}
              enabled={isCitySwipeAccessable.isEnabled}
              backgroundColor={isCitySwipeAccessable.colorDisplayed}
              iconMain="map-marker"
              iconColor="black"
              label="City"
              onPress={onPressFunction}
              renderLeftActions = {() => (<MenuSwipeActionResetFilter  
                onPress={() => clearCitySelection()} />)}
              renderRightActions = {() => (<MenuSwipeActionFilter 
                onPress={() => showCityModal()}/>)}
            />
            <MenuSwipableRow 
              iconMain="database"
              iconColor="black"
              label="Price"
              onPress={onPressFunction}
              renderLeftActions = {() => (<MenuSwipeActionResetFilter  
                onPress={() => clearCitySelection()}/>)}
              renderRightActions = {() => (<MenuSwipeActionFilter 
                onPress={() => showRegionModal()}/>)}
            />
            <MenuSwipableRow 
              iconMain="eye"
              iconColor="black"
              label="Condition"
              onPress={onPressFunction}
              renderLeftActions = {() => (<MenuSwipeActionResetFilter 
                onPress={() => clearCitySelection()}/>)}
              renderRightActions = {() => (<MenuSwipeActionFilter 
                onPress={() => showRegionModal()}/>)}
            />    
        </View>  
    </View>
  );
}
// ========================================================================================================================

// STYLING FUNCTIONS ======================================================================================================
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
  },
  modalTitle:{
    textAlign:'center',
    marginBottom: 15,
    padding: 5,
    //fontFamily: 'cake-n-truffles',
    fontSize: 20,
    fontWeight: "bold",
    color: '#2d3553',
    backgroundColor: colors.light1,
  },
});
// ========================================================================================================================
export default SearchScreen;
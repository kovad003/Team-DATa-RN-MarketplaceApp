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
 * @author Daniel Kovacs
 * @since  03.10.2021
 */
 
/** jshint {inline configuration here} */
// IMPORTS ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Standard Imports
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, FlatList, Modal, Button, ActivityIndicator, Alert } from "react-native";

// Component Imports
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

  // Handle Loading => Will trigger Data transfer
  const [isLoadingCategories, setLoadingCategories] = useState(true);
  const [isLoadingRegions, setLoadingRegions] = useState(true);
  const [isLoadingCities, setLoadingCities] = useState(false);
  const [isSearchingItems, setSearchingItems] = useState(false); // Will trigger search
  const [isLoadingSearchResults, setLoadingSearchResults] = useState(false);
  const [isReloadingPriceModal, setPriceModalReload] = useState(false);
  

  // Handle Search
  const [searchTitle, setSearchTitle] = useState();

  // Handle Category Data
  const [categoryList, addCategoryToList] = useState([null]); // Will store available categories from DB (JAVA)
  const [selectedCategory, setCategory] = useState(); // Will be used to select a category
  
  // Handle Region Data
  const [regionList, addRegionToList] = useState([null]); // Will store available regions from DB (JAVA)
  const [selectedRegionId, setRegionId] = useState(); // Will be used to fetch available cities in region (JAVA)

  // Handle City Data
  const [cityList, addCityToList] = useState([null]); // Will store available cities per region
  const [selectedCity, setSelectedCity] = useState({}); // JSON taken from DB (JAVA)

  // Handle Condition Data
  const [conditionList, addConditionToList] = useState(["very new", "new", "used", "old"]);
  const [selectedCondition, setSelectedCondition] = useState({});

  // Handle Swipe Button Display => For technical name has to be saved separately
  const [categoryNameToDisplay, setCategoryNameToDisplay] = useState('Not Selected'); 
  const [regionNameToDisplay, setRegionNameToDisplay] = useState('Not Selected');
  const [cityNameDisplay, setCityNameToDisplay] = useState('Not Selected');
  const [minPriceToDisplay, setMinPriceToDisplay] = useState(0); 
  const [maxPriceToDisplay, setMaxPriceToDisplay] = useState(100);
  const [conditionNameToDisplay, setConditionNameToDisplay] = useState('Not Selected');

  // Handle Modals => Will show/hide selection modals
  const [isCategoryModalVisible, setCategoryModalVisibility] = useState(false);
  const [isRegionModalVisible, setRegionModalVisibility] = useState(false);
  const [isCityModalVisible, setCityModalVisibility] = useState(false);
  const [isPriceModalVisible, setPriceModalVisibility] = useState(false);
  const [isConditionModalVisible, setConditionModalVisibility] = useState(false);

  // Disable/Enable Price Setter
  const [isSliderEnabled, setSliderAccess] = useState(true);

  // Validation 
  const [inputValidator, setInputValidator] = useState({
    title: false,
    category: false,
    region: false,
    city: false,
    minPrice: true, // it is a value by default
    maxPrice: true, // it is a value by defult
    condition: false,
  });

// END OF STATE VARIABLES =================================================================================================

// CUSTOM FUNCTIONS =======================================================================================================
  // TRASH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function onPressFunction(){
    //console.log('swipable was pressed');
    //console.log("regionList: " + JSON.stringify(regionList));
    //setLoading(true);
  }
  function hello(){
    console.log('hello');
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Alert

  const priceAlert = () =>
        Alert.alert(
        "Wrong value!",
        "Max and min prices cannot exceed each other!",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => setPriceModalVisibility(true) }
        ]);


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
  // Swipe & Button Actions ------------------------------------ 
  const showCategoryModal=()=>{
    setCategoryModalVisibility(true);
  }
  const showRegionModal=()=>{
    setRegionModalVisibility(true);
  }
  const showCityModal=()=>{
    setCityModalVisibility(true);
  }
  const showPriceModal=()=>{
    setPriceModalVisibility(true);
  }
  const showConditionModal=()=>{
    setConditionModalVisibility(true);
  }
  const clearCitySelection=()=>{
    console.log("clear selection");
  }
  const onCancel=()=>{
    setCategoryModalVisibility(false);
    setRegionModalVisibility(false);
    setCityModalVisibility(false);
    setPriceModalVisibility(false);
    setConditionModalVisibility(false);
    setLoadingRegions(false);
  }
  // --------------------------------------------------
  // Validation ---------------------------------
  const validation=()=>{
    var isOk = false;
    var counter = 0;
    for (const validationTool of Object.entries(inputValidator)) {
      //console.log(item[0] + " -> " + item[1])
      if(validationTool[1] == false){
        counter++;
      }
      else{
        console.log("Input field is incomplete!")
      }
      console.log(validationTool[0] + " -> " + validationTool[1]);
      console.log("Mistakes counted so far: " + counter);
    }
    if (counter == 0) {
      isOk = true;
      console.log('Validation Ok...');
    }
    return isOk
  }
  // --------------------------------------------------
  // Handle Search & Selections ---------------------------------
  const handleSearch=()=>{
    if(validation() == true){
      setSearchingItems(true);
    } else{
      alert("All fields must be completed!");
    }  
  }
  const handleTextInput=(enteredText)=>{
    setSearchTitle(enteredText);
    if(enteredText == "" || enteredText == null || enteredText == undefined){
      inputValidator.title = false;
    } else{
      inputValidator.title = true;
    }

    // ToConsole
    console.log("SearchTitle: " +  enteredText);
  }
  const handleCategorySelection=(selectedItem)=>{
    setCategoryModalVisibility(false);
    setCategory(selectedItem.cityId);
    setCategoryNameToDisplay(selectedItem.title)
    inputValidator.category = true;
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
    inputValidator.region = true;
    // ToConsole
    console.log("selected item: " +  JSON.stringify(selectedItem));
    console.log("setRegion to " +selectedItem.regionId);
  }
  const handleCitySelection=(selectedItem)=>{
    setSelectedCity(selectedItem);
    setCityNameToDisplay(selectedItem.cityName);
    setRegionModalVisibility(false);
    setCityModalVisibility(false);
    inputValidator.city = true;
    // ToConsole
    console.log("selected item: " +  JSON.stringify(selectedItem));
  }
  const takeMinPriceInput=(enteredValue)=>{
    if(maxPriceToDisplay <= enteredValue){
      setPriceModalVisibility(false);
      priceAlert();
      
      //setPriceModalReload(true)
      //alert("Error: " + enteredValue + "Min price cannot exceed max price!");
      //setSliderAccess(false);
      //setPriceModalReload(true);
      //setPriceModalVisibility(false);
      /* setLoadingSearchResults(true); */
    } else {
      setMinPriceToDisplay(enteredValue.toString());
    } 
    // ToConsole
    // console.log("min Price: " +  scaledValue);
  }
  const takeMaxPriceInput=(enteredValue)=>{
    if(minPriceToDisplay >= enteredValue){
      setPriceModalVisibility(false);
      priceAlert();
      
      //setPriceModalReload(true)
      //alert("Error: " + enteredValue + "Min price cannot exceed max price!");
      //setSliderAccess(false);
      //setPriceModalVisibility(false);
      //setPriceModalReload(true);
      //setPriceModalVisibility(false);
      /* setLoadingSearchResults(true); */
    } else {
      setMaxPriceToDisplay(enteredValue.toString());
    }
    // ToConsole
    // console.log("max Price: " +  scaledValue);
  }
  const handleConditionSelection=(selectedItem)=>{
    setSelectedCondition(selectedItem);
    setConditionNameToDisplay(selectedItem);
    setConditionModalVisibility(false);
    inputValidator.condition = true;
    // ToConsole
    //console.log("selected item: " +  JSON.stringify(selectedItem));
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
      alert("Error in Service Method: " + error);
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
      alert("Error in Response Data: " + error);
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
      alert("Error in service method: " + error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      addRegionToList(responseData);
      // Toonsole
      console.log('regionList: ' + regionList)
    }
    catch(error){
      alert("Error in Response Data: " + error);
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
      //console.log("Fetching response... => response: " + JSON.stringify(response, null, 4))
    }
    catch(error){
      console.log(error);
      alert("Error in service method: " + error);
    }
    try{
      // Getting json from the response
      let responseData = await response.json();
      addCityToList(responseData.regionCities);
      // console.log("cities in region" + JSON.stringify(responseData.regionCities, null, 4));
    }
    catch(error){
      console.log(error);
      alert("Error in Response Data: " + error);
    }
  }

// *** POST ***
  async function searchForItems(title, category, city, priceMin, priceMax, condition) {
    console.log('async function searchForItems(title, category, city, priceMin, priceMax, condition) {');
    console.log("title: " + title + ", category: " + category + ", city: " + city +  
    ", priceMin: " + priceMin, ", priceMax:" + priceMax, ", condition: " + condition);
    let response = null;
    let requestOptions = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        itemTitle: title.toString(),
        categoryTitle: category.toString(),
        location: city.toString(),
        minPrice: priceMin*1, // *1 -> numbers only
        maxPrice: priceMax*1, // *1 -> numbers only
        condition: condition.toString(),
      })
    };
    console.log("body: " + requestOptions.body);
    try {
      response = await fetch("http://10.0.2.2:8080/rest/searchservice/searchforitems", requestOptions)
      // console.log("Fetching response... => response: " + JSON.stringify(response, null, 4));
    } catch (error) {
      alert("Error in service method: " + error);
    }
    try {
      let responseData = await response.json();
      //console.log('responseData: ' + JSON.stringify(responseData, null, 4));

      if(responseData.length == 0 || response == undefined){
        alert("No results! Please change filter settings")
      } else{
        props.navigation.navigate('SearchResult', {result: responseData});
      }
      //HH - navigate to SearchResult page 
      
      responseData=null;
      
    } catch (error) {
      alert("Error in Response Data: " + error);
    }
  }
// END OF SERVICE FUNCTIONS ===============================================================================================

// USE EFFECT FUNCTION ====================================================================================================
  // Will Rerender the screen in case the isLoading boolean is set to true
  useEffect(() => {
    console.log('useEffect(() => {');
      if (isLoadingCategories==true){
        getAllCategory();
        setLoadingCategories(false);
      } 
      if (isLoadingRegions==true){
        getAllRegion();
        setLoadingRegions(false);
      }
      if(isLoadingCities==true){
        getAllCityInRegion(selectedRegionId);
        setLoadingCities(false);
      }
      if(isSearchingItems==true){
        searchForItems(searchTitle, categoryNameToDisplay, cityNameDisplay, minPriceToDisplay, maxPriceToDisplay, conditionNameToDisplay);
        setSearchingItems(false);
      }
      if(isReloadingPriceModal == true){
        setPriceModalVisibility(true);
      }
      if(isSliderEnabled == false){
        setSliderAccess(true);
        setPriceModalVisibility(true);
      }
/*       if(isLoadingSearchResults == true){
        setLoadingSearchResults(false);
      } */
  });
// ========================================================================================================================

// DATA TO BE RENDERED=====================================================================================================
if (isLoadingSearchResults==true) {
  console.log('if(isLoading==true) {');
  return (
    <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
      {<ActivityIndicator size="large" color="#00ff00" />}
    </View>
  );
} else {
    return (
      <View style={styles.container}>
        <View >
          <SearchBar onChangeText={handleTextInput} onPress={handleSearch}/>
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
              <Modal visible={isPriceModalVisible}>
                <Text style={styles.modalTitle}>Select a price range:</Text>
                <PriceSetter title="Max Price:"
                  disabled = {!isSliderEnabled}
                  onTouchEnd = {() => console.log("slider released")}
                  onValueChange = {takeMaxPriceInput}
                  displayValue={maxPriceToDisplay*1}
                  scrollValue = {maxPriceToDisplay*1}
                  minimumValue = {0}
                  maximumValue = {1000}
                />
                <PriceSetter title="Min Price:"
                  disabled = {!isSliderEnabled}
                  onTouchEnd = {() => console.log("slider released")}
                  onValueChange = {takeMinPriceInput}
                  displayValue = {minPriceToDisplay*1}
                  scrollValue = {minPriceToDisplay*1}
                  minimumValue = {0}
                  maximumValue = {1000}
                />
                <Button title='Ok' onPress={onCancel}/>
              </Modal>
  {/*                       *******************                      */}
              <Modal visible={isConditionModalVisible}>
                <Text style={styles.modalTitle}>Select a condition:</Text>
                <FlatList
                  keyExtractor={(condition) => condition}
                  data={conditionList}
                  renderItem={conditionData =>
                    <ListItemToSelect 
                      name={conditionData.item}
                      onPress={() => handleConditionSelection(conditionData.item)}
                    />}
                />
                <Button title='Cancel' onPress={onCancel}/>
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
                value={"Min: €" + minPriceToDisplay + " - Max: €" + maxPriceToDisplay}
                iconMain="database"
                iconColor="black"
                label="Price"
                onPress={onPressFunction}
                renderLeftActions = {() => (<MenuSwipeActionResetFilter  
                  onPress={() => clearCitySelection()}/>)}
                renderRightActions = {() => (<MenuSwipeActionFilter 
                  onPress={() => showPriceModal()}/>)}
              />
              <MenuSwipableRow 
                value={conditionNameToDisplay}
                iconMain="eye"
                iconColor="black"
                label="Condition"
                onPress={onPressFunction}
                renderLeftActions = {() => (<MenuSwipeActionResetFilter 
                  onPress={() => clearCitySelection()}/>)}
                renderRightActions = {() => (<MenuSwipeActionFilter 
                  onPress={() => showConditionModal()}/>)}
              />    
          </View>  
      </View>
    );
  }
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
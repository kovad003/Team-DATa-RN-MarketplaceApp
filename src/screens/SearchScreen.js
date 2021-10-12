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
  const [isLoadingRegions, setLoadingRegions] = useState(true);
  const [isLoadingCities, setLoadingCities] = useState(false);

  const [hasMessage, setMessage] = useState(false);
  const [messageDisplayed, setMessageDisplayed] = useState('');

  const [regionList, addRegionToList] = useState([null]);
  const [selectedRegionId, setRegionId] = useState();

  const [cityList, addCityToList] = useState([null]);
  const [selectedCity, setSelectedCity] = useState(null);

  const [isRegionModalVisible, setRegionModalVisibility] = useState(false);
  const [isCityModalVisible, setCityModalVisibility] = useState(false);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function onPressFunction(){
    console.log('swipable was pressed');
    console.log("regionList: " + JSON.stringify(regionList));
    //setLoading(true);
  }
  function hello(){
    console.log('hello');
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Swipe Actions ------------------------------------ 
  const showRegionModal=()=>{
    setRegionModalVisibility(true);
  }
  const showCityModal=()=>{
    setCityModalVisibility(true);
  }
  const clearSelection=()=>{
    console.log("clear selection");
  }
  const onCancel=()=>{
    setRegionModalVisibility(false);
    setCityModalVisibility(false);
    setLoadingRegions(false);
  }
  // --------------------------------------------------
  // ListItem actions ---------------------------------
  const markRegionSelection=(selectedItem)=>{
    console.log("selected item: " +  JSON.stringify(selectedItem));
    setRegionModalVisibility(false);
    console.log("setRegion to " +selectedItem.regionId);
    setRegionId(selectedItem.regionId)
    setLoadingCities(true);
  }
  const markCitySelection=(selectedItem)=>{
    console.log("selected item: " +  JSON.stringify(selectedItem));
    setSelectedCity(selectedItem);
    setRegionModalVisibility(false);
    //setLoadingRegions(true);
  }
  // --------------------------------------------------

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
      console.log(responseData);
      addRegionToList(responseData);
      console.log('regionList: ' + regionList)
    }
    catch(error){
      console.log(error);
    }
  }
  async function getAllCityInRegion(regionId) {
    console.log('regionId = ' + regionId);
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch(`http://10.0.2.2:8080/rest/regionservice/getallcityfromregion/${regionId}`); //Template literal `${}`
    }
    catch(error){
      console.log(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      console.log("cities in region" + JSON.stringify(responseData.regionCities));
      addCityToList(responseData.regionCities);
    }
    catch(error){
      console.log(error);
    }
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Will Rerender the screen in case the isLoading boolean is set to true
  useEffect(() => {
    console.log('useEffect(() => {'); 
      if (isLoadingRegions==true){
        getAllRegion();   
        setLoadingRegions(false);
      }
      if(isLoadingCities==true){
          getAllCityInRegion(selectedRegionId);
          setLoadingCities(false);
      }
  });

  return (
    <View style={styles.container}>
      <View >
        <SearchBar/>
      </View>
        <View>
{/* MODALS -------------------------------------------------------------------------------- */}
            <Modal visible={isRegionModalVisible}>
              <FlatList
                keyExtractor={(region) => region.regionId.toString()} 
                data={regionList}
                renderItem={regionData =>
                  <ListItemToSelect 
                    id={regionData.item.regionId}
                    name={regionData.item.regionName}
                    onSelect={() => markRegionSelection(regionData.item)}
                    onPress={() => markRegionSelection(regionData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel} />
            </Modal>

            <Modal visible={isCityModalVisible}>
              <FlatList
                keyExtractor={(city) => city.cityId.toString()}
                data={cityList}
                renderItem={cityData =>
                  <ListItemToSelect 
                    id={cityData.item.cityId}
                    name={cityData.item.cityName}
                    onSelect={() => markCitySelection(cityData.item)}
                    onPress={() => markCitySelection(cityData.item)}
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
                onPress={() => showRegionModal()} 
              />
            )}
            />

            <MenuSwipableRow
              iconMain="map"
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
                onPress={() => showRegionModal()} 
              />
            )}
            />

            <MenuSwipableRow
              iconMain="map-marker"
              iconColor="black"
              label="City"
              onPress={onPressFunction}
              renderLeftActions = {() => (
              <MenuSwipeActionResetFilter  
                onPress={() => clearSelection()}
              />
            )}
              renderRightActions = {() => (
              <MenuSwipeActionFilter 
                onPress={() => showCityModal()} 
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
                onPress={() => showRegionModal()} 
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
                onPress={() => showRegionModal()}
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
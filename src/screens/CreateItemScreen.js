/**
 * Overview: A class that allows users to create new items and access seller-related information and modal screens.
 *
 * Description: This screen is accessible via the Create Item button on the bottom navigation bar. 
 *              The main parts of the screen are as follows: 
 * 
 *  - Header-> This feature is part of the stack navigator navigation (configured by Hossein).
 *  - ScrollView-> On this page, the scrollView acts as the main scrollable container for the page.
 *  - Functions and async functions -> These are behind the scenes and not visible. They power the functionality of the page.
 *  - Modal screens -> The app user can access variable modal screens for various functionalities (such as 'Post New Item' for sale).
 *  - Page stylings -> Much of the app's stylings are included on each respective page, however, 
 *                     occasionally we have uses external consts, fonts, and colours.
 * 
 * @link   ./src/screens/CreateItemScreen.js
 * @file   This files defines the CreateItemScreen.js class.
 * @author Ashley Davis.
 * @since  01.10.2021
 */

/* AD - Standard imports from both React and React-Native*/
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, 
  ScrollView, ActivityIndicator, Button, ProgressViewIOSComponent, Alert } from "react-native";

/* AD - External component imports (such as for modal views and logos etc) */
import LogoSmall from "../components/LogoSmall";
import CreateItemInput from "../components/CreateItemInput";
import ItemSuccessfullyAdded from "../components/ItemSuccessfullyAdded";
import MenuRow from "../components/MenuRow";
import MyPostedItems from "../components/MyPostedItems";

/* AD - Constants (such as for custom colours and margins etc) */
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

// LOGIN Imports
import AsyncStorage from '@react-native-async-storage/async-storage';

/* AD - The main function of the page */
function CreateItemScreen(props) {

  /************* AD - State Variables *************/
// STATE VARIABLES ------------------------------------------------------------------
  /* AD - Handles the display of messages (useState variable) */
  const [messageDisplayed, setMessageDisplayed] = useState('');
  const [hasMessage, setMessage] = useState(false);

  /* AD - Handles the item variable (useState variable / array) */
  const [items, setItems] = useState([]);  
  const [itemList, addItemToList] = useState([]);

  /* AD - Handles loading state (useState variable) */
  const [isLoadingCustomerData, setLoadingCustomerData] = useState(true);

  /* AD - Handles the state of whether specific 
        modal windows are visible or not (useState variable)*/
  const [isVisible, setVisibility] = useState(false);
  const [isflatListVisible, setflatListVisibility] = useState(false);

  // CustomerId is available after login -> service methods
  const [SESSIONID, setSESSIONID] = useState();
// END OF STATE VARIABLES -----------------------------------------------------------

// GETTING SESSION ID ---------------------------------------------------------------
  AsyncStorage.getItem("StoredSessionId").then((value) => setSESSIONID(value));
  AsyncStorage.getItem("StoredSessionId").then((value) => console.log("App.js -> Session ID value: " + value));
  console.log('App.js SESSIONID: ' + SESSIONID)
// END OF GETTING SESSION ID --------------------------------------------------------

  /************* AD - Custom Functions *************/

  /* AD - A custom function to store item data taken from user 
        input taken from the CreateItemInput modal window */
  const onAddItem = (childdata) => {
    addItemToList(itemList =>[...itemList, childdata]);

    console.log('childdata.categoryId: ' + childdata.categoryId);
    console.log('childdata.customerId: ' + childdata.customerId);
    console.log('childdata.title: ' + childdata.title);
    console.log('childdata.price: ' + childdata.price);
    console.log('childdata.description: ' + childdata.description);
    console.log('childdata.description: ' + childdata.image);
    console.log('childdata.condition: ' + childdata.condition);
    console.log('childdata.location: ' + childdata.location);

    addData(childdata.categoryId, SESSIONID, childdata.title, childdata.price, childdata.description, childdata.image, childdata.condition, childdata.location);
    setVisibility(false);
    //setLoading(true);
  }

  /* AD - Functions related to the modal visibility */
  const cancelAddItem=()=>{
    setVisibility(false);
    setLoadingCustomerData(false);
  }

  const cancelAddItem2=()=>{
    setflatListVisibility(false);
    setLoadingCustomerData(false);
  }

  /* AD - A function related to deletion, currently a WIP */
  const onDeleteItem=(idParam)=>{
    console.log('idParam: ' + idParam);
    //setLoading(true);
    deleteData(idParam)
  }

  /* AD - functions related to confirmation and error messages */
  function showError(error){
    setMessage(true);
    setMessageDisplayed("Error: " + error);
    console.log(messageDisplayed);
  }

  function showConfirmation(message){
    setMessageDisplayed("Confirmation: " + message);
    setMessage(true);
  }

  function closeMessage() {
    setMessage(false);
    setLoadingCustomerData(true);
  }

  // AD - a comming soon alert
  const comingSoonAlert = () =>
  Alert.alert(
  "Wow, slow down there, buddy.",
  "This feature is coming soon!",
  [
      {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
  ]
);

// Handler Functions ---------------------------------------------------
  const handleMyPostedItemModal=()=>{
    setLoadingCustomerData(true);
    setflatListVisibility(true);
  }

  /************* AD - Service Functions (connects to a Java Backend) *************/
  
  /* AD - An async function to GET (fetch) data from the Java backend (which interacts with our MySQL / Google Cloud database) */
  async function fetchCustomerData() {
    console.log("CreateItemScreen.js -> async function fetchCustomerData() {");
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      /* AD - This waits for the fetch to be completed successfully. 
      It is also a timeout (for server timeouts), which is also a possible response. */
      response = await fetch(`http://10.0.2.2:8080/rest/itemservice/getcustomeritems/${SESSIONID}`); //TODO: apply SESSION ID
    }
    /* AD - A try catch to catch errors*/
    catch(error){      
      showError(error);
    }
    try{
      /* AD - This gets json from the response. 
      Essentially, the variable responseData is assigned a value, that is the json from the response. */
      let responseData = await response.json();
      /* AD - A console log is added, so that the success of the response can be made apparent in the terminal */
      console.log("Response Data as JSON: " + JSON.stringify(responseData, null, 4)); 
      setItems(responseData);
    }
    catch(error){
      showError(error);
    }
  }

  /* AD - An async function to POST data to the Java backend (which interacts with our MySQL / Google Cloud database) */
  async function addData(categoryParam, customerParam, titleParam, priceParam, descrParam, imageParam, conditionParam, locationParam) {
    console.log('started: async function addData(nameParam, priceParam, descrParam, categoryParam) {');
    let response = null;
    let requestOptions = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        categoryId: categoryParam*1,
        customerId: customerParam*1,
        title: titleParam.toString(),
        price: priceParam*1,
        description: descrParam.toString(),
        image: imageParam.toString(),
        condition: conditionParam.toString(),
        location: locationParam.toString(),
      })
    };
    try {
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/addjsonitem", requestOptions)
    } catch (error) {
      showError(error);
    }
    try {
      let responseData = await response.json();
      console.log('responseData: ' + responseData);
      showConfirmation("Item was successfully added!")
    } catch (error) {
      showError(error);
    }
  }

  /* AD - An async function to PUT data to the Java backend (which interacts with our MySQL / Google Cloud database) */
  
    // Object props are hardcoded, no input form is available. Works the same way as adding item
  async function updateData(/*idParam, nameParam, priceParam, descrParam, categoryParam*/) {
    console.log('started: async function addData(nameParam, priceParam, descrParam, categoryParam) {');
    let response = null;
    let requestOptions = {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        itemId: 1,
        categoryId: 1,
        customerId: 1,
        title: "new title",
        price: 1,
        description: "new description",
        condition: "used",
        location: "new location"
      })
    };

    try {
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/updatejsonitem", requestOptions)
    } catch (error) {
      showError(error);
    }
    try {
      let responseData = await response.json();
      console.log('responseData: ' + responseData);
      showConfirmation("Item was successfully added!")
    } catch (error) {
      showError(error);
    }
  }

  /* AD - An async function to DELETE data to the Java backend (which interacts with our MySQL / Google Cloud database) */
  // Delivers parameter as JSON data 
  async function deleteData(itemIdParam) {
    console.log('started:  async function deleteData(idParam) {');
    let response = null;
    let requestOptions = {
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        itemId: itemIdParam*1, // *1 -> numbers only
      })
    };
    try {
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/deletejsonitem", requestOptions)
    } catch (error) {
      showError(error);
    }
    try {
      let responseData = await response.json();
      showConfirmation("Item was successfully removed!")
      console.log('responseData: ' + responseData);
    } catch (error) {
      showError(error);
    }
  }

  /**
   * This Function triggers a customer data re-fetch. The request for that is originating from the child (or component) class
   * where the appropiate service method is used to remove a certain item from the DB, specified by its ID number.
   * @param {*} childdata 
   */
  const reFetchCustomerData = (childdata) => {
    console.log("reFetchCustomerData: " + childdata);
    setLoadingCustomerData(true);
  }


/*
  AD - This function is called every time the view is rendered.
       There are async functions which get called, and so new calls of such functions
       (such as GET methods for instance) must be stopped,
       lest new re-renders are executed. Such methods are state variables
       and endless re-renders could occur, unless stopped by useEffect.  
*/
  useEffect(() => {
    console.log('useEffect(() => {'); 
      if (isLoadingCustomerData==true){
        fetchCustomerData();
        setLoadingCustomerData(false);
    }
  });

  /* AD - An if statement to return an activity indicator if certain async functions,
          like GET (fetch) are not yet ready */
  if (isLoadingCustomerData==true) {
    console.log('if(isLoading==true) {');
    return (
      <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  /* AD - An elseif statement for if a message needs to be displayed
        (such as an error or confirm message) */
  else if(hasMessage){
    console.log('else if(hasError){');
    return(

      <ScrollView style={styles.scrollViewCustom}>
      <View style={styles.container}>  

      <LogoSmall style={styles.logoItemModal}/>
      <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <Text>{hasMessage}</Text>
        <Text>{""+messageDisplayed}</Text>
        <ItemSuccessfullyAdded />
        <Button 
        color = '#000080' 
        title='close' 
        onPress={()=>closeMessage()}/>
      </View>

      </View>
      </ScrollView>
    );
  }
  /* AD - an else statement for if everything works correctly. 
    The CreateItemScreen is then displayed to the user. */
  else{
    console.log('else{');
    return (

/************* AD - The screen that will be rendered and visible to the user *************/

<ScrollView style={styles.scrollStyle}>

      <View style={styles.container}>  
        <View style={styles.centralContainer}>        

          <MenuRow 
            onSelect={comingSoonAlert}
            style = {styles.row1} rowText = "Seller's Guide"
            icon1 = "book-open-page-variant"/>
          <MenuRow 
            onSelect={comingSoonAlert}
            style = {styles.row2} rowText = "Notifications"
            icon1 = "bell-ring-outline" />          

          <View style={styles.logoContainer}>
            <LogoSmall></LogoSmall>
          </View>                    

          <MenuRow 
            onSelect={()=>setVisibility(true)}
            style = {styles.row1} 
            bckgcol = {colors.darkBlueCustom} 
            rowText = "Post New Item"
            icon1 = "tag-plus-outline"
            //icon2 = "plus"
            textstyling = {TextStyling.textWhiteMedium}
            icon1color = "white"
            icon2color = "white" />
         

          <MenuRow
            // onSelect={()=>setflatListVisibility(true)}
            onSelect={()=>handleMyPostedItemModal()} 
            style = {styles.row2} 
            bckgcol = {colors.darkGreenCustom} 
            rowText = "My Posted Items"
            icon1 = "pin-outline"
            //icon2 = "alert-octagon"
            textstyling = {TextStyling.textWhiteMedium}
            icon1color = "white"
            icon2color = "white"  />
          <MenuRow 
            onSelect={comingSoonAlert}
            style = {styles.row2} rowText = "My Watchlist"
            icon1 = "eye-outline" />
          <MenuRow 
            onSelect={comingSoonAlert}
            style = {styles.row2} rowText = "My Purchases"
            icon1 = "shopping-outline" />          
          <MenuRow 
            onSelect={comingSoonAlert}
            style = {styles.row3} rowText = "Trending"
            icon1 = "trending-up" />

        {/* AD - For the hidden CreateItemInput external component (modal), 
                which will become visible, when the user clicks the respective touchable opacity button */}
        <CreateItemInput 
          visibility={isVisible} 
          onAddItem={onAddItem}
          itemList={items} 
          onCancelItem={cancelAddItem} 
          /> 

        {/* AD - For the hidden MyPostedItems external component (modal), 
                which will become visible, when the user clicks the respective touchable opacity button */}      
        <MyPostedItems 
          visibility={isflatListVisible} 
          onAddItem={onAddItem}
          itemList={items} 
          onCancelItem={cancelAddItem2}
          reFetchCustomerData={reFetchCustomerData} 
          />         

        </View>
      </View>
    </ScrollView>         
    );}};

/************* AD - Stylings *************/
const styles = StyleSheet.create({
  scrollViewCustom: {
    backgroundColor: colors.light4,
  },
  logoItemModal: {
    marginTop: Margins.xlarge,
  }, 
  cancelButton: {
    width: 206,
    height: 36,
    overflow: "visible",
    backgroundColor: "rgba(11,67,130,1)",
    marginTop: 9,
    backgroundColor: colors.light5, 
  },
  scrollStyle: {
    backgroundColor: colors.light4, 
  },
  container: {
    flex: 1,
    alignItems: 'center',   
    width:'100%',    
  },     
  logoContainer:{
    marginTop: 17,
    alignItems: 'center',   
  },
  row1: {
    marginTop: 17,
    marginBottom: Margins.xxnarrow,
  },
  row2: {
    marginVertical: Margins.xxnarrow,
  },
  row3: {
    marginVertical: Margins.midsize,
  },
  centralContainer: {
    flex: 1,   
    justifyContent: 'center',
    width: '100%', 
    backgroundColor: colors.light4,    
  },

});

export default CreateItemScreen;

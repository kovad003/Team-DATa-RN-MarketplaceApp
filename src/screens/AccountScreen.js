/**
 * Overview: A class that allows users to view their account overview.
 *           Also, the user can access account-related information and modal screens.
 * 
 * Description: This screen is accessible via the Profile button on the bottom navigation bar. 
 *              The main parts of the screen are as follows: 
 * 
 *  - Variables, functions and async functions -> These are behind the scenes and not visible to the user. 
 *                                                They power the functionality of the page. 
 *  - Header-> This feature is part of the stack navigator navigation (configured by Hossein).
 *  - ScrollView-> On this page, the scrollView acts as the main scrollable container for the page. *  
 *  - Modal screens -> The app user can access variable modal screens for various functionalities (such as the 'login' modal).
 *  - Page stylings -> Much of our apps stylings are included on each respective page.
 *                     Ocassionally, however, external consts, fonts, and colours have been utilised.
 * 
 * @link   ./src/screens/AccountScreen.js
 * @file   This files defines the AccountScreen.js class.
 * @author Ashley Davis.
 * @since  04.10.2021
 */

/* AD - Standard imports from both React and React-Native*/
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, 
  ScrollView, ActivityIndicator, Button, ProgressViewIOSComponent, Alert } from "react-native";

/* AD - Constants (such as for custom colours and margins etc) */
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

/* AD - External component imports (such as for modal views and logos etc) */
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import ItemSuccessfullyAdded from "../components/ItemSuccessfullyAdded";
import MenuRow from "../components/MenuRow";
import LogoSmall from "../components/LogoSmall";
import AppSupport from "../components/account/AppSupport";

/* AD - Redundant, might delete later
    import CreateItemInput from "../components/CreateItemInput";
  */

/* AD - The main function of the page */
function AccountScreen(props) {

/************* AD - State Variables *************/

/* AD - Handles the display of messages */
const [hasMessage, setMessage] = useState(false);
const [messageDisplayed, setMessageDisplayed] = useState('');



const [itemList, addItemToList] = useState([]);
const [isLoading, setLoading] = useState(false); //was true
const [isVisible, setVisibility] = useState(false);

const [isflatListVisible, setflatListVisibility] = useState(false);
const [isSupportVisible, setSupportVisibility] = useState(false);

//const [customers, setCustomer] = useState([]);
const [customerList, addCustomerToList] = useState([]);

const [customer, setCustomer] = useState([]);

/* AD - for the AccountScreen -> login page modal visibility */
const [isLoginVisible, setLoginVisible] = useState(false);
const [isRegisterVisible, setRegisterVisible] = useState(false);

 /* AD - Handles the item variable (an array) */
const [items, setItems] = useState([]);

// AD - a dummyy Update Info alert
const menuTestAlert = () =>
Alert.alert(
"Dummy Update Info",
"Your post was successfully updated!",
[
    {
    text: "Cancel",
    onPress: () => console.log("Cancel Pressed"),
    style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
]
);

// AD - a dunny Update Info alert
const menuTestAlert2 = () =>
Alert.alert(
"This is the second alert",
"Your post was successfully updated!",
[
    {
    text: "Cancel",
    onPress: () => console.log("Cancel Pressed"),
    style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
]
);

// AD new consts

// Custom Functions ****************************************************************************************
const onAddCustomer = (childdata) => {
  addCustomerToList(customerList =>[...customerList, childdata]);

  //console.log('childdata.customerId: ' + childdata.customerId);
  console.log('childdata.firstName: ' + childdata.firstName);
  console.log('childdata.lastName: ' + childdata.lastName);
  console.log('childdata.userName: ' + childdata.userName);
  console.log('childdata.password: ' + childdata.password);
  console.log('childdata.dateOfBirth: ' + childdata.dateOfBirth);
  console.log('childdata.email: ' + childdata.email);
  console.log('childdata.phone: ' + childdata.phone);
  console.log('childdata.image: ' + childdata.image);

  addCustomerData(
    //childdata.customerId, 
    childdata.firstName, 
    childdata.lastName, 
    childdata.userName, 
    childdata.password, 
    childdata.dateOfBirth, 
    childdata.email, 
    childdata.phone, 
    childdata.image);
  setVisibility(false);
  //setLoading(true);
}

  const cancelLoginModal = ()=>{
    setLoginVisible(false);
  }

  // AD new consts

  const cancelAddCustomer=()=>{
    setVisibility(false);
    setLoading(false);
  }


  

//

//

//

//

/* AD - extra editions for the registration page input functionality */

// functions related to the input field functionality

// Custom Functions ****************************************************************************************
const onAddItem = (childdata) => {
  addItemToList(itemList =>[...itemList, childdata]);

  console.log('childdata.customerId: ' + childdata.customerId);
  console.log('childdata.firstName: ' + childdata.firstName);
  console.log('childdata.lastName: ' + childdata.lastName);
  console.log('childdata.userName: ' + childdata.userName);
  console.log('childdata.password: ' + childdata.password);
  console.log('childdata.dateOfBirth: ' + childdata.dateOfBirth);
  console.log('childdata.email: ' + childdata.email);
  console.log('childdata.phone: ' + childdata.phone);
  console.log('childdata.image: ' + childdata.image);

  addData(
    childdata.customerId, 
    childdata.firstName, 
    childdata.lastName, 
    childdata.userName, 
    childdata.password, 
    childdata.dateOfBirth, 
    childdata.email, 
    childdata.phone, 
    childdata.image);
  setVisibility(false);
  //setLoading(true);
}

const cancelAddItem=()=>{
  setVisibility(false);
  setLoading(false);
}

const cancelAddItem2=()=>{
  setflatListVisibility(false);
  setLoading(false);
}

/* For the support modal */
const onCancelSupport2=()=>{
  setSupportVisibility(false);
  //setLoading(false);
}

const onDeleteItem=(idParam)=>{
  console.log('idParam: ' + idParam);
  //setLoading(true);
  deleteData(idParam)
}

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
  setLoading(true);
}


// AD - customer service additions

// Service Functions ****************************************************************************************
  // *** GET ***
  async function fetchCustomerData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch("http://10.0.2.2:8080/rest/customerservice/getall");
    }
    catch(error){
      showError(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      console.log(responseData);//Just for checking.....
      setItems(responseData);
    }
    catch(error){
      showError(error);
    }
  }
 

  // *** POST ***
  async function addCustomerData(firstNameParam, lastNameParam, userNameParam, passwordParam, dateOfBirthParam, emailParam, phoneParam, imageParam) {
    console.log('started: async function addCustomerData(firstNameParam, lastNameParam, userNameParam, passwordParam, dateOfBirthParam, emailParam, phoneParam, imageParam) {');
    let response = null;
    let requestOptions = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        //customerId: customerIdParam*1,
        firstName: firstNameParam.toString(),
        lastName: lastNameParam.toString(),
        userName: userNameParam.toString(),
        password: passwordParam.toString(),
        dateOfBirth: dateOfBirthParam.toString(),
        email: emailParam.toString(),
        phone: phoneParam.toString(),
        image: imageParam.toString(),
      })
    };
    try {
      response = await fetch("http://10.0.2.2:8080/rest/customerservice/addjsoncustomer", requestOptions)
    } catch (error) {
      showError(error);
    }
    try {
      let responseData = await response.json();
      console.log('responseData: ' + responseData);
      showConfirmation("Customer was successfully added!")
    } catch (error) {
      showError(error);
    }
  }

  

//

//

//

//




// Service Functions ****************************************************************************************
// *** GET ***
async function fetchData() {
  //Variable res is used later, so it must be introduced before try block and so cannot be const.
  let response = null;
  try{
    //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
    response = await fetch("http://10.0.2.2:8080/rest/itemservice/getall");
  }
  catch(error){
    showError(error);
  }
  try{
    //Getting json from the response
    let responseData = await response.json();
    console.log(responseData);//Just for checking.....
    setItems(responseData);
  }
  catch(error){
    showError(error);
  }
}

// *** POST ***
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

// *** PUT ***
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

// *** DELETE ***
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

/*   
This is called every time the view is rendered
The new calls of fetchData (and others) must be stopped somehow, because in
those methods are statevariables set, which cause a new re-render. 
*/
useEffect(() => {
  console.log('useEffect(() => {'); 
    if (isLoading==true){
      fetchData();
      setLoading(false);
  }
});

// If the 'fetch' is not ready yet, an activityindicator is shown
if (isLoading==true) {
  console.log('if(isLoading==true) {');
  return (
    <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}
// If error or confirm message needs to be displayed
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
//Otherwise the list is shown
else{
  console.log('else{');
  
  return (

    <ScrollView style={styles.scrollStyle}>
      <View style={styles.container}>  
        <View style={styles.centralContainer}>
   
          <View style={styles.logoContainer}>
            <LogoSmall></LogoSmall>
          </View>

          <MenuRow 
            onSelect = {()=>setVisibility(true)}
            style = {styles.row1} rowText = "Register"
            icon1 = "account-plus-outline"/>
          <MenuRow 
            onSelect={()=>setLoginVisible(true)}
            style = {styles.row1a} rowText = "Login"
            icon1 = "login" />
          <MenuRow 
            onSelect={menuTestAlert}
            style = {styles.row2} rowText = "About"
            icon1 = "information-outline" />
          <MenuRow style = {styles.row2} rowText = "Settings"
            onSelect={menuTestAlert2}
            icon1 = "cog-outline" />
          <MenuRow style = {styles.row2} rowText = "Premium"
            icon1 = "crown" />          
          <MenuRow style = {styles.row2} bckgcol = {colors.danger} rowText = "Delete Account"
            icon1 = "delete-forever"
            icon2 = "alert-octagon"
            textstyling = {TextStyling.textWhiteMedium}
            icon1color = "white"
            icon2color = "white"  />
          <MenuRow 
          onSelect = {()=>setSupportVisibility(true)}
          style = {styles.row3} rowText = "Support"
          icon1 = "face-agent" />

          <LoginScreen 
          visibility={isLoginVisible} 
          /*onAddItem={onAddItem}*/
          /* itemList={items} */
          onCancelItem={cancelLoginModal}   // onCancelItem = cancelAddItem      
          /> 

          <RegistrationScreen 
          visibility={isVisible} 
          onAddCustomer={onAddCustomer}
          customerList={customer} 
          onCancelCustomer={cancelAddCustomer}  // onCancelItem2 = cancelAddItem2
          /> 

          <AppSupport 
          visibility={isSupportVisible} 
          /* onAddItem={onAddItem}
          itemList={items} */
          onCancelSupport={onCancelSupport2} 
          />

        </View>
      </View>         

    </ScrollView>        
  );
}
};

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: colors.light4,
    //justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',   
    width:'100%',    
  },   
  
  logoContainer:{
    marginTop: 17, //20
    alignItems: 'center',   
  },

  row1: {
    marginTop: 17,
    marginBottom: Margins.xxnarrow,
  },

  row1a: {
    marginTop: Margins.xxnarrow,
    marginBottom: Margins.large,
  },

  row2: {
    marginVertical: Margins.xxnarrow, // narrow
  },

  row3: {
    marginVertical: Margins.midsize, // xlarge
  },

  centralContainer: {
    flex: 1,   
    justifyContent: 'center',
    width: '100%', 
    backgroundColor: colors.light4,
    
  },

});

export default AccountScreen;

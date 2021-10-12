import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, 
  ScrollView, ActivityIndicator, Button, ProgressViewIOSComponent } from "react-native";

import MenuRow from "../components/MenuRow";
import LogoSmall from "../components/LogoSmall";

// AD - constants
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import CreateItemInput from "../components/CreateItemInput";

import ItemSuccessfullyAdded from "../components/ItemSuccessfullyAdded";

function AccountScreen(props) {

  // State variable
  const [customer, setCustomer] = useState({
    id: 1,
    customerId: 1, //TODO
    password: 'password',
});

  /* AD - for the AccountScreen -> login page modal visibility */
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  //

  /* For the registration modal (cancelRegistrationModal)*/

  const cancelLoginModal = ()=>{
    setLoginVisible(false);
  }

  const cancelRegistrationModal = ()=>{
    setRegisterVisible(false);
  }



  // cancelRegistrationModal


  //
  /*
  const onAddItem=()=>{
    setLoginVisible(true);
  }

  const cancelAddItem = ()=>{
    setLoginVisible(false);
  }


*/ 

/*
  const onAddItem2=()=>{
    setRegisterVisible(true);
  }

  

  const cancelAddItem2 = ()=>{
    setRegisterVisible(false);
  }
*/
 

  // For Controlling modal

  /*
const addItem=()=>{
  props.onAddItem(item);
}

const cancelItem=()=>{
  props.onCancelItem();
}

*/

//

//

//

//

/* AD - extra editions for the registration page input functionality */

// functions related to the input field functionality

const [hasMessage, setMessage] = useState(false);
const [messageDisplayed, setMessageDisplayed] = useState('');
const [items, setItems] = useState([]);
const [itemList, addItemToList] = useState([]);
const [isLoading, setLoading] = useState(true);
const [isVisible, setVisibility] = useState(false);

const [isflatListVisible, setflatListVisibility] = useState(false);

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

  addData(childdata.customerId, 
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

/*

 customerId: 1,
    firstName: "default firstName", //TODO
    lastName: 'default lastName',
    userName: 'default userName',
    password: "default password",
    dateOfBirth: 'default dateOfBirth',
    email: 'default email',
    phone: 'default phone',
    image: 'default image',


*/

const cancelAddItem=()=>{
  setVisibility(false);
  setLoading(false);
}

const cancelAddItem2=()=>{
  setflatListVisibility(false);
  setLoading(false);
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
  


//

//

//

//

  return (

    <ScrollView style={styles.scrollStyle}>
      <View style={styles.container}>  
        <View style={styles.centralContainer}>
   
          <View style={styles.logoContainer}>
            <LogoSmall></LogoSmall>
          </View>

          <MenuRow style = {styles.row1} rowText = "Register"
            icon1 = "account-plus-outline"/>
          <MenuRow style = {styles.row1a} rowText = "Login"
            icon1 = "login" />

        
            <Text 
            text = 'submit'
            style = {TextStyling.textBlackSmall}
            onPress={()=>setLoginVisible(true)} >
            Login</Text>

            <Text 
            text = 'submit'
            style = {TextStyling.textBlackSmall}
            onPress={()=>setRegisterVisible(true)} >
            Registration</Text> 
          

          <MenuRow style = {styles.row2} rowText = "About"
            icon1 = "information-outline" />
          <MenuRow style = {styles.row2} rowText = "Settings"
            icon1 = "cog-outline" />
          <MenuRow style = {styles.row2} rowText = "Premium"
            icon1 = "crown" />          
          <MenuRow style = {styles.row2} bckgcol = {colors.danger} rowText = "Delete Account"
            icon1 = "delete-forever"
            icon2 = "alert-octagon"
            textstyling = {TextStyling.textWhiteMedium}
            icon1color = "white"
            icon2color = "white"  />
          <MenuRow style = {styles.row3} rowText = "Support"
          icon1 = "face-agent" />

          <LoginScreen 
          visibility={isLoginVisible} 
          /*onAddItem={onAddItem}*/
          /* itemList={items} */
          onCancelItem={cancelLoginModal}   // onCancelItem = cancelAddItem      
          /> 

          <RegistrationScreen 
          visibility={isRegisterVisible} 
          
          //onAddItem2={onAddItem2} 
          /* itemList={items} */
          onCancelItem2={cancelRegistrationModal} // onCancelItem2 = cancelAddItem2
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

import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, 
  ScrollView, ActivityIndicator, Button, ProgressViewIOSComponent } from "react-native";
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";
import LogoSmall from "../components/LogoSmall";
import CreateItemInput from "../components/CreateItemInput";
import ItemSuccessfullyAdded from "../components/ItemSuccessfullyAdded";
import MenuRow from "../components/MenuRow";
import MyPostedItems from "../components/MyPostedItems";

function CreateItemScreen(props) {

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

    console.log('childdata.categoryId: ' + childdata.categoryId);
    console.log('childdata.customerId: ' + childdata.customerId);
    console.log('childdata.title: ' + childdata.title);
    console.log('childdata.price: ' + childdata.price);
    console.log('childdata.description: ' + childdata.description);
    console.log('childdata.description: ' + childdata.image);
    console.log('childdata.condition: ' + childdata.condition);
    console.log('childdata.location: ' + childdata.location);

    addData(childdata.categoryId, childdata.customerId, childdata.title, childdata.price, childdata.description, childdata.image, childdata.condition, childdata.location);
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
    return (

<ScrollView style={styles.scrollStyle}>

      <View style={styles.container}>  
        <View style={styles.centralContainer}>        

          <MenuRow style = {styles.row1} rowText = "Seller's Guide"
            icon1 = "book-open-page-variant"/>
          <MenuRow style = {styles.row2} rowText = "Notifications"
            icon1 = "bell-ring-outline" />
          

          <View style={styles.logoContainer}>
            <LogoSmall></LogoSmall>
          </View> 

          <Text 
            text = 'submit'
            style = {TextStyling.textBlackSmall}
            onPress={()=>setVisibility(true)} >
            Press Me</Text>

            <Text 
            text = 'submit'
            style = {TextStyling.textBlackSmall}
            onPress={()=>setflatListVisibility(true)} >
            Press Me FlatList</Text>            

          <MenuRow 
            style = {styles.row1} 
            bckgcol = {colors.darkBlueCustom} 
            rowText = "Post New Item"
            icon1 = "tag-plus-outline"
            //icon2 = "plus"
            textstyling = {TextStyling.textWhiteMedium}
            icon1color = "white"
            icon2color = "white"  />
         

          <MenuRow style = {styles.row2} 
            bckgcol = {colors.darkGreenCustom} 
            rowText = "My Posted Items"
            icon1 = "pin-outline"
            //icon2 = "alert-octagon"
            textstyling = {TextStyling.textWhiteMedium}
            icon1color = "white"
            icon2color = "white"  />
          <MenuRow style = {styles.row2} rowText = "My Watchlist"
            icon1 = "eye-outline" />
          <MenuRow style = {styles.row2} rowText = "My Purchases"
            icon1 = "shopping-outline" />          
          <MenuRow style = {styles.row3} rowText = "Trending"
          icon1 = "trending-up" />

        {/* AD - For the hidden modal view */}
        <CreateItemInput 
          visibility={isVisible} 
          onAddItem={onAddItem}
          itemList={items} 
          onCancelItem={cancelAddItem} 
          /> 

          {/* AD - For the hidden modal view */}
        
        <MyPostedItems 
          visibility={isflatListVisible} 
          onAddItem={onAddItem}
          itemList={items} 
          onCancelItem={cancelAddItem2} 
          /> 
          

        </View>
      </View>
    </ScrollView>   
      
    );
  }
};

const styles = StyleSheet.create({

  scrollViewCustom: {
    backgroundColor: colors.light4, // AD - added background
  },

  logoItemModal: {
    marginTop: Margins.xlarge,
  },

  flatListContainer: {
    width: '90%',
    backgroundColor: 'green',
  },

  imageUploader: {
    height: 104,
    width: 339,
    alignItems: 'center', // AD - added
    marginTop: Margins.narrow, // AD - added margin Top
    marginBottom: Margins.xlarge, // AD - added margin bottom  
  },
  CreateItemForm: {
    height: 44,
    width: 317,
    alignItems: 'center', // AD - added align
    marginLeft: Margins.narrow, // AD - added margin left   
  },  
  buttonContainer: {
    height: 89,
    marginTop: 250,
    width: '80%',
    alignItems: 'center', // AD - added align  
    marginBottom: Margins.narrow, // AD - added margin bottom
  },
  uploadButton: {
    width: 206,
    height: 36,
    marginTop: 4,
    backgroundColor: colors.light2, // AD - added color
  },
  cancelButton: {
    width: 206,
    height: 36,
    overflow: "visible",
    backgroundColor: "rgba(11,67,130,1)",
    marginTop: 9,
    backgroundColor: colors.light5, // AD - added color    
  },

/* AD - stylings related to the list functionality */
  screen: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    height: '100%',
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    backgroundColor: "#E6E6E6",     

  },
  listItem:{
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#0f0',
    backgroundColor: '#fce',    
  },

  /* AD - Originally from the Account Screen */
  scrollStyle: {
    backgroundColor: colors.light4, 
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

export default CreateItemScreen;

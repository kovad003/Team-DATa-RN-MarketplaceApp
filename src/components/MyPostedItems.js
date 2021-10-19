/**
 * Overview: A class that displays a seller's posted items.
 *           The MyPostedItems screen is activated (called) when the user clicks on 'My Posted Items' 
 *           from the Create Item screen.
 * 
 * Description: Once the user clicks 'My Posted Items' this external component is called to display item information. 
 *              The main parts of the screen are as follows: 
 * 
 *  - State variables, functions and async functions -> These are behind the scenes and not visible to the user. 
 *                                                      They power the functionality of the page. 
 *  - Modal component-> On this page, the Modal acts as the main container for the page. (Visible upon click). 
 *  - Page stylings -> Much of the app's stylings are included on each respective page.
 *                     Occasionally, however, external consts, fonts, and colours have been utilised.
 * 
 * @link   ./src/components/MyPostedItems.js
 * @file   This files defines the MyPostedItems.js class.
 * @author Ashley Davis.
 * @since  01.10.2021
 */

/* AD - Standard imports from both React and React-Native */
import React, { Component, useState, useEffect } from "react";
import {StyleSheet, View, TextInput, Button, Modal, findNodeHandle, Text, FlatList, Alert} from 'react-native';

/* AD - Constants (such as for custom colours and margins etc) */
import colors from "../constants/colors";
import { Margins, Paddings } from "../constants/constvalues";
import TextStyling from '../constants/fontstyling';

/* AD - External components */
import CreateItemInputLogo from "./CreateItemInputLogo";
import ListCreatedItem from "../components/ListCreatedItem";
import MyPostedItemsDelete from "./createItem/MyPostedItemsDelete";

/* AD - The main function of the page */
const MyPostedItems=(props)=>{

/************* AD - State Variables *************/

   // AD - State variables
    const [itemToUpdate, setItemToUpdate] = useState([]);
    const [isLoadingItemToUpdate, setLoadingItemToUpdate] = useState(true);
   
/************* AD - Custom Functions *************/
  const onDeleteItem=(idParam)=>{
    console.log('idParam: ' + idParam);
    //setLoading(true);
    deleteData(idParam)
  }

  /* AD - Functions related to the modal visibility (and adding data) */
 /*  const addItem=()=>{
    props.onAddItem(item);
  } */
  const cancelItem=()=>{
      props.onCancelItem();
  }

  /************* AD - Service Functions (connects to a Java Backend) *************/
  
  /* AD - An async function to GET (fetch) data from the Java backend 
 (which interacts with our MySQL / Google Cloud database). This one is WIP */
  async function fetchSingleItem() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      /* AD - This waits for the fetch to be completed successfully. 
      It is also a timeout (for server timeouts), which is also a possible response. */
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/getall");
    }
    /* AD - A try catch to catch errors */
    catch(error){
      alert("Error in the service method:" + error);
    }
    try{
      /* AD - This gets json from the response. 
      Essentially, the variable responseData is assigned a value, that is the json from the response. */
      let responseData = await response.json();
      console.log(responseData);//Just for checking.....
      setItemToUpdate(responseData);
    }
    catch(error){
      alert("Error in response data:" + error);
    }
  }

  /* AD - An async function to PUT data to the Java backend (which interacts with our MySQL / Google Cloud database) */  
  // Object props are hardcoded, no input form is available. Works the same way as adding item
  async function updateSingleItem(/*idParam, nameParam, priceParam, descrParam, categoryParam*/) {
    console.log('started: async function addData(nameParam, priceParam, descrParam, categoryParam) {');
    let response = null;
    let requestOptions = {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id: 1,
        name: "update", 
        price: 1,
        description: "update", 
        category: "update" 
      })
    };

    try {
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/updatejsonitem", requestOptions)
    } catch (error) {
      alert("Error in the service method:" + error);
    }
    try {
      let responseData = await response.json();
      console.log('responseData: ' + responseData);
      showConfirmation("Item was successfully added!")
    } catch (error) {
      alert("Error in response data:" + error);
    }
  }

  /* AD - An async function to DELETE data to the Java backend (which interacts with our MySQL / Google Cloud database) */
  // Delivers parameter as JSON data 
  async function deleteData(idParam) {
    console.log('started:  async function deleteData(idParam) {');
    let response = null;
    let requestOptions = {
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id: idParam*1, // *1 -> numbers only
      })
    };
    try {
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/deletejsonitem", requestOptions)
    } catch (error) {
      alert("Error in the service method:" + error);
    }
    try {
      let responseData = await response.json();
      showConfirmation("Item was successfully removed!")
      console.log('responseData: ' + responseData);
    } catch (error) {
      alert("Error in response data:" + error);
    }
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
      if (isLoadingItemToUpdate==true){
/*         fetchData();
        setLoading(false);
        fetchCustomerItems(); */
    }
  });

    // Return
    return (
    /************* AD - The data that will be rendered and visible to the user *************/
    <Modal visible={props.visibility} animationType="slide">
        <View style={styles.formStyle}>
          <View style={styles.logoCustom} >
          <CreateItemInputLogo></CreateItemInputLogo>
          </View>

          <View style={styles.buttonView}>
              <View style={styles.button}>
              <Button color='#c83232' title="Back" onPress={cancelItem}/>
          </View>             
          
          
          </View>
        
        <Text style={[TextStyling.textBlackSmall, styles.headerText]}>My Posted Items:</Text>
        </View>        

        
        <View style = {styles.flatListOuterContainer}>
          <FlatList
                  keyExtractor={(item) => item.itemId.toString()} 
                  // data={customerItems} //TODEL
                  data={props.itemList}
                  renderItem={itemData => 
                      <ListCreatedItem itemId={itemData.item.itemId} 
                      title={itemData.item.title}
                      price={itemData.item.price}
                      condition={itemData.item.condition}
                      location={itemData.item.location}
                      datePosted={itemData.item.datePosted} //timestamp has to be displayed as date and maybe time
                      onDelete={()=>onDeleteItem(itemData.item.itemId)} 
                  />}
                  />
        </View>
    </Modal>
    );
}

/************* AD - Stylings *************/
const styles=StyleSheet.create({
    formStyle: {      
        alignItems:"center",
        backgroundColor: colors.light4,
        paddingHorizontal: 10,        
      },
      logoCustom: {        
        marginTop: Margins.narrow,      
      },       
      buttonView:{
        width:'60%',
        flexDirection: 'row',
        justifyContent:"space-around",
        marginBottom: Margins.xnarrow,
      },     
      button:{
        width:'40%',
      },      
      iconStyling: {
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: Paddings.narrow,
        color: colors.danger,
      },     
      flatListOuterContainer: {      
        flex: 1,
        backgroundColor: colors.light4,
      },
      headerText: {
        marginVertical: Margins.xnarrow,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: '#000080', //  '#000080'
        paddingVertical: Paddings.xnarrow,
      },
});

export default MyPostedItems;

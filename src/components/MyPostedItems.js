import React, { Component, useState, useEffect } from "react";
import {StyleSheet, View, TextInput, Button, Modal, findNodeHandle, Text, FlatList} from 'react-native';
import CreateItemInputLogo from "./CreateItemInputLogo";
import colors from "../constants/colors";
import { Margins, Paddings } from "../constants/constvalues";
import ListCreatedItem from "../components/ListCreatedItem";

const MyPostedItems=(props)=>{
    const data = "This is data from Child Component to the Parent Component. :)"
    const [name, setName]=useState('');
    const [price, setPrice]=useState(0);

    // State variable
    const [item, setItem] = useState({
        title: 'some name',
        price: 0,
        description: 'some description',
        category: 'some category',
    });
    
    // For Controlling modal
    const addItem=()=>{
        props.onAddItem(item);
    }
    const cancelItem=()=>{
        props.onCancelItem();
    }

  // functions related to the input field functionality

  const [hasMessage, setMessage] = useState(false);
  const [messageDisplayed, setMessageDisplayed] = useState('');
  const [items, setItems] = useState([]);
  const [itemList, addItemToList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisibility] = useState(false);

  // Custom Functions ****************************************************************************************
  const onAddItem = (childdata) => {
    addItemToList(itemList =>[...itemList, childdata]);
    console.log('childdata from child onAddItem App.js: ' + childdata.name);
    console.log('childdata from child onAddItem App.js: ' + childdata.price);
    console.log('childdata from child onAddItem App.js: ' + childdata.description);
    console.log('childdata from child onAddItem App.js: ' + childdata.category);
    addData(childdata.name, childdata.price, childdata.description, childdata.category);
    setVisibility(false);
    //setLoading(true);
  }

  const cancelAddItem=()=>{
    setVisibility(false);
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
  async function addData(nameParam, priceParam, descrParam, categoryParam) {
    console.log('started: async function addData(nameParam, priceParam, descrParam, categoryParam) {');
    let response = null;
    let requestOptions = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name: nameParam.toString(), 
        price: priceParam*1, // *1 -> numbers only
        description: descrParam.toString(), 
        category: categoryParam.toString() 
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

    // Return
    return (
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
        </View>        

        <View style = {styles.flatListOuterContainer}>
          <FlatList
                  keyExtractor={(item) => item.itemId.toString()} 
                  data={items}
                  renderItem={itemData => 
                      <ListCreatedItem itemId={itemData.item.itemId} 
                      title={itemData.item.title}
                      price={itemData.item.price}
                      description={itemData.item.description}
                      datePosted={itemData.item.datePosted} //timestamp has to be displayed as date and maybe time
                      onDelete={()=>onDeleteItem(itemData.item.itemId)} 
                  />}
                  />
        </View>
    </Modal>
    );
}

const styles=StyleSheet.create({
    formStyle: {
        //flex:1,
        //flexDirection: 'column',
        //justifyContent:'center',
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
        //marginBottom: Margins.large,
        //marginVertical: Margins.midsize,
        marginBottom: Margins.midsize,
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
        //marginTop: Margins.xsuperLarge,
        flex: 1,
        backgroundColor: colors.light4,
      },
});

export default MyPostedItems;

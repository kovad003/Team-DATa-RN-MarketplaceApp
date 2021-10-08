import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, 
  ScrollView, ActivityIndicator, Button, ProgressViewIOSComponent } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ImageUploader from "../components/ImageUploader";
import CreateItemForm from "../components/CreateItemForm";
import AppButton from "../components/AppButton";

// AD - constants
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

import LogoSmall from "../components/LogoSmall";
import LogoTiny from "../components/LogoTiny";
import ListCreatedItem from "../components/ListCreatedItem";
import CreatedItemInput from "../components/CreatedItemInput";

// AD - Component Rows
import CreateItemScreenRow1 from "../components/CreateItemScreenRow1";
import CreateItemScreenRow2 from "../components/CreateItemScreenRow2";
import CreateItemScreenRow3 from "../components/CreateItemScreenRow3";

function CreateItemScreen(props) {

  //
  //
  //
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
/* 
    let requestOptions = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id: idParam*1, // *1 -> numbers only
        name: nameParam.toString(), 
        price: priceParam*1, // *1 -> numbers only
        description: descrParam.toString(), 
        category: categoryParam.toString() 
      })
    };
 */
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

  //Delivers URI @PathParam
/*   async function deleteData(idParam) {
    console.log('async function deleteData() {');
    let response = null;
    let requestOptions = {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': '',
            'My-Custom-Header': 'id'
        }
    };
    try {
      response = await fetch('http://10.0.2.2:8080/rest/itemservice/deleteitem/' + idParam, requestOptions)
    } catch (error) {
      showError(error);
    }   
    try {
      let responseData = await response.json();
      showConfirmation("Item was successfully removed!")
      console.log('responseData: ' + responseData); // JAVA Service method returnes a boolean
      if (responseData == false){
        var error = 'Removal was not verified! Please check DB.';
        console.log(error);
        showError(error); 
      }
    } catch (error) {
      showError(error);
    }
  } */


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

      <ScrollView>
      <View style={styles.container}>  

      <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <Text>{hasMessage}</Text>
        <Text>{""+messageDisplayed}</Text>
        <Button title='close' onPress={()=>closeMessage()}/>
      </View>

      </View>
      </ScrollView>
    );
  }
  //Otherwise the list is shown
  else{
    console.log('else{');
    return (

      /*
      <ScrollView>
      */
      <View style={styles.container}>  

      
        <View style={styles.logoContainer}>
            <LogoTiny style={styles.logo}></LogoTiny>
        </View>

        <CreateItemScreenRow1 rowText = "Sellers Guide" style = {styles.row1} />
        <CreateItemScreenRow2 rowText = "Support" style = {styles.row1}/>

        <View style={styles.centralContainer}>

      <View style={styles.screen}>
        <Text>{hasMessage}</Text>
        {/*
        <Button color='grey' title='Fetch from DB' onPress={()=>fetchData()} />
        <Button color='darkorange' title='Update Item' onPress={()=>updateData()} />
        */}
        <Button color='dodgerblue' title='Add new Item' onPress={()=>setVisibility(true)} />
        
        
        {/* AD - was originally ListInput */}

        
     
        <CreatedItemInput 
          visibility={isVisible} 
          onAddItem={onAddItem}
          itemList={items} 
          onCancelItem={cancelAddItem} 
        />
        
        <FlatList
          keyExtractor={(item) => item.id.toString()} 
          data={items}
          renderItem={itemData => 
            <ListCreatedItem id={itemData.item.id} 
            name={itemData.item.name}
            price={itemData.item.price}
            description={itemData.item.description}
            category={itemData.item.category}
            onDelete={()=>onDeleteItem(itemData.item.id)} 
        />}

        
      />
   
       

      </View>


      </View>

      </View>


      /*
      </ScrollView>
      */
    );
  }
};

  //
  //
  //


  /* AD - original 

  return (
    
      <ScrollView>
      <View style={styles.container}>     
        <ImageUploader style={styles.imageUploader}></ImageUploader> 
          <CreateItemForm
            style={styles.CreateItemForm}>
          </CreateItemForm>     
        <View style={styles.buttonContainer}>
          <AppButton button="Upload" style={styles.uploadButton}></AppButton>
          <AppButton button="Cancel" style={styles.cancelButton}></AppButton>
        </View>
      
      </View>
      </ScrollView>
        
  );
}

*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // AD - added align
    backgroundColor: colors.light4, // AD - added background
    width:'100%',
    //justifyContent:'center',

    //marginVertical: Margins.xnarrow,
  },  

  logoContainer:{
    //marginTop: 1, //26
    alignItems: 'center',   
  },

  flatListContainer: {
    width: '90%',
    backgroundColor: 'green',
  },

  centralContainer: {
    flex: 1,   
    justifyContent: 'center',
    width: '90%', 
    //backgroundColor: colors.light4,
    //backgroundColor: 'red',
    padding: Paddings.midsize,

    paddingBottom: Paddings.midsize,

    //margin: Margins.midsize,
    margin: Margins.narrow,

    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    backgroundColor: colors.danger,

/*
container: {},
  rowContainer: {    
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    backgroundColor: "#E6E6E6",  
    height: 53,   
    
    justifyContent:'space-between', // center
    alignItems:'center',
    flexDirection: 'row',
    paddingLeft: '9%', // '20%'
    paddingRight: Paddings.large    
  },
*/



  },

  /*

  shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    backgroundColor: colors.danger,



  */

  row1: {
    marginVertical: Margins.xxnarrow, // xlarge
  },

  row2: {
    marginVertical: Margins.xxnarrow, // narrow
  },

  row3: {
    marginVertical: Margins.large, // xlarge
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
    marginTop: 10,
    padding: 10, // 60
    height: '100%',

    //alignItems: 'center',
    //backgroundColor: 'blue',

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
  }


});

export default CreateItemScreen;

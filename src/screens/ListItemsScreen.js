import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Alert, ActivityIndicator, FlatList } from "react-native";

import { ITEM } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import MyItemCardSmall from "../components/MyItemCardSmall";
import ItemDetailScreen from '../screens/ItemDetailScreen';


import EditableCard from "../components/EditableCard";
import Logo from "../components/Logo";
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

// HH - import the Java backend address ( URL)
import backendUrl from "../constants/backendUrl";


function ListItemsScreen(props) {

    const [itemsInCat, setItemsInCat] = useState([]);
    // const [allItems, setAllItems] = useState([]);
    const [messageDisplayed, setMessageDisplayed] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [hasMessage, setMessage] = useState(false);



  // HH - created to read data from dummy-data to find the items with our selected Category
  const { catId } = props.route.params;
  const selectedCategoryId = catId;
  console.log('cat: '+selectedCategoryId)

// // HH - for dummy data
  // const selectedItem = ITEM.filter(
  //     cat => cat.categoryId.indexOf(selectedCategoryId) >= 0);



// HH - for read item table and select items with selected category id************************************* start
  // *** GET ***
  async function fetchCatData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      //response = await fetch("http://10.0.2.2:8080/rest/itemservice/getall");
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/getItemsincategory/"+selectedCategoryId);

    }
    catch(error){
      showError(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      //console.log(responseData);//Just for checking.....
      setItemsInCat(responseData);
    }
    catch(error){
      showError(error);
    }
  }

  console.log(itemsInCat)
  useEffect(() => {
    console.log('useEffect(() => {'); 
      if (isLoading==true){
        //fetchData();
        fetchCatData();
        setLoading(false);
    }
  });
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
  //console.log(messageDisplayed);

 // ********************************************************************************** end


  // HH - created  to render MyItemCard component details*****************
    const renderMyItem = itemData =>{
        return( 
            <MyItemCardSmall 
            title={itemData.item.title} 
            price={itemData.item.price}
            condition={itemData.item.condition}            
            description={itemData.item.description}
            onSelect={()=> {props.navigation.navigate('ItemDetail',{ itemId:itemData.item.itemId })} }
            imageUrl={itemData.item.image}
            />
          );
            

    };


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
      <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <Text>{hasMessage}</Text>
        <Text>{""+messageDisplayed}</Text>
        <Button title='close' onPress={()=>closeMessage()}/>
      </View>
    );
  }
  //Otherwise the list is shown
  else{

    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <FlatList
          data={itemsInCat}
          keyExtractor={(item, index)=> item.itemId.toString()}
          renderItem={renderMyItem}
          style={{width:'80%', }}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:colors.light4,
  },
  titleContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop:40,
    fontSize: 20,

  },
  headerContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  header: {
    height: 60,
    width: '100%',
  },
  rect: {
    flex:8,
    width: '100%',
    justifyContent:'flex-start',
    alignItems:'center',
    margin:10,
  },
  editableCard: {
    width: '80%',
  },
  logoContainer:{
    marginTop:30,
    
  },
});

export default ListItemsScreen;

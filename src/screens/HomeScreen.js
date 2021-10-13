import React, { Component , useState , useEffect } from "react";
import { StyleSheet, View, Text, Alert, ActivityIndicator, FlatList } from "react-native";

//import { ITEM } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import MyItemCardSmall from "../components/MyItemCardSmall";

import EditableCard from "../components/EditableCard";
import Logo from "../components/Logo";
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function HomeScreen(props) {
  
  // HH - add for reding data from MYSQL database**********start
  const [hasMessage, setMessage] = useState(false);
  const [messageDisplayed, setMessageDisplayed] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [isLoading, setLoading] = useState(true);


  function showError(error){
    setMessage(true);
    setMessageDisplayed("Error: " + error);
    console.log(messageDisplayed);
  }

  // HH - for items decending 
  // *** GET ***
  async function fetchCatData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      //response = await fetch("http://10.0.2.2:8080/rest/itemservice/getall");
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/getalldesc");

    }
    catch(error){
      showError(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      console.log(responseData);//Just for checking.....
      setAllItems(responseData);
    }
    catch(error){
      showError(error);
    }
  }

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



    // HH *************************************************End



  // HH - created to read data from dummy-data
  // const myItemsList = ITEM.find(posted => posted.customerId === 'p004');
  //const AllItemsList = ITEM;

  // HH - created  to render MyItemCard component details*****************
    const renderMyItem = itemData =>{
        // HH - just for test
        // console.log(itemData.item.itemId);
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
        <View style={styles.logoContainer}>
          <Logo style={styles.logo}></Logo>
        </View>
        <View style={styles.rect}>
          <FlatList
          data={allItems}
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
    backgroundColor: colors.light4,
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
    marginTop:40,
    padding: 5,
    width:'95%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    alignItems:'center',
  },
});

export default HomeScreen;

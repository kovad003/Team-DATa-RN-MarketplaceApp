import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Alert, ActivityIndicator, FlatList } from "react-native";
import 'react-native-gesture-handler';




import HeaderComponent from "../components/HeaderComponent";
import CategoryButton from "../components/CategoryButton";
//import { CATEGORIES } from "../data/dummy-data"; // dummy-data
import ListItemsScreen from '../screens/ListItemsScreen'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function CategoryScreen(props) {

  // HH - add for reding data from MYSQL database**********start
  const [hasMessage, setMessage] = useState(false);
  const [messageDisplayed, setMessageDisplayed] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);


  function showError(error){
    setMessage(true);
    setMessageDisplayed("Error: " + error);
    console.log(messageDisplayed);
  }

  // HH - for categories 
  // *** GET ***
  async function fetchCatData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      //response = await fetch("http://10.0.2.2:8080/rest/itemservice/getall");
      response = await fetch("http://10.0.2.2:8080/rest/categoryservice/getall");

    }
    catch(error){
      showError(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      console.log(responseData);//Just for checking.....
      setCategories(responseData);
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


  const renderCategoryItem = itemData => {
    return( 

      // // for dummy data*******************Start
      // <CategoryButton 
      // title={itemData.item.title}
      // onSelect={()=> props.navigation.navigate('CategoryList',{ catId:itemData.item.id })}
      // color= {itemData.item.color}
      // image={itemData.item.url}
      // />
      // // ********************************End
      <CategoryButton 
      id={itemData.item.id}
      title={itemData.item.title}
      color={itemData.item.color}
      description={itemData.item.description}
      imageUrl={itemData.item.imageUrl}
      onSelect={()=> props.navigation.navigate('CategoryList',{ catId:itemData.item.id })}
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
    console.log('else{');
    return (
      <View style={styles.container}>
        <View style={styles.scrollArea}>
          <View style={styles.categoryItems}>
            <FlatList 
            keyExtractor={(cat, index) => cat.id}
            //HH - for dummy-data
            // data={CATEGORIES} 
            data={categories}
            renderItem={renderCategoryItem} 
            numColumns={2}
            />
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    justifyContent:'center',
    backgroundColor:colors.light4,

  },
  scrollArea: {
    flex:1,
    height:'100%',
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  logoContainer:{
    marginTop:30,
    
  },
  categoryItems:{
    flex:5,
    width:'100%',

  },
  headerContainer:{
    height: 60,
    justifyContent:'center',
    alignItems:'center'

  },
  header: {
    height: 60,
    width: '100%',
  },



  categoryButton: {

    marginTop: 18,
    marginLeft: 11
  }
});

export default CategoryScreen;


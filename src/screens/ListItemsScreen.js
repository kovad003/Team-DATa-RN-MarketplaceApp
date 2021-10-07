import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { POSTEDITEMS } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import MyItemCardSmall from "../components/MyItemCardSmall";
import ItemDetailScreen from '../screens/ItemDetailScreen';


import EditableCard from "../components/EditableCard";
import Logo from "../components/Logo";


function ListItemsScreen(props) {

  
  // HH - created to read data from dummy-data to find the items with our selected Category
  const { catId } = props.route.params;
  const selectedCategoryId = catId;
    //console.log(selectedCategoryId)

  const selectedItem = POSTEDITEMS.filter(
      cat => cat.categoryId.indexOf(selectedCategoryId) >= 0);

  // HH - created  to render MyItemCard component details*****************
    const renderMyItem = itemData =>{
        //console.log(myItemsList);
        return( 
            <MyItemCardSmall 
            title={itemData.item.title} 
            price={itemData.item.price}
            condition={itemData.item.condition}            
            description={itemData.item.description}
            onSelect={()=> {props.navigation.navigate('ItemDetail',{ itemId:itemData.item.id }) ; console.log(itemData.item.id)} }
            imageUrl={itemData.item.imageUrl}
            />
          );
            

    };

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <FlatList
        data={selectedItem}
        keyExtractor={(item, index)=> item.id}
        renderItem={renderMyItem}
        style={{width:'80%', }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
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

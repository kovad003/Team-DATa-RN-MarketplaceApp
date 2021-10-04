import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { POSTEDITEMS } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import EditableCard from "../components/EditableCard";
import HeaderComponent from "../components/HeaderComponent";


function ListItemsScreen(props) {

  
  // created By Hossein to read data from dummy-data
  // const myItemsList = POSTEDITEMS.find(posted => posted.customerId === 'p004');
  const myItemsList = POSTEDITEMS.filter(
        posted => posted.customerId.indexOf('p004') >= 0);

  // created by Hossein to render MyItemCard component details*****************
    const renderMyItem = itemData =>{
        console.log(myItemsList);
        return( 
            <MyItemCard 
            title={itemData.item.title} 
            price={itemData.item.price}
            condition={itemData.item.condition}            
            description={itemData.item.description}
            onSelectPost={()=>{}}
            imageUrl={itemData.item.imageUrl}
            />
          );
    };


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Items...</Text>
      </View>
      <View style={styles.rect}>
        {/* <EditableCard style={styles.editableCard}></EditableCard> */}

        <FlatList
        data={myItemsList}
        keyExtractor={(item, index)=> item.id}
        renderItem={renderMyItem}
        style={{width:'80%', }}
        />

      </View>
      <View style={styles.headerContainer}>
        <HeaderComponent style={styles.header}></HeaderComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    margin:20,
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
  }
});

export default ListItemsScreen;

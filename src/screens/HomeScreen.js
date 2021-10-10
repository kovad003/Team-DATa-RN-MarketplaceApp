import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { ITEM } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import MyItemCardSmall from "../components/MyItemCardSmall";

import EditableCard from "../components/EditableCard";
import Logo from "../components/Logo";
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function HomeScreen(props) {
  
  // HH - created to read data from dummy-data
  // const myItemsList = ITEM.find(posted => posted.customerId === 'p004');
  const AllItemsList = ITEM;

  // HH - created  to render MyItemCard component details*****************
    const renderMyItem = itemData =>{
        //console.log(myItemsList);
        return( 
            <MyItemCardSmall 
            title={itemData.item.title} 
            price={itemData.item.price}
            condition={itemData.item.condition}            
            description={itemData.item.description}
            onSelect={()=> {props.navigation.navigate('ItemDetail',{ itemId:itemData.item.id })} }
            imageUrl={itemData.item.imageUrl}
            />
          );
    };


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo style={styles.logo}></Logo>
      </View>
      <View style={styles.rect}>
        <FlatList
        data={AllItemsList}
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
    marginTop:30,
    
  },
});

export default HomeScreen;

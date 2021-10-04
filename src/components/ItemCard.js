import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SellerTab from "./SellerTab";
import ImageHolder from "./ImageHolder";
import ViewCounter from "./ViewCounter";
import IconButton from "./IconButton";
import colors from "../constants/colors";
import { Margins, Paddings } from "../constants/constvalues";

function ItemCard(props) {
  return (
    <View style={styles.container}>
      {/* --------------------------------------------------------------------- */}
      <SellerTab style={styles.sellerTab}></SellerTab>
      {/* --------------------------------------------------------------------- */}
      <ImageHolder style={styles.imageHolder}></ImageHolder>
      {/* --------------------------------------------------------------------- */}
      <View style={styles.titleRow}>
        <View style={styles.title}>
          <Text >Title</Text>
        </View>
        <View style={styles.price}>
          <Text >Price €</Text>
        </View>
      </View>
      {/* --------------------------------------------------------------------- */}
      <View style={styles.description}>
          <Text style={styles.descriptionText}>description text</Text>
      </View>
      {/* --------------------------------------------------------------------- */}
      <View style={styles.viewCounterRow}>
        {/* .................................... */}
        <View style={styles.viewCounter}>
          <ViewCounter></ViewCounter>
        </View>
        {/* .................................... */}
        <View style={styles.shoppingButton}>
          <IconButton 
            iconName="magnifying-glass"
            icon="shopping-cart"     
          ></IconButton>  
        </View>
        {/* .................................... */}    
      </View>
      {/* --------------------------------------------------------------------- */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    //height: '50%',
    backgroundColor: colors.light3,
    borderRadius: 15,
    justifyContent: 'center',
    margin: Margins.large,
    padding: Paddings.midsize
  },
  sellerTab:{
    alignSelf: 'center',
  },
  imageHolder: {
    alignSelf: 'center',
    backgroundColor: 'black',
    height: 250,
    width: '90%',
  },
  titleRow:{
    flexDirection: 'row',
    //flex:1,
    marginVertical: 10
  },
  title: {
    width:'50%',  
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  price: {
    width:'50%',  
    flexDirection: 'row',
    justifyContent:'flex-end',
  },
  description: {
    marginVertical: 5
  },
  viewCounterRow:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  viewCounter: {
    width:'50%',  
    flexDirection:'row',
    justifyContent:'flex-start',
    
  },
  shoppingButton:{
    width:'50%',  
    flexDirection:'row',
    justifyContent:'flex-end',
  }
});

export default ItemCard;

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/AntDesign";

// AD - constants
import TextStyling from '../constants/fontstyling'
// Added for margins and paddings
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function ItemSuccessfullyAdded(props) {
  return (
    <View style={[styles.container, props.style]}>  
      <TouchableOpacity style={styles.rowContainer}>
        <Icon1 name="pushpino" style={styles.icon1}></Icon1>
        <Icon2 name="sticker-emoji" style={styles.icon2}></Icon2>
        <Text style={TextStyling.textBlackMedium}>{props.rowText}</Text>
        <Icon3 name="right" style={styles.icon3}></Icon3>        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingRight: Paddings.large,  //large

   
  },

  icon1: {
    //color: "rgba(128,128,128,1)",
    color: colors.danger,
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center'
  },

  icon2: {
    color: colors.danger,
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: '11%',
    paddingTop: '1%',
  },

  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center'
  },
  
});

export default ItemSuccessfullyAdded;

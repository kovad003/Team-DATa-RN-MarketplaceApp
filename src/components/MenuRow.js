import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// AD - constants
import TextStyling from '../constants/fontstyling'
// Added for margins and paddings
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function MenuRow(props) {


  


  return (
    <View style={props.style}>  
      <TouchableOpacity 
        onPress = {props.onSelect}
        style={[styles.rowContainer, {backgroundColor: props.bckgcol || "#E6E6E6"}]}>
        <Icon 
          name={props.icon1 || "chevron-left"} 
          style={[styles.icon1, {color: props.icon1color || colors.danger}]}
        />
        <Text 
          style={props.textstyling || TextStyling.textBlackMedium}>{props.rowText}
        </Text>
        <Icon 
          name={props.icon2 || "chevron-right"} style={[styles.icon2, {color: props.icon2color || "#808080"}]}
        />      
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
    //backgroundColor: "#E6E6E6",  
    height: 53,   
    
    justifyContent:'space-between', // center
    alignItems:'center',
    flexDirection: 'row',
    paddingLeft: '9%', // '20%'
    paddingRight: Paddings.large    
  },

  icon1: {
    //color: "rgba(128,128,128,1)",
    color: colors.danger,
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center'
  },

  icon2: {
    color: "#808080",
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center'
  },
  
});

export default MenuRow;

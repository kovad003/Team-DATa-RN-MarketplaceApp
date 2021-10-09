import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// AD - constants
import TextStyling from '../constants/fontstyling'
// Added for margins and paddings
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function AccountScreenRow1(props) {
  return (
    <View style={props.style}>  
      <TouchableOpacity style={[styles.rowContainer, {backgroundColor: props.bckgcol || "#E6E6E6"}]}>
        <Icon name={props.icon1} style={styles.icon1}></Icon>
        <Text style={TextStyling.textBlackMedium}>{props.rowText}</Text>
        <Icon name={props.icon2 || "chevron-right"} style={styles.icon2}></Icon>        
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
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  
});

export default AccountScreenRow1;

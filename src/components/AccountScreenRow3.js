import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";

// AD - constants
import TextStyling from '../constants/fontstyling'
// Added for margins and paddings
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function AccountScreenRow3(props) {
  return (
    <View style={[styles.container, props.style]}>  
      <TouchableOpacity style={styles.rowContainer}>
        <Icon1 name="settings-outline" style={styles.icon}></Icon1>
        <Text style={TextStyling.textBlackMedium}>{props.rowText}</Text>
        <Icon2 name="right" style={styles.icon}></Icon2>        
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
    paddingRight: Paddings.large    
  },

  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center'
  },
  
});

export default AccountScreenRow3;

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

// AD - constants
import TextStyling from '../constants/fontstyling'
// Added for margins and paddings
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function AccountScreenRow6(props) {
  return (
    <View style={[styles.container, props.style]}>
  
        <TouchableOpacity style={styles.rowContainer}>
        <Text style={TextStyling.textWhiteMedium}>Delete Account</Text>
        <Icon name="right" style={styles.icon}></Icon>
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
    backgroundColor: colors.danger,  
    height: 53,    
    justifyContent:'space-between', //center
    alignItems:'center',
    flexDirection: 'row',
    paddingLeft: '20%',
    paddingRight: Paddings.large  
  },

  icon: {
    color: colors.white,
    fontSize: 30,  
    justifyContent:'center',
    alignItems:'center'
  },
  
});

export default AccountScreenRow6;

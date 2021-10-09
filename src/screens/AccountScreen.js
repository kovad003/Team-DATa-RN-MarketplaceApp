import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import MenuRow from "../components/MenuRow";
import LogoSmall from "../components/LogoSmall";

// AD - constants
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function AccountScreen(props) {
  return (

    <ScrollView style={styles.scrollStyle}>
      <View style={styles.container}>  
        <View style={styles.centralContainer}>
   
          <View style={styles.logoContainer}>
            <LogoSmall></LogoSmall>
          </View>

          <MenuRow style = {styles.row1} rowText = "Register"
            icon1 = "account-plus-outline"/>
          <MenuRow style = {styles.row2} rowText = "Login"
            icon1 = "login" />
          <MenuRow style = {styles.row2} rowText = "Settings"
            icon1 = "cog-outline" />
          <MenuRow style = {styles.row2} rowText = "Premium"
            icon1 = "crown" />
          <MenuRow style = {styles.row2} rowText = "Support"
            icon1 = "face-agent" />
          <MenuRow style = {styles.row3} bckgcol = {colors.danger}    rowText = "Delete Account"
            icon1 = "delete-forever"
            icon2 = "alert-octagon"
            textstyling = {TextStyling.textWhiteMedium}
            icon1color = "white"
            icon2color = "white"  />        
        </View>
      </View>
    </ScrollView>        
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: colors.light4,
    //justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',   
    width:'100%',    
  },   
  
  logoContainer:{
    marginTop: 26, //25
    alignItems: 'center',   
  },

  row1: {
    marginVertical: Margins.large, // xlarge
  },

  row2: {
    marginVertical: Margins.xxnarrow, // narrow
  },

  row3: {
    marginVertical: Margins.large, // xlarge
  },

  centralContainer: {
    flex: 1,   
    justifyContent: 'center',
    width: '100%', 
    backgroundColor: colors.light4,
  },

});

export default AccountScreen;

import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ImageUploader from "../components/ImageUploader";
import CreateItemForm from "../components/CreateItemForm";
import AccountTile from "../components/AccountTile";
import AccountTile2 from "../components/AccountTile2";
import AppButton from "../components/AppButton";
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
            <LogoSmall style={styles.logo}></LogoSmall>
          </View>

          <AccountTile rowText = "Register" style = {styles.row1} />
          <AccountTile rowText = "Login" style = {styles.row2} />
          <AccountTile rowText = "Settings" style = {styles.row2} />
          <AccountTile rowText = "Premium" style = {styles.row2} />
          <AccountTile rowText = "Contact" style = {styles.row2} />
          <AccountTile2 
                rowText = "Delete Account" 
                style = {styles.row3} 
                />          
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
    marginTop:30,
    alignItems: 'center',    
  },

  row1: {
    marginVertical: Margins.xlarge, // xlarge
  },

  row2: {
    marginVertical: Margins.narrow, // narrow
  },

  row3: {
    marginVertical: Margins.xlarge, // xlarge
  },

  centralContainer: {
    flex: 1,   
    justifyContent: 'center',
    width: '100%', 
    backgroundColor: colors.light4,
  },

});

export default AccountScreen;

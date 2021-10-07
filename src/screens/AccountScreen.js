import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ImageUploader from "../components/ImageUploader";
import CreateItemForm from "../components/CreateItemForm";
import AccountScreenRow1 from "../components/AccountScreenRow1";
import AccountScreenRow2 from "../components/AccountScreenRow2";
import AccountScreenRow3 from "../components/AccountScreenRow3";
import AccountScreenRow4 from "../components/AccountScreenRow4";
import AccountScreenRow5 from "../components/AccountScreenRow5";
import AccountScreenRow6 from "../components/AccountScreenRow6";
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

          <AccountScreenRow1 rowText = "Register" style = {styles.row1} />
          <AccountScreenRow2 rowText = "Login" style = {styles.row2} />
          <AccountScreenRow3 rowText = "Settings" style = {styles.row2} />
          <AccountScreenRow4 rowText = "Premium" style = {styles.row2} />
          <AccountScreenRow5 rowText = "Support" style = {styles.row2} />
          <AccountScreenRow6 
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

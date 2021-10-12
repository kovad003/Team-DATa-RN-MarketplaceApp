import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import MenuRow from "../components/MenuRow";
import LogoSmall from "../components/LogoSmall";

// AD - constants
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import CreateItemInput from "../components/CreateItemInput";

function AccountScreen(props) {

  /* AD - for the AccountScreen -> login page modal visibility */
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const onAddItem=()=>{
    setLoginVisible(true);
  }

  const cancelAddItem = ()=>{
    setLoginVisible(false);
  }

  const onAddItem2=()=>{
    setRegisterVisible(true);
  }

  const cancelAddItem2 = ()=>{
    setRegisterVisible(false);
  }

  /*   
  This is called every time the view is rendered
  The new calls of fetchData (and others) must be stopped somehow, because in
  those methods are statevariables set, which cause a new re-render. 

useEffect(() => {
  console.log('useEffect(() => {'); 
    if (isLoading==true){
      fetchData();
      setLoading(false);
  }
});

*/

  return (

    <ScrollView style={styles.scrollStyle}>
      <View style={styles.container}>  
        <View style={styles.centralContainer}>
   
          <View style={styles.logoContainer}>
            <LogoSmall></LogoSmall>
          </View>

          <MenuRow style = {styles.row1} rowText = "Register"
            icon1 = "account-plus-outline"/>
          <MenuRow style = {styles.row1a} rowText = "Login"
            icon1 = "login" />

        
            <Text 
            text = 'submit'
            style = {TextStyling.textBlackSmall}
            onPress={()=>setLoginVisible(true)} >
            Login</Text>

            <Text 
            text = 'submit'
            style = {TextStyling.textBlackSmall}
            onPress={()=>setRegisterVisible(true)} >
            Registration</Text> 
          

          <MenuRow style = {styles.row2} rowText = "About"
            icon1 = "information-outline" />
          <MenuRow style = {styles.row2} rowText = "Settings"
            icon1 = "cog-outline" />
          <MenuRow style = {styles.row2} rowText = "Premium"
            icon1 = "crown" />          
          <MenuRow style = {styles.row2} bckgcol = {colors.danger} rowText = "Delete Account"
            icon1 = "delete-forever"
            icon2 = "alert-octagon"
            textstyling = {TextStyling.textWhiteMedium}
            icon1color = "white"
            icon2color = "white"  />
          <MenuRow style = {styles.row3} rowText = "Support"
          icon1 = "face-agent" />

          <LoginScreen 
          visibility={isLoginVisible} 
          onAddItem={onAddItem}
          /* itemList={items} */
          onCancelItem={cancelAddItem}         
          /> 

          <RegistrationScreen 
          visibility={isRegisterVisible} 
          onAddItem2={onAddItem2}
          /* itemList={items} */
          onCancelItem2={cancelAddItem2} 
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
    marginTop: 17, //20
    alignItems: 'center',   
  },

  row1: {
    marginTop: 17,
    marginBottom: Margins.xxnarrow,
  },

  row1a: {
    marginTop: Margins.xxnarrow,
    marginBottom: Margins.large,
  },

  row2: {
    marginVertical: Margins.xxnarrow, // narrow
  },

  row3: {
    marginVertical: Margins.midsize, // xlarge
  },

  centralContainer: {
    flex: 1,   
    justifyContent: 'center',
    width: '100%', 
    backgroundColor: colors.light4,
    
  },

});

export default AccountScreen;

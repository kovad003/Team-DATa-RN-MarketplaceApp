import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ImageUploader from "../components/ImageUploader";
import IconInputBoxAttached from "../components/IconInputBoxAttached";
import AccountTile from "../components/AccountTile";
import AppButton from "../components/AppButton";

// AD - constants
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function AccountScreen(props) {
  return (
    <View style={styles.container}> 
      <View style={styles.titleContainer}>        
        <Text style={TextStyling.textBlackLarge} >
          Account Screen      
        </Text>
      </View>
     
      <AccountTile style={styles.imageUploader} ></AccountTile> 
        
        
        <IconInputBoxAttached
          style={styles.iconInputBoxAttached}>
        </IconInputBoxAttached>     


      <View style={styles.buttonContainer}>
        <AppButton button="Upload" style={styles.uploadButton}></AppButton>
        <AppButton button="Cancel" style={styles.cancelButton}></AppButton>
      </View>
    
      <HeaderComponent style={styles.header}></HeaderComponent>
    </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // AD - added align
    backgroundColor: colors.light4, // AD - added background

    width:'100%',
    justifyContent:'center',
  },    

  // AD - testing
  headerContainer:{
    flex:1,
    //height: 60,
    justifyContent:'center',
    alignItems:'center'

  },
  // AD - testing
  header: {
    flex:1,   
    width: '100%',
    // height: 60,   
  },
  
  
  imageUploader: {
    height: 104,
    width: 339,    
    alignItems: 'center', // AD - added
    marginTop: Margins.narrow, // AD - added margin Top
    marginBottom: Margins.xlarge, // AD - added margin bottom  
  },
  
  iconInputBoxAttached: {
    height: 44,
    width: 317,
    alignItems: 'center', // AD - added align
    marginLeft: Margins.narrow, // AD - added margin left
   
    
   
  },  
  buttonContainer: {
    height: 89,
    marginTop: 250,
    width: '80%',
    alignItems: 'center', // AD - added align  
    marginBottom: Margins.narrow, // AD - added margin bottom
    
   
  },

  /* AD - an extra container for the title */
  titleContainer: {  
    height: 42,
    paddingVertical: Paddings.xnarrow,
    width: '93%',
    alignItems: 'center', // AD - added align
    backgroundColor: 'red',
    marginTop: Margins.large, // AD - added margin Top  
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },

    backgroundColor: colors.light2,
  
  },
  /* AD - added placeholder stylings */
  placeholder: {
    //fontFamily: "roboto-regular",
    color: "#121212", // "#121212"
    height: 30,
    width: 249,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    textAlign: "center",
    marginLeft: 18
  },

  /* AD - added text stylings */
  customText: {

  },

  uploadButton: {
    width: 206,
    height: 36,
    marginTop: 4,
    backgroundColor: colors.light2, // AD - added color
  },
  cancelButton: {
    width: 206,
    height: 36,
    overflow: "visible",
    backgroundColor: "rgba(11,67,130,1)",
    marginTop: 9,
    backgroundColor: colors.light5, // AD - added color
    
  }
});

export default AccountScreen;

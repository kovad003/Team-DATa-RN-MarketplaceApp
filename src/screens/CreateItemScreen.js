import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ImageUploader from "../components/ImageUploader";
import IconInputBoxAttached from "../components/IconInputBoxAttached";
import AppButton from "../components/AppButton";

// AD - constants
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function CreateItemScreen(props) {
  return (
    <View style={styles.containerCIS}>
      {/* AD - adds title text */}
      <View style={styles.titleContainerCIS}>        
        <Text style={TextStyling.textBlackLarge} >
          Create Item
          {/*Price
          placeholder="Create Item"
          style={styles.placeholder}*/}
        </Text>
      </View>
      {/* <HeaderComponent style={styles.headerCIS}></HeaderComponent>*/}
      <ImageUploader style={styles.imageUploaderCIS}></ImageUploader> 
        <IconInputBoxAttached
          style={styles.iconInputBoxAttachedCIS}
        ></IconInputBoxAttached>     
      <View style={styles.buttonContainerCIS}>
        <AppButton button="Upload" style={styles.uploadButtonCIS}></AppButton>
        <AppButton button="Cancel" style={styles.cancelButtonCIS}></AppButton>
      </View>
      <HeaderComponent style={styles.headerCIS}></HeaderComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCIS: {
    flex: 1,
    alignItems: 'center', // AD - added align
    backgroundColor: colors.light4, // AD - added background
  },
  headerCIS: {
    height: 39,
    width: 339,
    //marginTop: 35,
    //marginLeft: 10 // AD - removed
    alignItems: 'center', // AD - added 
  },
  
  imageUploaderCIS: {
    height: 104,
    width: 339,
    //marginTop: 21, AD - removed
    // marginLeft: 10, // AD - removed
    //marginTop: Margins.xxlarge, // AD marginTop
    

    alignItems: 'center', // AD - added
    marginTop: Margins.narrow, // AD - added margin Top
    marginBottom: Margins.xlarge, // AD - added margin bottom  
  },
  iconInputBoxAttachedCIS: {
    height: 44,
    width: 317,
    //marginTop: 42, AD - removed

    //marginLeft: 20, // AD - removed
    //padding: Paddings.midsize, // AD - removed

    alignItems: 'center', // AD - added align
    marginLeft: Margins.narrow, // AD - added margin left
   
    
   
  },  
  buttonContainerCIS: {
    //width: 339, AD - removed
    height: 89,
    marginTop: 250,
    //marginLeft: 10, // AD - removed
    //padding: Paddings.midsize, // AD - removed
    width: '80%',

    alignItems: 'center', // AD - added align
    //backgroundColor: 'red',
    marginBottom: Margins.narrow, // AD - added margin bottom
    
   
  },

  /* AD - an extra container for the title */
  titleContainerCIS: {
    //width: 339, AD - removed
    height: 42, 
 
    //marginTop: 20,
    //marginLeft: 10, // AD - removed
    paddingVertical: Paddings.xnarrow,
    //paddingVertical: 'auto',
    width: '88%',
    alignItems: 'center', // AD - added align
    backgroundColor: 'red',   

    marginTop: Margins.large, // AD - added margin Top
    //marginBottom: Margins.xxlarge, // AD - added margin bottom
    //backgroundColor: "#E6E6E6", // "#E6E6E6"
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

  uploadButtonCIS: {
    width: 206,
    height: 36,
    marginTop: 4,
    // marginLeft: 66 // AD - removed
    
  },
  cancelButtonCIS: {
    width: 206,
    height: 36,
    overflow: "visible",
    backgroundColor: "rgba(11,67,130,1)",
    marginTop: 9,
    // marginLeft: 66 // AD - removed
    
  }
});

export default CreateItemScreen;

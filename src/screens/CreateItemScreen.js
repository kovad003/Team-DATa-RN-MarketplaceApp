import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ImageUploader from "../components/ImageUploader";
import CreateItemForm from "../components/CreateItemForm";
import AppButton from "../components/AppButton";

// AD - constants
import TextStyling from '../constants/fontstyling'
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function CreateItemScreen(props) {
  return (
    
      <ScrollView>
      <View style={styles.container}>     
        <ImageUploader style={styles.imageUploader}></ImageUploader> 
          <CreateItemForm
            style={styles.CreateItemForm}>
          </CreateItemForm>     
        <View style={styles.buttonContainer}>
          <AppButton button="Upload" style={styles.uploadButton}></AppButton>
          <AppButton button="Cancel" style={styles.cancelButton}></AppButton>
        </View>
      
      </View>
      </ScrollView>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // AD - added align
    backgroundColor: colors.light4, // AD - added background
    width:'100%',
    justifyContent:'center',

    marginVertical: Margins.xnarrow,
  },  
  imageUploader: {
    height: 104,
    width: 339,
    alignItems: 'center', // AD - added
    marginTop: Margins.narrow, // AD - added margin Top
    marginBottom: Margins.xlarge, // AD - added margin bottom  
  },
  CreateItemForm: {
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

export default CreateItemScreen;

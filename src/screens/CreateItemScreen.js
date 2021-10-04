import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ImageUploader from "../components/ImageUploader";
import IconInputBoxAttached from "../components/IconInputBoxAttached";
import AppButton from "../components/AppButton";
import { Margins, Paddings } from "../constants/constvalues";



function CreateItemScreen(props) {
  return (
    <View style={styles.containerCIS}>
      <HeaderComponent style={styles.headerCIS}></HeaderComponent>
      <ImageUploader style={styles.imageUploaderCIS}></ImageUploader>
      <IconInputBoxAttached
        style={styles.iconInputBoxAttachedCIS}
      ></IconInputBoxAttached>
      <View style={styles.buttonContainerCIS}>
        <AppButton button="Upload" style={styles.uploadButtonCIS}></AppButton>
        <AppButton button="Cancel" style={styles.cancelButtonCIS}></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCIS: {
    flex: 1,
    alignItems: 'center', // AD - added align
  },
  headerCIS: {
    height: 39,
    width: 339,
    marginTop: 35,
    //marginLeft: 10 // AD - removed
    alignItems: 'center',
    backgroundColor: 'red', // AD - just for testing
  },
  imageUploaderCIS: {
    height: 104,
    width: 339,
    marginTop: 21,
    marginLeft: 10,
    //margin: Margins.midsize, // AD - removed
    //padding: Paddings.midsize, // AD - added

    //alignItems: 'center',
  },
  iconInputBoxAttachedCIS: {
    height: 44,
    width: 317,
    marginTop: 42,
    marginLeft: 20,
    //padding: Paddings.midsize, // AD - removed

    alignItems: 'center', // AD - added align
  },
  buttonContainerCIS: {
    //width: 339, AD - removed
    height: 89,
    marginTop: 250,
    //marginLeft: 10, // AD - removed
    //padding: Paddings.midsize, // AD - removed
    width: '80%',

    alignItems: 'center', // AD - added align
    backgroundColor: 'red', // AD - just for testing
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

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ImageUploader from "../components/ImageUploader";
import IconInputBoxAttached from "../components/IconInputBoxAttached";
import AppButton from "../components/AppButton";
import { Paddings } from "../constants/constvalues";



function CreateItemScreen(props) {
  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header}></HeaderComponent>
      <ImageUploader style={styles.imageUploader}></ImageUploader>
      <IconInputBoxAttached
        style={styles.iconInputBoxAttached}
      ></IconInputBoxAttached>
      <View style={styles.buttonContainer}>
        <AppButton button="Upload" style={styles.uploadButton}></AppButton>
        <AppButton button="Cancel" style={styles.cancelButton}></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 39,
    width: 339,
    marginTop: 35,
    marginLeft: 10
  },
  imageUploader: {
    height: 104,
    width: 339,
    marginTop: 21,
    marginLeft: 10,
    padding: Paddings.midsize, // AD - added
  },
  iconInputBoxAttached: {
    height: 44,
    width: 317,
    marginTop: 42,
    marginLeft: 20,
    padding: Paddings.midsize, // AD - added
  },
  buttonContainer: {
    width: 339,
    height: 89,
    marginTop: 250,
    marginLeft: 10,
    // padding: Paddings.midsize, // AD - added
  },
  uploadButton: {
    width: 206,
    height: 36,
    marginTop: 4,
    marginLeft: 66
  },
  cancelButton: {
    width: 206,
    height: 36,
    overflow: "visible",
    backgroundColor: "rgba(11,67,130,1)",
    marginTop: 9,
    marginLeft: 66
  }
});

export default CreateItemScreen;

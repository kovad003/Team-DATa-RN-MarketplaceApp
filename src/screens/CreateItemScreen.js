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
  },
  headerCIS: {
    height: 39,
    width: 339,
    marginTop: 35,
    marginLeft: 10
  },
  imageUploaderCIS: {
    height: 104,
    width: 339,
    marginTop: 21,
    marginLeft: 10,
    margin: Margins.midsize, // AD - added
    padding: Paddings.midsize, // AD - added
  },
  iconInputBoxAttachedCIS: {
    height: 44,
    width: 317,
    marginTop: 42,
    marginLeft: 20,
    padding: Paddings.midsize, // AD - added
  },
  buttonContainerCIS: {
    width: 339,
    height: 89,
    marginTop: 250,
    marginLeft: 10,
    padding: Paddings.midsize, // AD - added
  },
  uploadButtonCIS: {
    width: 206,
    height: 36,
    marginTop: 4,
    marginLeft: 66
  },
  cancelButtonCIS: {
    width: 206,
    height: 36,
    overflow: "visible",
    backgroundColor: "rgba(11,67,130,1)",
    marginTop: 9,
    marginLeft: 66
  }
});

export default CreateItemScreen;

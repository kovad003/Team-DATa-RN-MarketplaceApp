import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function ImageUploader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.imageUploaderContainer}>
        <Icon name="squared-plus" style={styles.icon}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageUploaderContainer: {
    width: 339,
    height: 104,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "dashed",
    borderRadius: 15
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 30,
    marginLeft: 150
  }
});

export default ImageUploader;

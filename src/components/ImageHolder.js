import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function ImageHolder(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(82,76,76,1)",
    borderRadius: 5
  }
});

export default ImageHolder;

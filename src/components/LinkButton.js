import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function LinkButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>{props.label || "Label"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 182,
    height: 38
  },
  label: {
    //fontFamily: "comic-sans-ms-regular",
    color: "rgba(86,85,85,1)",
    fontSize: 18,
    textAlign: "center",
    marginTop: 6,
    marginLeft: 6
  }
});

export default LinkButton;

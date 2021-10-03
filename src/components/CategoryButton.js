// Standard Imports
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

// Custom Import
import TextStyling from '../constants/fontstyling'


function CategoryButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.textRow}>
          <Text style={TextStyling.textWhiteLarge}>Category</Text>
          <View style={styles.imageHolder}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 309,
    height: 72,
    backgroundColor: "rgba(11,129,217,1)",
    borderRadius: 15,
    flexDirection: "row",
    alignSelf: "center"
  },
  text: {
    //fontFamily: "roboto-700",
    //color: "rgba(255,255,255,1)",
    //fontSize: 26,
    //marginTop: 11
  },
  imageHolder: {
    width: 99,
    height: 57,
    borderRadius: 30,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 59
  },
  textRow: {
    height: 57,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 24,
    marginTop: 7
  }
});

export default CategoryButton;

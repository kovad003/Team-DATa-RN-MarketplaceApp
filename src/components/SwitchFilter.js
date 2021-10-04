//Standard Import
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

//Custom Import
//constants
import colors from "../constants/colors";
import fontstyling from "../constants/fontstyling";
//components
import SwitchComponent from "./SwitchComponent";

function SwitchFilter(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SwitchComponent></SwitchComponent>
        <Text style={fontstyling.textBlackLarge}>{props.label || 'label'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.light2,
    backgroundColor: '#fbf9eb',
    borderRadius: 15,
    marginVertical: 3,
    marginHorizontal: 50,
    // ------------------------------
    //android shadows
    elevation: 3,
    //ios sahdows
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    // ------------------------------
  },
  row: {
    height: 40,
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 15,
  }
});

export default SwitchFilter;

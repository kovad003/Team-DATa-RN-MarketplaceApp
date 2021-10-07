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
        <SwitchComponent value={props.value ? true : false}></SwitchComponent>
        <Text style={styles.label}>{props.label || 'label'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.light2,
    backgroundColor: 'white',
    borderRadius: 0,
    marginVertical: 1,
    marginHorizontal: 0,
    // ------------------------------
    //android shadows
    elevation: 3,
    //ios sahdows
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    // ------------------------------
  },
  row: {
    height: 40,
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 15,
  },
  label:{
    fontFamily: 'caballar',
    fontSize: 22,
    color: 'black',
  },
});

export default SwitchFilter;

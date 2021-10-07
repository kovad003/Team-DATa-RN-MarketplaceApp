//Standard Import
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

//Custom Import
import colors from "../constants/colors";
import fontstyling from "../constants/fontstyling";

function ScrollDownList(props) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.label}>{props.label || 'Select...'}</Text>
      </TouchableOpacity>
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
    color: 'black'
  },
});

export default ScrollDownList;

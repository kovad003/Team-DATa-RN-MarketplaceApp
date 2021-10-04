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
        <Text style={fontstyling.textBlackLarge}>{props.label || 'Select...'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light2,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    // ------------------------------
    //android shadows
    elevation: 5,
    //ios sahdows
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    // ------------------------------
  },
  row: {
    height: 40,
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 15,
  }
});

export default ScrollDownList;

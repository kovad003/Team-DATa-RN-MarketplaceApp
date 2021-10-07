//Standard Import
import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

//Custom Import
//constants
import fontstyling from "../constants/fontstyling";
import colors from "../constants/colors";
//components
import SliderComponent from "./SliderComponent";

function PriceSetter(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.row}>
          <Text style={styles.label}>{props.label || '€'}</Text>
          <TextInput placeholder="0" style={styles.label}></TextInput>
        </View>
        <SliderComponent></SliderComponent>
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

export default PriceSetter;

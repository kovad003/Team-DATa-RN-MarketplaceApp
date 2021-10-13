//Standard Import
import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import Slider from "@react-native-community/slider";

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
          <Text style={styles.displayValue}>€</Text>
          <TextInput value={ props.displayValue || "0"} style={styles.displayValue}></TextInput>
        </View>
        <Slider onValueChange={props.onValueChange}
          value={props.mathValue}
          thumbTintColor='#2d3553'
          minimumTrackTintColor='#8b91ad'
          maximumTrackTintColor='#cdad9c'
          style={styles.slider}>
        </Slider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E6E6E6",
    borderRadius: 0,
    marginVertical: 3,
    marginHorizontal: 0,
    padding: 5,
    // ------------------------------
    //android shadows
    elevation: 3,
    //ios sahdows
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.3,
    // ------------------------------
  },
  row: {
    height: 60,
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 15,

  },
  displayValue:{
    fontFamily: 'caballar',
    fontSize: 22,
    color: 'black',
  },
  slider: {
    flexDirection: 'row',
    flex:1,
  }
});

export default PriceSetter;

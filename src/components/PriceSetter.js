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
          <Text style={fontstyling.textBlackLarge}>{props.label || '€'}</Text>
          <TextInput placeholder="0" style={fontstyling.textBlackLarge}></TextInput>
        </View>
        <SliderComponent></SliderComponent>
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
    elevation: 5,
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

export default PriceSetter;

import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import SliderComponent from "./SliderComponent";

function PriceSetter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.priceBackground}>
        <View style={styles.priceLabelStackRow}>
          <View style={styles.priceLabelStack}>
            <Text style={styles.priceLabel}>Label</Text>
            <TextInput placeholder="0" style={styles.priceInput}></TextInput>
          </View>
          <SliderComponent style={styles.priceSlider}></SliderComponent>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  priceBackground: {
    width: 323,
    height: 43,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 0,
    flexDirection: "row"
  },
  priceLabel: {
    top: 2,
    left: 0,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 27,
    width: 85,
    fontSize: 18,
    textAlign: "center"
  },
  priceInput: {
    top: 0,
    left: 78,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    height: 27,
    width: 37,
    textAlign: "center",
    fontSize: 18
  },
  priceLabelStack: {
    width: 115,
    height: 29
  },
  priceSlider: {
    height: 30,
    width: 150,
    marginLeft: 18
  },
  priceLabelStackRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 19,
    marginTop: 6
  }
});

export default PriceSetter;

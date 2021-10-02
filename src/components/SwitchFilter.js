import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SwitchComponent from "./SwitchComponent";

function SwitchFilter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.selectorBackground}>
        <View style={styles.selectorSwitchRow}>
          <SwitchComponent style={styles.selectorSwitch}></SwitchComponent>
          <Text style={styles.selectorLabel}>Label</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  selectorBackground: {
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
  selectorSwitch: {
    width: 45,
    height: 23,
    marginTop: 4
  },
  selectorLabel: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 161,
    fontSize: 22,
    marginLeft: 20
  },
  selectorSwitchRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 82,
    marginLeft: 15,
    marginTop: 6
  }
});

export default SwitchFilter;

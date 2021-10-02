import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ScrollDownList(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.locationBackground}>
        <Text style={styles.locationlabel}>Label</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  locationBackground: {
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
    shadowRadius: 0
  },
  locationlabel: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 161,
    fontSize: 22,
    marginTop: 6,
    marginLeft: 80
  }
});

export default ScrollDownList;

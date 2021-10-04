//Standard Imports
import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";

//Custom Imports
import colors from "../constants/colors";

function SwitchComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Switch
        value={props.value ? true : false}
        thumbColor={props.value ? colors.dark1 : colors.dark2}
        trackColor={{ true: "rgba(63,81,181,0.6)", false: "#9E9E9E" }}
        style={styles.switch}
      ></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  switch: {
    // empty
  }
});

export default SwitchComponent;

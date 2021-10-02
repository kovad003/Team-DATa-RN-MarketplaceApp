import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";

function SwitchComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Switch
        value={props.value ? true : false}
        thumbColor={props.value ? "#3F51B5" : "#FFF"}
        trackColor={{ true: "rgba(63,81,181,0.6)", false: "#9E9E9E" }}
        style={styles.switch1}
      ></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  switch1: {
    width: 45,
    height: 22
  }
});

export default SwitchComponent;

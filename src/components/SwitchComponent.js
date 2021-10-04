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
        thumbColor={props.value ? 'darkblue' : '#706f6e'}
        trackColor={{true: 'dodgerblue', false: '#aaa498'}}
        /* thumbColor={props.value ? '#64513b' : 'blue'}
        trackColor={{true: '#ceb99a', false: '#aaa498'}} */
        // thumbColor={props.value ? '#c08e3a' : '#5e5f65'}
        // trackColor={{ true: '#c08e3a', false: '#706f6e' }}
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

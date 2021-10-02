import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function IconButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Icon
          name={props.icon || "magnifying-glass"}
          style={styles.icon}
        ></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 47,
    height: 39,
    backgroundColor: "rgba(227,143,5,1)",
    borderRadius: 15
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 3,
    marginLeft: 9
  }
});

export default IconButton;

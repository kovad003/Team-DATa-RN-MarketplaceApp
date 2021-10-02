import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function ViewCounter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.counterContainer}>
        <View style={styles.iconRow}>
          <Icon name="eye" style={styles.icon}></Icon>
          <TextInput placeholder="#" style={styles.placeholder}></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  counterContainer: {
    width: 92,
    height: 39,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  placeholder: {
    //fontFamily: "roboto-regular",
    color: "rgba(128,128,128,1)",
    height: 19,
    width: 24,
    textAlign: "center",
    fontSize: 22,
    marginLeft: 14,
    marginTop: 7
  },
  iconRow: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 8,
    marginTop: 3
  }
});

export default ViewCounter;

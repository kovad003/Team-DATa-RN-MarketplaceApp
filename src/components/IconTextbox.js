import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function IconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name={props.iconStyle || "account"} style={styles.iconStyle}></Icon>
      <TextInput
        placeholder={props.inputStyle || "Label"}
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "space-between"
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 20,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
    textAlign: "left",
    width: 327,
    height: 43
  }
});

export default IconTextbox;

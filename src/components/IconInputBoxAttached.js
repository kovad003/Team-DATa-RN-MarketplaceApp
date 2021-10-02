import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function IconInputBoxAttached(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.formContainer}>
        <View style={styles.inputFieldRow}>
          <View style={styles.formIconRow}>
            <Icon name="bookmark" style={styles.formIcon}></Icon>
            <TextInput
              placeholder="placeholder"
              style={styles.placeholder}
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  formContainer: {
    width: 339,
    height: 311,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    marginTop: -31,
    marginLeft: -10
  },
  inputFieldRow: {
    width: 317,
    height: 44,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 10
  },
  formIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 21
  },
  placeholder: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 249,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    textAlign: "center",
    marginLeft: 18
  },
  formIconRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 14,
    marginTop: 7
  }
});

export default IconInputBoxAttached;

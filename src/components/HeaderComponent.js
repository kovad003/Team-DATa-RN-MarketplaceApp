import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function HeaderComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to LoginScreen")}
        style={styles.iconButton}
      >
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.rightIcon1}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIconsIcon
          name="plus-circle"
          style={styles.rightIcon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.rightIcon3}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton1}>
        <MaterialCommunityIconsIcon
          name="bell"
          style={styles.rightIcon5}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={styles.rightIcon4}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(202,204,209,1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.32,
    shadowRadius: 1.2,
    elevation: 3,
    borderRadius: 15
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24
  },
  rightIcon3: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24
  },
  iconButton1: {
    padding: 11
  },
  rightIcon5: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24
  },
  rightIcon4: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24
  }
});

export default HeaderComponent;

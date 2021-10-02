import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import IconButton from "./IconButton";

function SearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBoxRow}>
          <TextInput
            placeholder="Search..."
            style={styles.searchBox}
          ></TextInput>
          <IconButton style={styles.iconButton1}></IconButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  searchContainer: {
    width: 360,
    height: 97,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    flexDirection: "row"
  },
  searchBox: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 270,
    borderRadius: 15,
    backgroundColor: "#fff",
    fontSize: 22,
    textAlign: "center",
    marginTop: 3
  },
  iconButton1: {
    height: 39,
    width: 47,
    marginLeft: 6
  },
  searchBoxRow: {
    height: 39,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 18,
    marginTop: 45
  }
});

export default SearchBar;

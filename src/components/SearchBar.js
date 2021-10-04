// Standard Imports
import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import IconButton from "./IconButton";

// Custom Imports
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput style={styles.inputField} placeholder="Search..." placeholderTextColor='#4f4e4f'></TextInput>
        <IconButton style={styles.iconButton}></IconButton>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:colors.light2,
    backgroundColor: '#8b91ad',
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',
    // only for android
    elevation: 8,
    // only for ios
    shadowColor: colors.black,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  searchRow: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: Paddings.midsize,
    marginTop: Margins.midsize,
  },
  inputField: {
    flex:1,
    borderRadius: 15,
    backgroundColor: '#f5eeeb',
    fontFamily: 'caballar',
    fontSize: 22,
    textAlign: "center",
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default SearchBar;

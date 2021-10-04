import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import EditableCard from "../components/EditableCard";

function ListItemsScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Items...</Text>
      <View style={styles.rect}>
        <EditableCard style={styles.editableCard}></EditableCard>
      </View>
      <View style={styles.headerContainer}>
        <HeaderComponent style={styles.header}></HeaderComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 39,
    width: 339,
    marginTop: 35,
    marginLeft: 10
  },
  title: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 30,
    marginLeft: 26
  },
  rect: {
    width: 296,
    height: 254,
    marginTop: 9,
    marginLeft: 32
  },
  editableCard: {
    height: 289,
    width: 296
  }
});

export default ListItemsScreen;

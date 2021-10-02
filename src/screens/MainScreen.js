import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import Logo from "../components/Logo";
import CategoryButton from "../components/CategoryButton";

function MainScreen(props) {
  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header}></HeaderComponent>
      <View style={styles.scrollable}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Logo style={styles.logo}></Logo>
            <CategoryButton style={styles.categoryButton}></CategoryButton>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 39,
    width: 339,
    marginTop: 35,
    marginLeft: 10
  },
  scrollable: {
    width: 332,
    height: 539,
    marginTop: 14,
    marginLeft: 18
  },
  scrollArea: {
    width: 332,
    height: 539
  },
  scrollArea_contentContainerStyle: {
    height: 539,
    width: 332
  },
  logo: {
    height: 110,
    width: 172,
    marginTop: 5,
    marginLeft: 80
  },
  categoryButton: {
    height: 72,
    width: 309,
    marginTop: 18,
    marginLeft: 11
  }
});

export default MainScreen;

import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ItemCard from "../components/ItemCard";

// HH - import the Java backend address ( URL)
import backendUrl from "../constants/backendUrl";

function SearchResultScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false} contentContainerStyle={styles.scrollArea_contentContainerStyle}>
        <View style={styles.mainContainer}>
          <ItemCard style={styles.itemCard}></ItemCard>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {

  },
  scrollArea_contentContainerStyle: {

  },
  mainContainer: {

  },
  itemCard: {

  }
});

export default SearchResultScreen;

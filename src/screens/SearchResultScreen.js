import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ItemCard from "../components/ItemCard";

function SearchResultScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.mainContainer}>
            <ItemCard style={styles.itemCard}></ItemCard>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    width: 360,
    height: 640
  },
  scrollArea_contentContainerStyle: {
    height: 640,
    width: 360
  },
  mainContainer: {
    width: 360,
    height: 640
  },
  itemCard: {
    height: 407,
    width: 294,
    marginTop: 52,
    marginLeft: 34
  }
});

export default SearchResultScreen;

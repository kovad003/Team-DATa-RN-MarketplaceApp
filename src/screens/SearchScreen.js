import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import SwitchFilter from "../components/SwitchFilter";
import ScrollDownList from "../components/ScrollDownList";
import PriceSetter from "../components/PriceSetter";
import SearchBar from "../components/SearchBar";

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.categoryMain}>
            <Text style={styles.categoryTitle}>Categories</Text>
            <SwitchFilter style={styles.switchFilter}></SwitchFilter>
          </View>
          <View style={styles.locationMain}>
            <Text style={styles.locationTitle}>Location</Text>
            <ScrollDownList style={styles.scrollDownList}></ScrollDownList>
          </View>
          <View style={styles.priceMain}>
            <Text style={styles.priceTitle}>Price</Text>
            <PriceSetter style={styles.priceSetter}></PriceSetter>
          </View>
        </ScrollView>
      </View>
      <SearchBar style={styles.searchBar}></SearchBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(179,169,169,1)"
  },
  scrollArea: {
    width: 323,
    height: 404,
    marginTop: 97,
    marginLeft: 18
  },
  scrollArea_contentContainerStyle: {
    height: 404,
    width: 323
  },
  categoryMain: {
    width: 323,
    height: 125
  },
  categoryTitle: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 161,
    fontSize: 22,
    marginLeft: 1
  },
  switchFilter: {
    height: 43,
    width: 323,
    marginTop: 11
  },
  locationMain: {
    width: 323,
    height: 119,
    marginTop: 11
  },
  locationTitle: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 161,
    fontSize: 22
  },
  scrollDownList: {
    height: 43,
    width: 323,
    marginTop: 17
  },
  priceMain: {
    width: 323,
    height: 138,
    marginTop: 11
  },
  priceTitle: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 161,
    fontSize: 22,
    marginLeft: 1
  },
  priceSetter: {
    height: 43,
    width: 323,
    marginTop: 10
  },
  searchBar: {
    height: 97,
    width: 360,
    marginTop: -501
  }
});

export default SearchScreen;

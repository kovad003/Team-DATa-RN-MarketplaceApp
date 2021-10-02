import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SellerTab from "./SellerTab";
import ImageHolder from "./ImageHolder";
import ViewCounter from "./ViewCounter";
import IconButton from "./IconButton";

function ItemCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <SellerTab style={styles.sellerTab}></SellerTab>
        <ImageHolder style={styles.imageHolder}></ImageHolder>
        <View style={styles.tilteWithPrice}>
          <View style={styles.titleContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>Title</Text>
              <Text style={styles.price}>Price €</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemDescription}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>description text</Text>
          </View>
        </View>
        <View style={styles.viewCounterRow}>
          <ViewCounter style={styles.viewCounter}></ViewCounter>
          <IconButton
            iconName="magnifying-glass"
            icon="shopping-cart"
            style={styles.buyButton}
          ></IconButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 294,
    height: 407,
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  sellerTab: {
    height: 43,
    width: 267,
    marginTop: 16,
    marginLeft: 15
  },
  imageHolder: {
    height: 153,
    width: 267,
    marginTop: 8,
    marginLeft: 15
  },
  tilteWithPrice: {
    width: 267,
    height: 38,
    marginTop: 9,
    marginLeft: 15
  },
  titleContainer: {
    width: 267,
    height: 38,
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  title: {
    //fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 22
  },
  price: {
    //fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 22,
    marginLeft: 144,
    marginTop: 1
  },
  titleRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginTop: 5
  },
  itemDescription: {
    width: 267,
    height: 67,
    marginTop: 11,
    marginLeft: 15
  },
  descriptionContainer: {
    width: 267,
    height: 66,
    marginTop: -9
  },
  descriptionText: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 9
  },
  viewCounter: {
    height: 39,
    width: 92
  },
  buyButton: {
    height: 39,
    width: 47,
    marginLeft: 116
  },
  viewCounterRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 19,
    marginRight: 20
  }
});

export default ItemCard;

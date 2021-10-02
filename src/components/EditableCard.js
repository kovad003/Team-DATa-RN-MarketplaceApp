import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewCounter from "./ViewCounter";
import IconButton from "./IconButton";

function EditableCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <View style={styles.imageHolderRow}>
            <View style={styles.imageHolder}></View>
            <View style={styles.viewCounterColumn}>
              <ViewCounter style={styles.viewCounter}></ViewCounter>
              <View style={styles.titleContainer}>
                <View style={styles.titleWithPrice}>
                  <Text style={styles.title}>Title</Text>
                  <Text style={styles.price}>Price</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionHolder}>
            <Text style={styles.description}>Description</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.footerRow}>
            <View style={styles.dateCreatedRow}>
              <Text style={styles.dateCreated}>Date Created</Text>
              <IconButton
                iconName="magnifying-glass"
                icon="circle-with-cross"
                style={styles.iconButton}
              ></IconButton>
              <IconButton
                iconName="magnifying-glass"
                icon="pencil"
                style={styles.iconButton1}
              ></IconButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    width: 296,
    height: 289,
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  cardHeader: {
    width: 260,
    height: 123,
    marginTop: 11,
    marginLeft: 15
  },
  imageHolder: {
    width: 122,
    height: 117,
    backgroundColor: "rgba(146,135,135,1)"
  },
  viewCounter: {
    height: 39,
    width: 92,
    marginLeft: 7
  },
  titleContainer: {
    width: 113,
    height: 77,
    marginTop: 1
  },
  titleWithPrice: {
    width: 113,
    height: 77
  },
  title: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    marginLeft: 29
  },
  price: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 29
  },
  viewCounterColumn: {
    width: 113,
    marginLeft: 16
  },
  imageHolderRow: {
    height: 117,
    flexDirection: "row",
    marginTop: 6,
    marginRight: 9
  },
  descriptionContainer: {
    width: 260,
    height: 82,
    marginTop: 11,
    marginLeft: 15
  },
  descriptionHolder: {
    width: 260,
    height: 82
  },
  description: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 4
  },
  cardFooter: {
    width: 260,
    height: 41,
    marginTop: 9,
    marginLeft: 15
  },
  footerRow: {
    width: 260,
    height: 41,
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  dateCreated: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10
  },
  iconButton: {
    width: 47,
    height: 39,
    marginLeft: 64
  },
  iconButton1: {
    width: 47,
    height: 39,
    marginLeft: 14
  },
  dateCreatedRow: {
    height: 39,
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
    marginLeft: 4,
    marginTop: 2
  }
});

export default EditableCard;

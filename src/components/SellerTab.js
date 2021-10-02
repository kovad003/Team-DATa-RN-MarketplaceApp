import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import IconButton from "./IconButton";

function SellerTab(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.sellerContainer}>
        <View style={styles.avatarHolderRow}>
          <Svg viewBox="0 0 30 30" style={styles.avatarHolder}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              cx={15}
              cy={15}
              rx={15}
              ry={15}
            ></Ellipse>
          </Svg>
          <Text style={styles.username}>username</Text>
          <IconButton
            iconName="magnifying-glass"
            icon="newsletter"
            style={styles.messageButton}
          ></IconButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sellerContainer: {
    width: 266,
    height: 43,
    backgroundColor: "rgba(133,162,233,1)",
    borderRadius: 5,
    flexDirection: "row"
  },
  avatarHolder: {
    width: 30,
    height: 30,
    marginTop: 5
  },
  username: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 11,
    marginTop: 9
  },
  messageButton: {
    height: 39,
    width: 47,
    marginLeft: 84
  },
  avatarHolderRow: {
    height: 39,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 7,
    marginTop: 2
  }
});

export default SellerTab;

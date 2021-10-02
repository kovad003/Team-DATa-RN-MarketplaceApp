import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Logo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.logoHolderStack}>
        <View style={styles.logoHolder}></View>
        <Image
          source={require("../assets/images/logo_useddo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  logoHolder: {
    top: 1,
    left: 0,
    width: 172,
    height: 109,
    position: "absolute"
  },
  image: {
    top: 0,
    left: 31,
    width: 110,
    height: 110,
    position: "absolute"
  },
  logoHolderStack: {
    width: 172,
    height: 110
  }
});

export default Logo;

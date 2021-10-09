import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function CreateItemInputLogo(props) {
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
    top: 1, //1
    left: 0, //0
    width: 152, // 172
    height: 89, // 109
    position: "absolute"
  },
  image: {
    top: 0, //
    left: 31, // 31
    width: 90, // 110
    height: 70, // 90, 110
    position: "absolute"
  },
  logoHolderStack: {
    width: 152, // 172
    height: 80 // 80, 110
  }
});

export default CreateItemInputLogo;

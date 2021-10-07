import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "../components/Logo";
import IconTextbox from "../components/IconTextbox";
import AppButton from "../components/AppButton";
import LinkButton from "../components/LinkButton";
import {Dimensions} from 'react-native';
export const {height, width} = Dimensions.get('screen');
export const Style = {
  loginpagebgColor: '#333333',
  textInputbgColor: '#9B9B9B',
  GamepadButton: '#FFC600',
};

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo}></Logo>
      <View style={styles.loginContainer}>
        <IconTextbox
          inputStyle="Label"
          inputStyle="Username"
          style={styles.inputStyle}
        ></IconTextbox>
        <IconTextbox
          inputStyle="Label"
          iconStyleName="account"
          inputStyle="Password"
          iconStyle="eye"
          style={styles.inputStyle}
        ></IconTextbox>
        <AppButton button="Login" style={styles.loginButton}></AppButton>
        <LinkButton
          label="Resend Password"
          style={styles.linkButton}
        ></LinkButton>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.registerButtonRow}>
          <AppButton
            button="Register"
            style={styles.registerButton}
          ></AppButton>
          <AppButton button="Cancel" style={styles.cancelButton}></AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(206,206,206,1)",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100
  },
  logo: {
    width: 172,
    height: 110,
    marginTop: 46,
    marginBottom: 50,
    alignSelf: "center"
  },
  loginContainer: {
    width: 306,
    height: 244,
    backgroundColor: "rgba(206,206,206,1)",
    borderRadius: 15,
    marginTop: 29,
    marginLeft: 25
  },
  textboxUsername: {
    height: 43,
    width: 240,
    overflow: "hidden",
    marginTop: 25,
    marginLeft: 33
  },
  textboxPassword: {
    height: 43,
    width: 240,
    overflow: "hidden",
    marginTop: 15,
    marginLeft: 33
  },
  loginButton: {
    height: 36,
    width: 138,
    marginTop: 17,
    marginLeft: 86
  },
  linkButton: {
    height: 38,
    width: 161,
    overflow: "hidden",
    marginTop: 15,
    marginLeft: 74
  },
  buttonContainer: {
    width: 305,
    height: 36,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 26
  },
  registerButton: {
    width: 139,
    backgroundColor: "rgba(11,129,217,1)"    
  },
  cancelButton: {
    width: 138,
    backgroundColor: "rgba(11,129,217,1)",
    marginLeft: 28
  },
  registerButtonRow: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginTop: 70
  }
});

export default LoginScreen;

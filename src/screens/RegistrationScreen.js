import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "../components/Logo";
import AppButton from "../components/AppButton";
import IconTextbox from "../components/IconTextbox";
import Checkbox from "../components/Checkbox";
import LinkButton from "../components/LinkButton";

function RegistrationScreen(props) {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo}></Logo>
      <View style={styles.buttonContainer}>
        <View style={styles.registerButtonRow}>
          <AppButton
            button="Register"
            style={styles.registerButton}
          ></AppButton>
          <AppButton button="Cancel" style={styles.cancelButton}></AppButton>
        </View>
      </View>
      <View style={styles.formContainer}>
        <IconTextbox
          inputStyle="Label"
          inputStyle="Username"
          style={styles.usernameInput}
        ></IconTextbox>
        <IconTextbox
          inputStyle="Label"
          iconStyleName="account"
          inputStyle="Password"
          iconStyle="eye"
          style={styles.passwordInput}
        ></IconTextbox>
        <IconTextbox
          inputStyle="Label"
          iconStyleName="account"
          inputStyle="Confirm password"
          iconStyle="eye"
          style={styles.confPassInput}
        ></IconTextbox>
        <IconTextbox
          inputStyle="Label"
          iconStyleName="account"
          inputStyle="First name"
          iconStyle="eye"
          style={styles.firstNameInput}
        ></IconTextbox>
      </View>
      <View style={styles.eulaRow}>
        <View style={styles.eulaCheckBoxRow}>
          <Checkbox style={styles.eulaCheckBox}></Checkbox>
          <LinkButton
            label="I have read and accept EULA terms"
            style={styles.eulaLinkButton}
          ></LinkButton>
        </View>
      </View>
      <AppButton button="Login" style={styles.loginButton}></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(179,169,169,1)",
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  logo: {
    width: 172,
    height: 110,
    marginTop: -25,
    alignSelf: "center",
  },
  buttonContainer: {
    width: 305,
    height: 36,
    flexDirection: "row",
    marginTop: 434,
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
    marginTop: 40
  },
  formContainer: {
    width: 302,
    height: 299,
    marginTop: -462,
    marginLeft: 28
  },
  usernameInput: {
    height: 43,
    overflow: "hidden"
  },
  passwordInput: {
    height: 43,
    overflow: "hidden",
    marginTop: 16
  },
  confPassInput: {
    height: 43,
    overflow: "hidden",
    marginTop: 14
  },
  firstNameInput: {
    height: 43,
    overflow: "hidden",
    marginTop: 12
  },
  eulaRow: {
    width: 360,
    height: 38,
    flexDirection: "row",
    marginTop: 30
  },
  eulaCheckBox: {
    height: 40,
    width: 40
  },
  eulaLinkButton: {
    height: 39,
    width: 320,
    marginTop: 1
  },
  eulaCheckBoxRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginTop: -50
  },
  loginButton: {
    height: 36,
    width: 138,
    marginTop: -20,
    marginLeft: 110
  }
});

export default RegistrationScreen;

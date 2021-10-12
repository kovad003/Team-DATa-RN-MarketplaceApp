import React, { Component, useState, useEffect } from "react";

import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import Checkbox from "../components/Checkbox";
import LinkButton from "../components/LinkButton";
import Logo from "../components/Logo";

//const Home = () => {
function RegistrationScreen(props) {

  // For the inputs

  // State variable
  const [customer, setCustomer] = useState({
    //customerId: 1,
    firstName: "default firstName", //TODO
    lastName: 'default lastName',
    userName: 'default userName',
    password: "default password",
    dateOfBirth: 'default dateOfBirth',
    email: 'default email',
    phone: 'default phone',
    image: 'default image',
});
/* const [formChecker, setFormChecker] = useState({
    categoryinput: 'false',
}) */

/* For Controlling modal
    const addItem=()=>{
      props.onAddItem(item);
  }
*/

// AD new consts

const addCustomer=()=>{
  props.onAddCustomer(customer);
}

const cancelCustomer=()=>{
  props.onCancelCustomer();
}




const firstNameInputHandler=(enteredText)=>{
  customer.firstName = enteredText;
  console.log('entered text/firstName: ' + enteredText);
}
const lastNameInputHandler=(enteredText)=>{
  customer.lastName = enteredText;
  console.log('entered text/lastName: ' + enteredText);
}

const userNameInputHandler=(enteredText)=>{
  customer.userName = enteredText;
  console.log('entered text/userName: ' + enteredText);
}

const passwordInputHandler=(enteredText)=>{
  customer.password = enteredText;
    console.log('entered text/password: ' + enteredText);
}

const dateOfBirthInputHandler=(enteredText)=>{
  customer.dateOfBirth = enteredText;
    console.log('entered text/dateOfBirth: ' + enteredText);
}

const emailInputHandler=(enteredText)=>{
  customer.email = enteredText;
  console.log('entered text/email: ' + enteredText);
}

const phoneInputHandler=(enteredText)=>{
  customer.phone = enteredText;
  console.log('entered text/phone: ' + enteredText);
}

const imageInputHandler=(enteredText)=>{
  customer.image = enteredText;
    console.log('entered text/image: ' + enteredText);
}





/*
const confirmPasswordInputHandler=(enteredText)=>{
    item.condition = enteredText;
    console.log('entered text/confirmPassword: ' + enteredText);
}
*/


  /* For Controlling modal
  const addItem2=()=>{
    props.onAddItem2(item);
    }
  const cancelItem2=()=>{
    props.onCancelItem2();
    }

    */

  
    
  



  /*
  const cancelItem=()=>{
      props.onCancelItem();
  }
  */

  return (
    <Modal visible={props.visibility} animationType="slide">
    <ScrollView style={styles.scrollView}>

    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Logo style={styles.logo}></Logo>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: '#fff',
          borderRadius: 10,
        }}>
        <View style={{alignSelf: 'center', marginTop: 7, marginBottom: 20}}>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>Registration</Text>
        </View>
        <View style={{}}>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 5}}>Username</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              placeholder="Enter your username"
              style={styles.TextInput}
              onChangeText={userNameInputHandler}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>Firstname</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              placeholder="Enter your Firstname"
              style={styles.TextInput}
              onChangeText={firstNameInputHandler}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>Lastname</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              placeholder="Enter your Lastname"
              style={styles.TextInput}
              onChangeText={lastNameInputHandler}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>Email</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              placeholder="Enter your email"
              style={styles.TextInput}
              onChangeText={emailInputHandler}
            />
            </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>Password</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              secureTextEntry={true}
              placeholder="Enter your password"
              style={styles.TextInput}
              onChangeText={passwordInputHandler}
            />
          </View>

          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              Phone number
            </Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              secureTextEntry={true}
              placeholder="Enter your phone number"
              style={styles.TextInput}
              onChangeText={phoneInputHandler} // might not be necessary
            />
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
          <View style={{alignSelf: 'center', width: '100%', marginTop: 50}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1E90FF',
                paddingTop: 20,
                paddingBottom: 20,
                borderRadius: 10,
              }}>
              <Text onPress={addCustomer} style={{fontSize: 20, color: '#fff'}}>Register</Text>            
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#c83232',
                paddingTop: 20,
                paddingBottom: 20,
                borderRadius: 10,

                marginVertical: 10,
              }}>
              <Text onPress = {cancelCustomer} style={{fontSize: 20, color: '#fff'}}>Cancel</Text>            
            </TouchableOpacity>
    
          </View>
        </View>
      </View>
    </View>

    </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {height: 60, width: '100%', backgroundColor: 'red'},
  TextInput: {
    height: 43,
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 2,
    fontSize: 18,
  },
  logo: {
    width: 172,
    height: 110,
    marginTop: 30,
    alignSelf: "center",
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
    marginTop: 10
  }
});

export default RegistrationScreen;
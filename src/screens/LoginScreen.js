
import React, {useState , useEffect} from 'react';
import {Button, View, StyleSheet, ScrollView, Text, Dimensions, SafeAreaView, TextInput, TouchableOpacity, Image, Modal,} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../constants/colors';

//const LoginScreen = () => {
function LoginScreen(props) {
// STATE VARIABLES --------------------------------------------------------------
// For LOGIN
const [sessionId, setSessionId] = useState("None");

const [loginDetails, setLoginDetails] = useState([]);
const [hasMessage, setMessage] = useState(false);
const [messageDisplayed, setMessageDisplayed] = useState('');
const [isValidating, setIsValidating] = useState(false); //was true
const [isLogin , setIsLogin] = useState (false);

// For service method
const [loginDataToSend, setloginDataToSend] = useState({
  userName: "user",
  password: "password",
});
const [loginDataReceived, setloginDataReceived] = useState({
  customerId: "undefined", //TODO
  userName: "undefined",
});
// END OF STATE VARIABLES --------------------------------------------------------------

// SESSION HANDLERS --------------------------------------------------------------
const saveSessionId=(newSessionId)=>{
  AsyncStorage.setItem("StoredSessionId", newSessionId.toString());
  console.log('SessionId was saved as: ' + newSessionId)
}
const getSessionId=()=>{
  console.log("AsyncStorage.getItem(StoredSessionId): " + JSON.stringify(AsyncStorage.getItem("StoredSessionId")));
  AsyncStorage.getItem("StoredSessionId").then((value) => console.log("SEssion ID value: " + value));
  
 // console.log("sessionID: " + sessionId)
}
// END OF SESSION HANDLERS --------------------------------------------------------------

// INPUT HANDLERS --------------------------------------------------------------
const usernameInputHandler=(enteredText)=>{
    loginDataToSend.userName = enteredText;
    console.log('entered text/username: ' + enteredText);
}
const passwordInputHandler=(enteredText)=>{
    loginDataToSend.password = enteredText;
    console.log('entered text/password: ' + enteredText);
}
const LoginInputHandler = () =>{
  console.log("LoginInputHandler()");
  setIsValidating(true);
}
// END OF INPUT HANDLERS --------------------------------------------------------------

// LOGIN HANDLERS --------------------------------------------------------------
 /*  const handleLogin = () => {
    if (isNaN(loginDataReceived.customerId)){
      console.log('you dont have account or username and password are not correct');
    }
  } */

  const handleLogin = () => {
    let token = AsyncStorage.getItem("StoredSessionId").then((value) => console.log("SEssion ID value: " + value));
    
  }
// END OF LOGIN HANDLERS --------------------------------------------------------------

// DATA TRANSFER TO PARENT ------------------------------------------------------------
const addItem=()=>{
  props.onAddItem(loginDataToSend);
}
const cancelItem=()=>{
  props.onCancelItem();
}

// SERVICE METHODS --------------------------------------------------------------
  async function validateLoginData(loginDataToSend) {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    let requestOptions = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        userName: loginDataToSend.userName.toString(),
        password: loginDataToSend.password.toString(),
      })
    };
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch("http://10.0.2.2:8080/rest/loginservice/validatelogindetails", requestOptions);//This is a template literal (escapes the variable)
    }
    catch(error){
      showError(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      setloginDataReceived(responseData);
      // console.log(JSON.stringify("login Data received: " + loginDataReceived));
      saveSessionId(responseData.customerId.toString()) // Will Store Customer ID as AsnyncStorage
      handleLogin(); //
    }
    catch(error){
      showError(error);
    }
  }
// END OF SERVICE METHODS --------------------------------------------------------------  


// Error Messages --------------------------------------------------------------
  function showError(error){
    setMessage(true);
    setMessageDisplayed("Error: " + error);
    console.log(messageDisplayed);
  }
  function showConfirmation(message){
    setMessageDisplayed("Confirmation: " + message);
    setMessage(true);
  }
  function closeMessage() {
    setMessage(false);
    //setLoading(true);
  }
// End of Error Messages --------------------------------------------------------

// USE EFFECT --------------------------------------------------------  
/* This is called every time the view is rendered The new calls of fetchData (and others) must be 
stopped somehow, because in those methods are statevariables set, which cause a new re-render. */
  useEffect(() => {
  console.log('useEffect(() => {'); 
    if (isValidating==true){
      validateLoginData(loginDataToSend);
      setIsValidating(false);
    }
  });
// END OF USE EFFECT --------------------------------------------------------

return (
  <Modal visible={props.visibility} animationType="slide">
   <ScrollView style={styles.scrollView}>

    <View style={{flex: 1, backgroundColor: colors.light4 /* '#ffffff' */}}>
      {/* <Button title="setSessionID as 9999" onPress={saveSessionId("9999")}> </Button> */}
      <Button title="getSessionID" onPress={getSessionId}> </Button>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: '#fff', // colors.light4
          borderRadius: 10,
        }}>
        <View style={{alignSelf: 'center', marginTop: 5, marginBottom: 10}}>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>Login</Text>
        </View>
        <View style={{}}>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 16, marginBottom: 5}}>Username</Text>
            <TextInput
              /* value = "flarson" */
              placeholderTextColor="#bdbdbd"
              placeholder="Enter your username"
              style={styles.TextInput}
              onChangeText={usernameInputHandler}
            />
          </View>
          <View>
            <Text style={{fontSize: 16, marginBottom: 5}}>Password</Text>
            <TextInput
              /* value = "flarson1234" */
              placeholderTextColor="#bdbdbd"
              secureTextEntry={true}
              placeholder="Enter your password"
              style={styles.TextInput}
              onChangeText={passwordInputHandler}
            />
          </View>
          <View style={{alignSelf: 'center', width: '100%', marginTop: 40}}>
              <TouchableOpacity
                onPress={LoginInputHandler}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.danger, // '#FF4500'
                  paddingTop: 20,
                  paddingBottom: 20,
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 20, color: '#fff' }}>Login</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 50}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View>
                <TouchableOpacity
                  style={{
                    paddingLeft: 25,
                    paddingRight: 25,
                    paddingTop: 15,
                    paddingBottom: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1E90FF',
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#fff'}}>Register</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                  style={{
                    paddingLeft: 25,
                    paddingRight: 25,
                    paddingTop: 15,
                    paddingBottom: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "#1E90FF",
                    borderRadius: 10, 
                  }}>
                  <Text onPress = {cancelItem} style={{color: '#fff'}}>Cancel</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{alignSelf: 'center', marginTop: 50, paddingBottom: 50}}>
          <View style={{alignSelf: 'center', marginBottom: 20}}>
            <Text style={{fontSize: 18}}>Or sign in with :</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',

              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://s3-symbol-logo.tradingview.com/facebook--600.png',
                }}
                resizeMode="cover"
                style={{width: 50, height: 50, borderRadius: 50}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10, marginRight: 10}}>
              <Image
                source={{
                  uri: 'https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk',
                }}
                resizeMode="cover"
                style={{width: 50, height: 50, borderRadius: 50}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://www.dexibell.com/app/uploads/2018/05/google-logo.png',
                }}
                resizeMode="cover"
                style={{width: 50, height: 50, borderRadius: 50}}
              />
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
  height: 50,
  borderBottomColor: '#bdbdbd',
  borderBottomWidth: 2,
  fontSize: 18,
},

/* Extra modifications */
scrollView: {
//flex:1,
paddingVertical:10,
paddingHorizontal:15,
backgroundColor: colors.light4,
},
});

export default LoginScreen;
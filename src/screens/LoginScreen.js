import React, {useState , useEffect} from 'react';
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

//const LoginScreen = () => {
function LoginScreen(props) {

  /* for controlling the modal */

  // For Controlling modal
  const addItem=()=>{
    props.onAddItem(item);
    }
  const cancelItem=()=>{
    props.onCancelItem();
    }

    /* Input handlers */

    const [item, setItem] = useState({
      categoryId: 1, // This all needs to be changed
      customerId: 1, //TODO
      title: 'some name',
      price: 0,
      description: 'some description',
      image: 'https://www.giantbomb.com/a/uploads/scale_small/46/462814/3221502-8667199912-d2d02.jpg',
      condition: 'used',
      location: 'Hämeenlinna',
  });
  


  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')
  const [loginDetails, setLoginDetails] = useState([]);
  const [hasMessage, setMessage] = useState(false);
  const [messageDisplayed, setMessageDisplayed] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isLogin , setIsLogin] = useState (false)

  /* const [formChecker, setFormChecker] = useState({
      categoryinput: 'false',
  }) */
  const usernameInputHandler=(enteredText)=>{
      item.customerId = enteredText;
      //console.log('entered text/username: ' + enteredText);
  }

  const passwordInputHandler=(enteredText)=>{
      item.password = enteredText;
      //console.log('entered text/password: ' + enteredText);
  }
  const LoginInputHandler = () =>{
    setUserName(item.customerId);
    setPassword(item.password);
    //console.log ('username:'+userName)
    //console.log ('Password:'+password)


    async function fetchLoginData() {
      //Variable res is used later, so it must be introduced before try block and so cannot be const.
      let response = null;
      try{
        //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
        //response = await fetch("http://10.0.2.2:8080/rest/itemservice/getall");
        response = await fetch("http://10.0.2.2:8080/rest/loginservice/getlogindetails/"+userName);

      }
      catch(error){
        showError(error);
      }
      try{
        //Getting json from the response
        let responseData = await response.json();
        console.log(responseData);//Just for checking.....
        setLoginDetails(responseData);
      }
      catch(error){
        showError(error);
      }
    }
    fetchLoginData()
    setLoading(false);

    if (loginDetails.password === null || loginDetails.password===password){
      console.log('You are logged in')
      setIsLogin(true)
    }else{
      console.log('you dont have account or username and password are not correct')
      setIsLogin(false)
    }

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
      setLoading(true);
    }

  }



  return (
    <Modal visible={props.visibility} animationType="slide">
     <ScrollView style={styles.scrollView}>

      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginVertical: 10,
            marginHorizontal: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <View style={{alignSelf: 'center', marginTop: 5, marginBottom: 10}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>Login</Text>
          </View>
          <View style={{}}>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 16, marginBottom: 5}}>Username</Text>
              <TextInput
                placeholderTextColor="#bdbdbd"
                placeholder="Enter your username"
                style={styles.TextInput}
                onChangeText={usernameInputHandler}
              />
            </View>
            <View>
              <Text style={{fontSize: 16, marginBottom: 5}}>Password</Text>
              <TextInput
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
                    backgroundColor: '#FF4500',
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 20, color: '#fff'}}>Login</Text>
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
},
});

export default LoginScreen;
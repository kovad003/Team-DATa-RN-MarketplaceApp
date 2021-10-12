import React, {useState} from 'react';
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
          <View style={{alignSelf: 'center', marginTop: 70, marginBottom: 50}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>Login</Text>
          </View>
          <View style={{}}>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 16, marginBottom: 5}}>Username</Text>
              <TextInput
                placeholderTextColor="#bdbdbd"
                placeholder="Enter your username"
                style={styles.TextInput}
              />
            </View>
            <View>
              <Text style={{fontSize: 16, marginBottom: 5}}>Password</Text>
              <TextInput
                placeholderTextColor="#bdbdbd"
                secureTextEntry={true}
                placeholder="Enter your password"
                style={styles.TextInput}
              />
            </View>
            <View style={{alignSelf: 'center', width: '100%', marginTop: 50}}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FF4500',
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 20, color: '#fff'}}>Log in</Text>
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
 padding:20,
},
});

export default LoginScreen;
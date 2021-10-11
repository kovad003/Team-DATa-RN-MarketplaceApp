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
} from 'react-native';
import Checkbox from "../components/Checkbox";
import LinkButton from "../components/LinkButton";
import Logo from "../components/Logo";
const Home = () => {
  return (
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
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>Firstname</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              placeholder="Enter your Firstname"
              style={styles.TextInput}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>Lastname</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              placeholder="Enter your Lastname"
              style={styles.TextInput}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>Email</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              placeholder="Enter your email"
              style={styles.TextInput}
            />
            </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>Password</Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              secureTextEntry={true}
              placeholder="Enter your password"
              style={styles.TextInput}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={{fontSize: 16, marginBottom: 3}}>
              Confirm Password
            </Text>
            <TextInput
              placeholderTextColor="#bdbdbd"
              secureTextEntry={true}
              placeholder="Enter your confirm Password"
              style={styles.TextInput}
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
              <Text style={{fontSize: 20, color: '#fff'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Home;
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
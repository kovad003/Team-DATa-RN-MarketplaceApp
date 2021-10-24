import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image,Button, Modal, TouchableOpacity, ScrollView } from "react-native";

//import { ITEM } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import MyItemCardSmall from "../components/MyItemCardSmall";
import Icon from "react-native-vector-icons/AntDesign";
import AppButton from "../components/AppButton";
import EditableCard from "../components/EditableCard";
import AccountScreenRow from '../components/AccountScreenRow';

// Styling iports
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

// HH - import the Java backend address ( URL)
import backendUrl from "../constants/backendUrl";


// in this Component we can see all details of the selected Item
const ContactInformation = props => {
    // HH - define variable and read data from constant backendUrl file
    let backendAddress = backendUrl.backendAddress;

    const [customer, setCustomer] = useState([]);
    const [messageDisplayed, setMessageDisplayed] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [hasMessage, setMessage] = useState(false);




  // HH - for read customer information for this item ******************************************** start
  // *** GET ***
  async function fetchCustomerData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      //response = await fetch("http://10.0.2.2:8080/rest/itemservice/getall");
      response = await fetch(`${backendAddress}/rest/customerservice/getcustomer/${props.customerId}`);

    }
    catch(error){
      showError(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      //console.log(responseData);//Just for checking.....
      setCustomer(responseData);
    }
    catch(error){
      showError(error);
    }
  }
  useEffect(() => {
    //console.log('useEffect(() => {'); 
      if (isLoading==true){
        //fetchData();
        fetchCustomerData();
        setLoading(false);
    }
  });
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

  console.log(customer);
 // ****************************************************************************** end






return(
    <View style={styles.contactModal}>
        <View style={styles.contactModal2}>
            <View style={styles.content} >
                <Image
                source={{ uri: customer.image }}
                style={{ width: 100, height: 100 , marginBottom:10 }}
                />
                <Text style={styles.contactInfoText}>{customer.firstName} - {customer.lastName}</Text>
                <Text style={styles.contactInfoText}>Customer ID : {customer.customerId}</Text>
                <Text style={styles.contactInfoText}>Phone number : {customer.phone}</Text>
                <Text style={styles.contactInfoText}>Email : {customer.email}</Text>
            </View>
        <View style={styles.uploadButton}>
            <Button title="Back" onPress={props.CancelContactInfo}/>
        </View>
        </View>
    </View>
);

};

const styles = StyleSheet.create({
  contactModal:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light3,
    marginTop: '50%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
  },
  contactModal2:{
    alignItems: 'center',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactInfoText:{
    fontSize:20,
  },
  content:{
    width:'95%',
    alignItems:'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderTopWidth: 1,

    padding: 10,
    justifyContent:'space-between',
    marginVertical:3,
  },
uploadButton:{
  height:40,
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  margin:10,
}
});
export default ContactInformation;
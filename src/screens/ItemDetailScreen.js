import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image,Button, Modal, TouchableOpacity, ScrollView } from "react-native";

//import { ITEM } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import MyItemCardSmall from "../components/MyItemCardSmall";
import Icon from "react-native-vector-icons/AntDesign";
import AppButton from "../components/AppButton";
import EditableCard from "../components/EditableCard";
import AccountScreenRow from '../components/AccountScreenRow';
import ContactInformation from '../components/ContactInformation';

// Styling iports
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

// in this Component we can see all details of the selected Item
function itemDetailScreen(props) {


    const [infoVisible , setInfoVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);
    const [messageDisplayed, setMessageDisplayed] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [hasMessage, setMessage] = useState(false);



  // HH - data from dummy-data***********************************Start
  // // HH - created to read data from dummy-data
  //   console.log(props.route.params);

  //   const { itemId } = props.route.params;
  //   const selectedItemId = itemId;
  //   // const selectedItem = ITEM.filter(
  //   //     cat => cat.categoryId.nidexOf(props.selectedItemId) >= 0);
  //  const selectedItem = ITEM.find(item => item.id === selectedItemId);
  //**************************************************************Ends 
  const { itemId } = props.route.params;
  const selectedItemId = itemId;

  
  const ContactInfo = ()=>{
    setInfoVisible(true);
  }
  const CancelContactInfo = ()=>{
    setInfoVisible(false);
  }
  
  // HH - for read data for selected item ******************************************** start
  // *** GET ***
  async function fetchCatData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      //response = await fetch("http://10.0.2.2:8080/rest/itemservice/getall");
      response = await fetch("http://10.0.2.2:8080/rest/itemservice/getjsonitemtoupdate/"+selectedItemId);

    }
    catch(error){
      showError(error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      //console.log(responseData);//Just for checking.....
      setSelectedItem(responseData);
    }
    catch(error){
      showError(error);
    }
  }


  useEffect(() => {
    //console.log('useEffect(() => {'); 
      if (isLoading==true){
        //fetchData();
        fetchCatData();
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
  console.log(selectedItem);
 // ****************************************************************************** end


  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
          source={{ uri: selectedItem.image }}
          style={{ width: '100%', height: 300 }}
          />
        </View>
        <View style={styles.mainContainer}>
          <Text style={{fontSize:30, padding:10,}}>{selectedItem.title}</Text>
          <View style={styles.rowContent}>
            <Text style={styles.rowText}>Posted at {selectedItem.datePosted} in {selectedItem.location}</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.rowTextBold}>Condition:</Text>
            <Text style={styles.rowText}>{selectedItem.condition}</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.rowTextBold}>Category</Text>
            <Text style={styles.rowText}>{selectedItem.categoryId}</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.rowTextBold}>Price</Text>
            <Text style={styles.rowText} >{selectedItem.price} euro</Text>
          </View>
            <Text style={{fontSize:28, padding:10,}}>Description:</Text>
          <View style={styles.rowContent}>
            <Text style={styles.rowText} >{selectedItem.description}</Text>
          </View>
        </View>
        <AccountScreenRow icon="question" rowText='Guid for shopping Safe' style = {styles.row2} onSelect={()=> props.navigation.navigate('Guid')} />
        <AccountScreenRow icon="info" rowText='Report' style = {styles.row2}/>
      </ScrollView>
      <View style={styles.uploadButton}>
        <Button title="Contact Information" onPress={ContactInfo}/>
      </View>
      <View >
        <Modal 
        visible={infoVisible} 
        animationType="slide"
        transparent={true}
        >
          <ContactInformation 
          customerId={selectedItem.customerId}
          CancelContactInfo={CancelContactInfo}/>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    fontSize:24,
    backgroundColor:colors.light4,
  },
  
  mainContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  rowContent:{
    width:'95%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:3,
  },
  rowTextBold:{
    fontSize:20,
  },
   rowText:{
    fontSize:18,
  },
  rowContainer: {
    width:'100%',    
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    backgroundColor: "#E6E6E6",  
    height: 53,   
    
    justifyContent:'space-between', // center
    alignItems:'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,    
  },
  rowLineContainer2 : {
    marginVertical: 5, // AD - added margin vertical (narros is the best)
  },
  row2: {
    marginVertical: Margins.xxnarrow, // narrow
  },
uploadButton:{
  height:40,
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  margin:10,
}
});

export default itemDetailScreen;

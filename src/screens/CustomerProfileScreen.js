import React, { Component, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image,Button, Modal, TouchableOpacity, ScrollView } from "react-native";

import { ITEM } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import MyItemCardSmall from "../components/MyItemCardSmall";
import Icon from "react-native-vector-icons/AntDesign";
import AppButton from "../components/AppButton";
import EditableCard from "../components/EditableCard";
import AccountScreenRow from '../components/AccountScreenRow';

// Styling iports
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

// in this Component we can see all details of the selected Item
function CustomerProfileScreen(props) {

  // HH - created to read data from dummy-data
    console.log(props.route.params);

    const { itemId } = props.route.params;
    const selectedItemId = itemId;
    // const selectedItem = ITEM.filter(
    //     cat => cat.categoryId.nidexOf(props.selectedItemId) >= 0);
  const selectedItem = ITEM.find(item => item.id === selectedItemId);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
          source={{ uri: selectedItem.imageUrl }}
          style={{ width: '100%', height: 300 }}
          />
        </View>
        <View style={styles.mainContainer}>
          <Text style={{fontSize:30, padding:10,}}>{selectedItem.title}</Text>
          <View style={styles.rowContent}>
            <Text style={styles.rowText}>Posted at {selectedItem.postDate} in {selectedItem.city}</Text>
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
        <AccountScreenRow icon="question" rowText='Guid for shopping Safe' style = {styles.row2}/>
        <AccountScreenRow icon="info" rowText='Report' style = {styles.row2}/>
      </ScrollView>
      <View >
        <Modal 
        visible={infoVisible} 
        animationType="slide"
        transparent={true}
        >
          <View style={styles.contactModal}>
            <View style={styles.contactModal2}>
              <View >
                <Text style={styles.contactInfoText}>Hossein Hazratgholizadeh</Text>
                <Text style={styles.contactInfoText}>Phone number : +358403771254</Text>
              </View>
              <View style={styles.uploadButton}>
              <Button title="Back" onPress={CancelContactInfo}/>
              </View>
            </View>
          </View>
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
  contactModal:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffee',
    marginTop: '75%',
    borderRadius:30,

  },
  contactModal2:{
    alignItems: 'center',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',


  },
  contactInfoText:{
    fontSize:24,
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

export default CustomerProfileScreen;

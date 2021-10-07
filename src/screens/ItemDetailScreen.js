import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";

import { POSTEDITEMS } from "../data/dummy-data";
import MyItemCard from "../components/MyItemCard";
import MyItemCardSmall from "../components/MyItemCardSmall";
import Icon from "react-native-vector-icons/AntDesign";
import AppButton from "../components/AppButton";
import EditableCard from "../components/EditableCard";

// in this Component we can see all details of the selected Item
function itemDetailScreen(props) {

  
  // HH - created to read data from dummy-data
    console.log(props.route.params);

    const { itemId } = props.route.params;
    const selectedItemId = itemId;
    // const selectedItem = POSTEDITEMS.filter(
    //     cat => cat.categoryId.nidexOf(props.selectedItemId) >= 0);
  const selectedItem = POSTEDITEMS.find(item => item.id === selectedItemId);
  //console.log(selectedItem);

  //console.log(selectedItem[0].imageUrl);


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

        <View style={styles.rowLineContainer2}>
            <TouchableOpacity style={styles.rowContainer}>
            <Text>Guide for shopping safe</Text>
            <Icon name="right" style={styles.icon}></Icon>
            </TouchableOpacity>
        </View>
        <View style={styles.rowLineContainer2}>
            <TouchableOpacity style={styles.rowContainer}>
            <Text>Report</Text>
            <Icon name="right" style={styles.icon}></Icon>
            </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.uploadButton}>
        <AppButton button="Contact Information" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
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
    justifyContent:'space-between'
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
uploadButton:{
  height:40,
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  margin:10,
}
});

export default itemDetailScreen;

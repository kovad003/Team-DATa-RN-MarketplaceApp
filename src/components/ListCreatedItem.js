import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import { Margins, Paddings } from "../constants/constvalues";

const ListCreatedItem=(props)=>{
    return(

        <View style={styles.ListOuterContainer}>
        <TouchableOpacity activeOpacity={0.8} onLongPress={props.onDelete}>
            <View style={styles.listItemStyle}>

                <View style={styles.LeftInnerContainer}>
                    <Image 
                    source={{uri: 'https://www.giantbomb.com/a/uploads/scale_small/46/462814/3221502-8667199912-d2d02.jpg'}} style={styles.image}/>
                </View> 

                <View style={styles.rightInnerContainer}>   
                    <Text>{props.itemId}&#41; {props.title}</Text>
                    <Text>Price: {props.price}€ </Text>
                    <Text>Description: {props.description}</Text>
                    <Text>Posted on: {props.datePosted}</Text>
                </View>

            </View>
        </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create ({
    listItemStyle: {
    /* 
     borderWidth: 1, 
      borderColor: '#000080', 
      padding: 5,       
      marginVertical:5,
      backgroundColor:"white",
    
    
    */
      
      borderWidth: 1, 
      borderColor: '#000080', 
      padding: 5,       
      marginVertical:5,
      backgroundColor:"white",

      //display: "flex",
      flexDirection: "row",



     },

     image: {
        width: 70,
        height: 70,
        borderRadius: 35,
     },
     ListOuterContainer: {
         marginHorizontal: Margins.midsize,         
     },
     LeftInnerContainer: {
        backgroundColor: 'red',
     },
     rightInnerContainer: {
        backgroundColor: 'blue',
    },
  });

  export default ListCreatedItem;

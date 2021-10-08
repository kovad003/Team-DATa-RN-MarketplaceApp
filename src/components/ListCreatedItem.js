import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListCreatedItem=(props)=>{
    return(
        <TouchableOpacity activeOpacity={0.8} onLongPress={props.onDelete}>
            <View style={styles.listItemStyle}>
                <Text>{props.id}&#41; {props.name}</Text>
                <Text>Price: {props.price}€ </Text>
                <Text>Description: {props.description}</Text>
                <Text>Category: {props.category}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create ({
    listItemStyle: {
      borderWidth: 1, // 1
      //borderColor: 'blue', 
      borderColor: '#000080', // #000080, #c83232
      padding: 5,       
      marginVertical:5,

      backgroundColor:"#f0f8ff", // #abc
      //backgroundColor:"#f0f8ff", // #abc
      //backgroundColor:"#f0f8ff", // #abc
      //opacity: 0.50, // AD - added for effect
      
      /* 
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
      width: 3,
      height: 3
      },
      elevation: 5,
      shadowOpacity: 0.31,
      shadowRadius: 0,
      */

     },

  });

  export default ListCreatedItem;

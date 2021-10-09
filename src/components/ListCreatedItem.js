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
     },

  });

  export default ListCreatedItem;

import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem=(props)=>{
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
      borderWidth: 1, 
      borderColor: 'blue', 
      padding: 5,
      backgroundColor:"#abc",
      marginVertical:5,
    },
  });

  export default ListItem;

import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';

const ListItemToSelect=(props)=>{
    return(
        <TouchableOpacity 
            activeOpacity={1} 
            onLongPress={props.onLongPress}
            onPress={props.onPress}
            onSelect={props.onSelect}>
            <View style={styles.listItemStyle}>
                <Text style={styles.text}>{/* {props.id}&#41; */} {props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create ({
    listItemStyle: {
        width: '90%',
        alignSelf:'center',
        borderWidth: 0,
        borderRadius: 3, 
        borderColor: colors.light3, 
        padding: 10,
        backgroundColor:"#E6E6E6",
        marginVertical:3,
        elevation:2,
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
    },
  });

  export default ListItemToSelect;
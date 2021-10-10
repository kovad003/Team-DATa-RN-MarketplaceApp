import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import { Margins, Paddings } from "../constants/constvalues";

import colors from "../constants/colors";

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
                    <View style={styles.innerRowContainer1}>
                        <Text>{props.itemId}&#41; {props.title}</Text>
                    </View>

                    <View style={styles.innerRowContainer2}>
                        <Text>Price: {props.price}€ </Text>
                        <Text>Description: {props.description}</Text>
                        <Text>Posted on: {props.datePosted}</Text>
                    </View>

                    <View style={styles.innerRowContainer3}>
                        <Text>Button 1 and Button 2</Text>
                    </View>

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
      marginVertical:5,
      backgroundColor:"white",

      //display: "flex",
      flexDirection: "row",
      width: '100%',

      //paddingHorizontal: 5,
     },

     image: {
        width: 70, // 70
        height: 70, //70
        borderRadius: 35,
     },
     ListOuterContainer: {
         marginHorizontal: Margins.narrow,         
     },
     LeftInnerContainer: {
        //backgroundColor: Color,
        //maxWidth: '70%',
        //paddingLeft: Paddings.narrow,

        backgroundColor: colors.danger,
        width: '20%',

        alignItems: "center",
        paddingHorizontal: 5,
        marginHorizontal: 5,
        marginVertical: 5,

        alignItems: "center",
        justifyContent: "center"

     },
     rightInnerContainer: {
        backgroundColor: 'blue',
        width: '76.3%',
        paddingHorizontal: 5,     
        marginVertical: 5,    
        justifyContent: "center"
    },
    innerRowContainer1: {
        backgroundColor: 'red',
    },
    innerRowContainer2: {
        backgroundColor: 'yellow',
    },
    innerRowContainer3: {
        backgroundColor: 'green',
    },

  });

  export default ListCreatedItem;

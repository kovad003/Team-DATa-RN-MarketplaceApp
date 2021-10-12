import React, { Component, useState, useEffect } from "react";

import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';

import { Margins, Paddings } from "../constants/constvalues";

import colors from "../constants/colors";
import TextStyling from '../constants/fontstyling';
import MyPostedItemsDelete from './createItem/MyPostedItemsDelete';

const ListCreatedItem=(props)=>{

    const [items, setItems] = useState([]);
    const [itemList, addItemToList] = useState([]);

    const [isDeleteVisible, setDeleteVisibility] = useState(false);

    const onAddItem = (childdata) => {
        addItemToList(itemList =>[...itemList, childdata]);
    
        console.log('childdata.categoryId: ' + childdata.categoryId);
        console.log('childdata.customerId: ' + childdata.customerId);
        console.log('childdata.title: ' + childdata.title);
        console.log('childdata.price: ' + childdata.price);
        console.log('childdata.description: ' + childdata.description);
        console.log('childdata.description: ' + childdata.image);
        console.log('childdata.condition: ' + childdata.condition);
        console.log('childdata.location: ' + childdata.location);
    
        addData(childdata.categoryId, childdata.customerId, childdata.title, childdata.price, childdata.description, childdata.image, childdata.condition, childdata.location);
        setDeleteVisibility(false);
        //setLoading(true);
      }

      const cancelAddItem=()=>{
        setDeleteVisibility(false);
        //setLoading(false);
      }

      // AD - a dunny More Info alert
        const moreInfoAlert = () =>
        Alert.alert(
        "Dummy More Info",
        "Here is more information about your post!",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
        );

        // AD - a dunny Update Info alert
        const updateAlert = () =>
        Alert.alert(
        "Dummy Update Info",
        "Your post was successfully updated!",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
        );

    return(

        <View style={styles.ListOuterContainer}>
        <View /* activeOpacity={0.8} onLongPress={props.onDelete} */>
            <View style={styles.listItemStyle}>

                <View style={styles.LeftInnerContainer}>
                    <Image 
                    source={{uri: 'https://www.giantbomb.com/a/uploads/scale_small/46/462814/3221502-8667199912-d2d02.jpg'}} style={styles.image}/>
                </View> 

                <View style={styles.rightInnerContainer}>
                    <View style={styles.innerRowContainer1}>
                        <Text style={[TextStyling.textBlackSmall, styles.titleName]}>{props.itemId}&#41; {props.title}</Text>
                    </View>

                    <View style={styles.innerRowContainer2}>

                        <Text style={TextStyling.textBlackSmall}>Price: </Text>
                        <Text style={TextStyling.textBlackSmall}>{props.price}€</Text>

                        <Text style={TextStyling.textBlackSmall}>Condition: {props.condition}</Text>
                        <Text style={TextStyling.textBlackSmall}>Location: {props.location}</Text>
                        <Text style={TextStyling.textBlackSmall}>Posted on: {props.datePosted}</Text>
                    </View>

                    <View style={styles.innerRowContainer3}>
                        <Text
                            onPress={moreInfoAlert} 
                            style={[TextStyling.textBlackSmall, styles.moreButton]}>
                            MORE INFO
                        </Text>
                        <Text 
                            onPress={updateAlert}
                            style={[TextStyling.textBlackSmall, styles.updateButton]}>
                            UPDATE
                        </Text>
                        <Text
                            text = 'submit' 
                            onPress={()=>setDeleteVisibility(true)}
                            style={[TextStyling.textBlackSmall, styles.deleteButton]}>
                            DELETE
                        </Text>
                        
                    </View>

                    {/* 
                    <Text 

                        text = 'submit'
                        style = {TextStyling.textBlackSmall}
                        onPress={()=>setVisibility(true)} >
                        Press Me</Text>

                        <Text 
                            text = 'submit'
                            style = {TextStyling.textBlackSmall}
                            onPress={()=>setflatListVisibility(true)} >
                            Press Me FlatList</Text>  


                        <MyPostedItems 
                            visibility={isflatListVisible} 
                            onAddItem={onAddItem}
                            itemList={items} 
                            onCancelItem={cancelAddItem2} 
                            />

                    */}

                            <MyPostedItemsDelete 
                            visibility={isDeleteVisible} 
                            onAddItem={onAddItem}
                            itemList={items} 
                            onCancelItem={cancelAddItem} 
                            />

                </View>

            </View>
        </View>
        </View>
    );
}
const styles = StyleSheet.create ({
    listItemStyle: { 
      borderWidth: 1, 
      borderColor: '#000080',       
      marginVertical:5,
      backgroundColor:"white",   
      flexDirection: "row",
      width: '100%',     
     },

     image: {
        width: 70,
        height: 70,
        borderRadius: 35,
     },
     ListOuterContainer: {
         marginHorizontal: Margins.narrow,         
     },
     LeftInnerContainer: {
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
        backgroundColor: colors.danger,
        width: '76.3%',
        paddingHorizontal: 7, //5  
        marginVertical: 5,    
        justifyContent: "center"
    },
    innerRowContainer1: {
        backgroundColor: colors.light4,
        paddingHorizontal: Paddings.xnarrow,
    },
    innerRowContainer2: {
        backgroundColor: colors.light4,
        padding: Paddings.xnarrow,    
    },
    innerRowContainer3: {
        backgroundColor: colors.light4,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: Paddings.large,
        paddingVertical: Paddings.xnarrow,       
    },
    titleName: {
        color: colors.darkBlueCustom,
        fontWeight: "bold",     
        borderBottomWidth:1,
        borderColor: '#000080', //  '#000080'
        paddingVertical: Paddings.xnarrow,
    },
    moreButton: {
        color: "green",
        fontWeight: "bold",
    },
    updateButton: {
        color: "blue",
        fontWeight: "bold",
    },
    deleteButton: {
        color: "red",
        fontWeight: "bold",
    },
    fontCustomBold: {
        fontWeight: "bold",
    }
  });

  export default ListCreatedItem;

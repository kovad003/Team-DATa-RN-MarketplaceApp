/**
 * Overview: A class that lists out some key information about a seller's posted items.
 *           The ListCreatedItem screen is activated (called) when the user clicks on 'My Posted Items' 
 *           from the Create Item screen.
 * 
 * Description: Once the user clicks 'My Posted Items' this external component is called to display item information. 
 *              The main parts of the screen are as follows: 
 * 
 *  - State variables and functions -> These are behind the scenes and not visible to the user. 
 *                                     They power the functionality of the page. 
 *  - Rendered View components(screen) -> The screen is made visible to the user once the 'My Posted Items' 
 *                                        button is pressed.   
 *  - Page stylings -> Much of the app's stylings are included on each respective page.
 *                     Occasionally, however, external consts, fonts, and colours have been utilised.
 * 
 * @link   ./src/components/ListCreatedItem.js
 * @file   This files defines the ListCreatedItem.js class.
 * @author Ashley Davis.
 * @since  03.10.2021
 */

/* AD - Standard imports from both React and React-Native */
import React, { Component, useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';

/* AD - Constants (such as for custom colours and margins etc) */
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";
import TextStyling from '../constants/fontstyling';

/* AD - External custom components */

/* AD - The main function of the page */
const ListCreatedItem=(props)=>{

    // ================ AD - State Variables ================
        // Currently empty

    // ================ AD - Custom Functions ===================
    /**
     * Function will enable data transfer from child to parent through props 
     * so customer data can be re-fetched from DB in the parent class using an apropiate service method.
     * In case we have multiple child nested inside of each other this step has to repeated in the intermediary (mediator) class. 
     */
     const triggerScreenRefresh=()=>{
        console.log("const triggerScreenRefresh=()=>{");
        props.refreshScreen("trigger from ListCreatedItem.js");
    }
    /**
     * Function will process responseData received from the apropiate service method.
     * Based on the nature of the response data (True -> removal was successful; or False -> removal was not successful)
     * an Alert message will appear.
     * @param {*} responseData 
     */
    function handleDeleteResponse(responseData){
        if(responseData === true) {
            Alert. alert(
            "Deleted!", 
            "Your posted item was removed successfully.", 
            [ 
                { 
                text: "OK",
                onPress: () => triggerScreenRefresh(), 
                }, ], { cancelable: false } ); 
        } else {
            alert("Something went wrong! Please try again later.");
        }           
    }

      // AD - a dummmy More Info alert
        const moreInfoAlert = () =>
        Alert.alert(
        "Info Alert",
        "Here is more information about your post!",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]);

        // AD - a dummmy Update Info alert
        const updateAlert = () =>
        Alert.alert(
        "Update Alert!",
        "Your post was successfully updated!",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]);

        // AD - Delete Alert
        const deleteAlert = () =>
        Alert.alert(
        "Delete Alert!",
        "Are you sure you want to remove this item? This process can not be undone!",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => deleteItem(props.itemId) }
        ]);

// SERVICE METHODS ----------------------------------------------------------------------------------------------------------------        
        /* AD - An async function to DELETE data to the Java backend (which interacts with our MySQL / Google Cloud database) */
        // Delivers parameter as JSON data 
        async function deleteItem(idParam) {
            console.log('started:  async function deleteItem(idParam) {');
            let response = null;
            let requestOptions = {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                itemId: idParam*1, // *1 -> numbers only
            })
            };
            try {
                response = await fetch("http://10.0.2.2:8080/rest/itemservice/deletejsonitem", requestOptions)
            } catch (error) {
                alert("Error in the service method:" + error);
            }
            try {
                let responseData = await response.json();
                console.log('responseData: ' + responseData);
                handleDeleteResponse(responseData); // Java service method will return TRUE or FALSE as a response.   
            } catch (error) {
                alert("Error in response data:" + error);
            }
        }


    return(

        /************* AD - The data that will be rendered and visible to the user *************/

        <View style={styles.ListOuterContainer}>
        <View /* activeOpacity={0.8} onLongPress={props.onDelete} */ >
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

                        <Text style={TextStyling.textBlackSmall}>Price: {props.price}€</Text>
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
                            //text = 'submit' 
                            onPress={deleteAlert}
                            style={[TextStyling.textBlackSmall, styles.deleteButton]}>
                            DELETE
                        </Text>
                        
                    </View>
                </View>
            </View>
        </View>
        </View>
    );
}

/************* AD - Stylings *************/
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
        paddingHorizontal: 7,
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
        borderColor: '#000080',
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

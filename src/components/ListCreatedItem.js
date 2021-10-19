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
import MyPostedItemsDelete from './createItem/MyPostedItemsDelete';

/* AD - The main function of the page */
const ListCreatedItem=(props)=>{

    /************* AD - State Variables *************/

    /* AD - Handles the items (useState variable / array) */
    const [items, setItems] = useState([]);
    const [itemList, addItemToList] = useState([]);

    /* AD - Handles the delete item modal window visibility (useState variable) */
    const [isDeleteVisible, setDeleteVisibility] = useState(false);

    /************* AD - Custom Functions *************/

     /* AD - A custom function to store new item data taken from user 
        input taken from the CreateItemInput modal window */
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

      /* AD - A function related to modal visibility */
      const cancelAddItem=()=>{
        setDeleteVisibility(false);
        //setLoading(false);
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
            //showConfirmation("Item was successfully removed!")
            console.log('responseData: ' + responseData);
            if(responseData === true){
                alert("Item was removed successfully!")
            }
            else{
                alert("Something went wrong! Please try again later.");
            }
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
                            // onPress={()=>setDeleteVisibility(true)} //TODEL
                            style={[TextStyling.textBlackSmall, styles.deleteButton]}>
                            DELETE
                        </Text>
                        
                    </View>
                    {/* AD - For the hidden MyPostedItemsDelete external component (modal), 
                    which will become visible, when the user clicks the delete button below
                    the listed item ('my posted items' rendered via the ListCreatedItem.js) */} 
                    {/* TODEL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                        <MyPostedItemsDelete 
                        visibility={isDeleteVisible} 
                        onAddItem={onAddItem}
                        itemList={items} 
                        onCancelItem={cancelAddItem} 
                        />
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

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

/**
 * Overview: A class that allows users to post a new item for sale.
 *           The CreateItemInput screen is activated when users click 'Post New Item' 
 *           from the Create Item screen.
 * 
 * Description: Once the user clicks 'Post New Item' they can then input the new details via this modal screen. 
 *              The main parts of the screen are as follows: 
 * 
 *  - A state variable and text input handlers -> These are behind the scenes and not visible to the user. 
 *                                                They power the functionality of the page. 
 *  - Modal Window-> The screen is made visible to the user via the modal container that wraps it.
 *  - ScrollView-> On this page, the scrollView acts as the main scrollable container for the page. *  
 *  - Text input fields -> The user can enter the details of the new item into the text input fields.
 *  - Buttons -> The user can either choose to add the item, or cancel the item via the buttons.
 *  - Page stylings -> Much of the app's stylings are included on each respective page.
 *                     Occasionally, however, external consts, fonts, and colours have been utilised.
 * 
 * @link   ./src/components/CreateItemInput.js
 * @file   This files defines the CreateItemInput.js class.
 * @author Ashley Davis.
 * @since  02.10.2021
 */

/* AD - Standard imports from both React and React-Native */
import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, findNodeHandle, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

/* AD - imports for the logos and items*/
import CreateItemInputLogo from "./CreateItemInputLogo";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/MaterialIcons";

/* AD - Constants (such as for custom colours and margins etc) */
import TextStyling from '../constants/fontstyling';
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";


/* AD - The main function of the component */
const CreateItemInput=(props)=>{

  /************* AD - State Variables *************/

    // AD - State variable (defines the item object)
    const [item, setItem] = useState({
        categoryId: 1,
        customerId: 1, //TODO
        title: 'some name',
        price: 0,
        description: 'some description',
        image: 'https://www.giantbomb.com/a/uploads/scale_small/46/462814/3221502-8667199912-d2d02.jpg',
        condition: 'used',
        location: 'Hämeenlinna',
    });
    /* const [formChecker, setFormChecker] = useState({
        categoryinput: 'false',
    }) */

    /************* AD - Custom Functions *************/

    /* AD - input handlers, to take input from the text input fields */
    const categoryInputHandler=(enteredText)=>{
        item.categoryId = enteredText;
        console.log('entered text/categoryId: ' + enteredText);
    }

    const titleInputHandler=(enteredText)=>{
        item.title = enteredText;
        console.log('entered text/title: ' + enteredText);
    }

    const priceInputHandler=(enteredText)=>{
        item.price = enteredText;
        console.log('entered text/price: ' + enteredText);
    }

    const descriptionInputHandler=(enteredText)=>{
        item.description = enteredText;
        console.log('entered text/description: ' + enteredText);
    }

    const imageInputHandler=(enteredText)=>{
        item.image = enteredText;
        console.log('entered text/image: ' + enteredText);
    }

    const conditionInputHandler=(enteredText)=>{
        item.condition = enteredText;
        console.log('entered text/condition: ' + enteredText);
    }

    const locationInputHandler=(enteredText)=>{
        item.location = enteredText;
        console.log('entered text/location: ' + enteredText);
    }
    
    /* AD - custom functions to control the modal 
    (other functions are called via props, and the item object can be added) */
    const addItem=()=>{
        props.onAddItem(item);
    }
    const cancelItem=()=>{
        props.onCancelItem();
    }

    /************* AD - The data to be rendered and visible to the user *************/
    return (
        <Modal visible={props.visibility} animationType="slide">
          <ScrollView style={styles.scrollView}>
            <View style={styles.formStyle}>
              <View style={styles.logoCustom} >
              <CreateItemInputLogo></CreateItemInputLogo>
              </View>

              <Text style={TextStyling.textBlackSmall}>Item Name</Text>
              <View style={styles.itemNameRow}>
              <Icon1 name="tag" style={styles.iconStyling}></Icon1>
              <TextInput placeholder="Item's name" 
                  style={styles.inputStyle} 
                  onChangeText={titleInputHandler}/>
              </View>

              <Text style={TextStyling.textBlackSmall}>Price</Text>
              <View style={styles.itemNameRow}>
              <Icon2 name="euro-sign" style={styles.iconStyling2}></Icon2>  
              
              <TextInput placeholder="Item's price" 
                  style={styles.inputStyle} 
                  onChangeText={priceInputHandler}/>                
              </View>

              <Text style={TextStyling.textBlackSmall}>Description</Text>
              <View style={styles.itemNameRow}>               
              <Icon3 name="edit" style={styles.iconStyling3}></Icon3>    
              <TextInput placeholder="Item's description"                
                  style={styles.inputStyle2} 
                  onChangeText={descriptionInputHandler}/>               
              </View>
                
              <Text style={TextStyling.textBlackSmall}>Image</Text>
              <View style={styles.itemNameRow}>               
              <Icon3 name="image" style={styles.iconStyling3a}></Icon3>    
              <TextInput placeholder="Item's image"                
                  style={styles.inputStyle3} 
                  onChangeText={imageInputHandler}/>               
              </View>

              <Text style={TextStyling.textBlackSmall}>Category</Text>
              <View style={styles.itemNameRow}>
              <Icon4 name="category" style={styles.iconStyling5}></Icon4> 
              <TextInput placeholder="Item's category" 
                  style={styles.inputStyle} 
                  onChangeText={categoryInputHandler}/>
              </View>

              <Text style={TextStyling.textBlackSmall}>Condition</Text>
              <View style={styles.itemNameRow}>
              <Icon4 name="build-circle" style={styles.iconStyling5}></Icon4> 
              <TextInput placeholder="Item's condition" 
                  style={styles.inputStyle} 
                  onChangeText={conditionInputHandler}/>
              </View>

              <Text style={TextStyling.textBlackSmall}>Location</Text>
              <View style={styles.itemNameRow}>
              <Icon4 name="my-location" style={styles.iconStyling5}></Icon4> 
              <TextInput placeholder="Item's location"
                  style={styles.inputStyle}
                  onChangeText={locationInputHandler}/>
              </View>

              <View style={styles.buttonView}>
                  <View style={styles.button}>
                  <Button color='#c83232' title="Cancel" onPress={cancelItem}/>
                  </View>
                  <View style={styles.button}>
                  <Button color='#000080' title="Add" onPress={addItem}/>
                  </View>
              </View>          
            </View>
          </ScrollView>
        </Modal>
    );
}

/************* AD - Stylings *************/

const styles=StyleSheet.create({
      scrollView: {
        backgroundColor: colors.light4,
      },
    formStyle: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:"center",
        backgroundColor: colors.light4,
        paddingHorizontal: 10,        
      },
      logoCustom: {
        marginTop: Margins.narrow,
      },
      inputStyle: {
        borderBottomWidth:1,
        borderColor: colors.darkBlueCustom,
        paddingLeft: Paddings.narrow,
        width:'80%',
        backgroundColor: 'white',
        color: '#000080',
        marginRight: Margins.midsize, 
        height: 40,  
        borderRadius: 5,            
      },
      inputStyle2: {
        borderBottomWidth:1,
        borderColor: colors.darkBlueCustom,
        paddingLeft: Paddings.narrow,
        width:'80%',
        height: 80,
        backgroundColor: 'white',
        color: '#000080',
        marginRight: Margins.midsize,
        borderRadius: 5,  
      },
      inputStyle3: {
        borderBottomWidth:1, 
        borderColor: colors.darkBlueCustom,
        paddingLeft: Paddings.narrow,
        width:'80%',
        height: 70,
        backgroundColor: 'white',
        color: '#000080',
        marginRight: Margins.midsize,
        borderRadius: 5,  
      },
      itemNameRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      buttonView:{
        width:'60%',
        flexDirection: 'row',
        justifyContent:"space-around",
        paddingLeft: 20,
        marginVertical: Margins.midsize,
      },
      button:{
        width:'40%',
      },
      iconStyling: {
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: 6,
        color: colors.danger,
      },
      iconStyling2: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: 18.7,
        paddingTop: 6,
      },
      iconStyling3: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: 28,
      },
      iconStyling3a: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: Paddings.midsize,
      },
      iconStyling4: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: Paddings.narrow,
      },
      iconStyling5: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: 6,
      },
});

export default CreateItemInput;

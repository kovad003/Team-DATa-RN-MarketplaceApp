import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, findNodeHandle, Text} from 'react-native';

import LogoSmall from "./LogoSmall";
import CreateItemInputLogo from "./CreateItemInputLogo";

import colors from "../constants/colors";

import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/MaterialIcons";

import { Margins, Paddings } from "../constants/constvalues";
import { ScrollView } from 'react-native-gesture-handler';

import TextStyling from '../constants/fontstyling'

const CreateItemInput=(props)=>{
    const data = "This is data from Child Component to the Parent Component. :)"
    const [name, setName]=useState('');
    const [price, setPrice]=useState(0);

    // State variable
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
    

    // For Controlling modal
    const addItem=()=>{
        props.onAddItem(item);
    }
    const cancelItem=()=>{
        props.onCancelItem();
    }

    // Return
    return (
        <Modal visible={props.visibility} animationType="slide">
          <ScrollView>
            <View style={styles.formStyle}>
              <View style={styles.logoCustom} >
              <CreateItemInputLogo></CreateItemInputLogo>
              </View>

              <Text style={TextStyling.textBlackMedium}>Item Name</Text>
              <View style={styles.itemNameRow}>
              <Icon1 name="tag" style={styles.iconStyling}></Icon1>
              <TextInput placeholder="Item's name" 
                  style={styles.inputStyle} 
                  onChangeText={titleInputHandler}/>
              </View>

              <Text style={TextStyling.textBlackMedium}>Price</Text>
              <View style={styles.itemNameRow}>
              <Icon2 name="euro-sign" style={styles.iconStyling2}></Icon2>  
              
              <TextInput placeholder="Item's price" 
                  style={styles.inputStyle} 
                  onChangeText={priceInputHandler}/>
                
              </View>

              <Text style={TextStyling.textBlackMedium}>Description</Text>
              <View style={styles.itemNameRow}>               
              <Icon3 name="edit" style={styles.iconStyling3}></Icon3>    
              <TextInput placeholder="Item's description"                
                  style={styles.inputStyle2} 
                  onChangeText={descriptionInputHandler}/>               
              </View>
                
              <Text style={TextStyling.textBlackMedium}>Image</Text>
              <View style={styles.itemNameRow}>               
              <Icon3 name="edit" style={styles.iconStyling3}></Icon3>    
              <TextInput placeholder="Item's image"                
                  style={styles.inputStyle2} 
                  onChangeText={imageInputHandler}/>               
              </View>

              <Text style={TextStyling.textBlackMedium}>Category</Text>
              <View style={styles.itemNameRow}>
              <Icon4 name="category" style={styles.iconStyling4}></Icon4> 
              <TextInput placeholder="Item's category" 
                  style={styles.inputStyle} 
                  onChangeText={categoryInputHandler}/>
              </View>

              <Text style={TextStyling.textBlackMedium}>Condition</Text>
              <View style={styles.itemNameRow}>
              <Icon4 name="category" style={styles.iconStyling4}></Icon4> 
              <TextInput placeholder="Item's condition" 
                  style={styles.inputStyle} 
                  onChangeText={conditionInputHandler}/>
              </View>

              <Text style={TextStyling.textBlackMedium}>Location</Text>
              <View style={styles.itemNameRow}>
              <Icon4 name="category" style={styles.iconStyling4}></Icon4> 
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

const styles=StyleSheet.create({
    formStyle: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:"center",
        backgroundColor: colors.light4,
        paddingHorizontal: 10,

        
      },
      logoCustom: {
        marginBottom: Margins.narrow,
        
        //marginTop: Margins.xxnarrow,
      },
      inputStyle: {
        borderWidth: 2, 
        borderColor: '#000080', 
        padding: 10,
        width:'80%', // '85%'
        marginBottom:10,

        backgroundColor: 'white',
        color: '#000080',

        marginRight: Margins.midsize,
               
      },

      inputStyle2: {
        borderWidth: 2, 
        borderColor: '#000080', 
        padding: 10,
        width:'80%', // '85%'
        marginBottom:10,
        height: 100,
        backgroundColor: 'white',

        color: '#000080',
        marginRight: Margins.midsize,
      },

      itemNameRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },

      buttonView:{
        width:'60%',
        flexDirection: 'row',
        justifyContent:"space-around",
        marginTop: Margins.midsize,

        paddingLeft: 20,

        marginBottom: Margins.large,
      },
      button:{
        width:'40%',
      },

      iconStyling: {
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',
      
        paddingRight: Paddings.narrow,
        paddingTop: Paddings.narrow,

        color: colors.danger,
      },

      iconStyling2: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',
      
        paddingRight: 18.7,
        paddingTop: Paddings.narrow,
      },

      iconStyling3: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',
      
        paddingRight: Paddings.narrow,
        paddingTop: 37,
      },

      iconStyling4: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',
      
        paddingRight: Paddings.narrow,
        paddingTop: Paddings.narrow,
      },
});

export default CreateItemInput;

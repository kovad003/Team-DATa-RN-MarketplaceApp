import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, findNodeHandle} from 'react-native';

import LogoSmall from "../components/LogoSmall";
import colors from "../constants/colors";

import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/MaterialIcons";

import { Margins, Paddings } from "../constants/constvalues";

const CreatedItemInput=(props)=>{
    const data = "This is data from Child Component to the Parent Component. :)"
    const [name, setName]=useState('');
    const [price, setPrice]=useState(0);

    // State variable
    const [item, setItem] = useState({
        name: 'some name',
        price: 0,
        description: 'some description',
        category: 'some category',
    });
    
    const nameInputHandler=(enteredText)=>{
        item.name = enteredText;
        console.log('entered text/name: ' + enteredText);
    }

    const priceInputHandler=(enteredText)=>{
        item.price = enteredText;
        console.log('entered text/price: ' + enteredText);
    }

    const descriptionInputHandler=(enteredText)=>{
        item.description = enteredText;
        console.log('entered text/description: ' + enteredText);
    }

    const categoryInputHandler=(enteredText)=>{
        item.category = enteredText;
        console.log('entered text/category: ' + enteredText);
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
            <View style={styles.formStyle}>

                <View style={styles.logoCustom} >
                <LogoSmall></LogoSmall>
                </View>

                <View style={styles.itemNameRow}>
                <Icon1 name="tag" style={styles.iconStyling}></Icon1>
                <TextInput placeholder="Item's name" 
                    style={styles.inputStyle} 
                    onChangeText={nameInputHandler}/>
                </View>

                <View style={styles.itemNameRow}>
                <Icon2 name="euro-sign" style={styles.iconStyling2}></Icon2>    
                <TextInput placeholder="Item's price" 
                    style={styles.inputStyle} 
                    onChangeText={priceInputHandler}/>
                </View>

                <View style={styles.itemNameRow}>
                <Icon3 name="edit" style={styles.iconStyling3}></Icon3>    
                <TextInput placeholder="Item's description" 
                    style={styles.inputStyle2} 
                    onChangeText={descriptionInputHandler}/>
                </View>

                <View style={styles.itemNameRow}>
                <Icon4 name="category" style={styles.iconStyling}></Icon4> 
                <TextInput placeholder="Item's category" 
                    style={styles.inputStyle} 
                    onChangeText={categoryInputHandler}/>
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
      },
      logoCustom: {
        marginBottom: Margins.large,
      },
      inputStyle: {
        borderWidth: 2, 
        //borderColor: 'red', 
        borderColor: '#000080', 
        padding: 10,
        width:'80%', // 80%
        marginBottom:10,
        
        
      },

      inputStyle2: {
        borderWidth: 2, 
        //borderColor: 'red', 
        borderColor: '#000080', 
        padding: 10,
        width:'80%', // 80%
        marginBottom:10,

        height: 100,
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
      },
      button:{
        width:'40%',
      },

      iconStyling: {
        //color: "rgba(128,128,128,1)",
        color: colors.danger,
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',
      
        paddingRight: Paddings.narrow,
        paddingTop: Paddings.narrow,
      },

      iconStyling2: {
        //color: "rgba(128,128,128,1)",
        color: colors.danger,
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',
      
        paddingRight: 18.7,
        paddingTop: Paddings.narrow,
      },

      iconStyling3: {
        //color: "rgba(128,128,128,1)",
        color: colors.danger,
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',
      
        paddingRight: Paddings.narrow,
        paddingTop: 37,
      },
});

export default CreatedItemInput;

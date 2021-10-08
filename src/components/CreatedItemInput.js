import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, findNodeHandle} from 'react-native';

import LogoSmall from "../components/LogoSmall";
import colors from "../constants/colors";

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

                <LogoSmall></LogoSmall>

                <TextInput placeholder="Item's name" 
                    style={styles.inputStyle} 
                    onChangeText={nameInputHandler}/>
                <TextInput placeholder="Item's price" 
                    style={styles.inputStyle} 
                    onChangeText={priceInputHandler}/>
                <TextInput placeholder="Item's description" 
                    style={styles.inputStyle} 
                    onChangeText={descriptionInputHandler}/>
                <TextInput placeholder="Item's category" 
                    style={styles.inputStyle} 
                    onChangeText={categoryInputHandler}/>    
                <View style={styles.buttonView}>
                    <View style={styles.button}>
                    <Button color='red' title="Cancel" onPress={cancelItem}/>
                    </View>
                    <View style={styles.button}>
                    <Button color='green' title="Add" onPress={addItem}/>
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
      inputStyle: {
        borderWidth: 2, 
        borderColor: 'red', 
        padding: 10,
        width:'80%', // 80%
        marginBottom:10,
      },
      buttonView:{
        width:'60%',
        flexDirection: 'row',
        justifyContent:"space-around",
      },
      button:{
        width:'40%',
      }
});

export default CreatedItemInput;

import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, findNodeHandle, Text, Alert } from 'react-native';
import CreateItemInputLogo from '../CreateItemInputLogo';
import colors from '../../constants/colors';
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import { Margins, Paddings } from "../../constants/constvalues";
import { ScrollView } from 'react-native-gesture-handler';
import TextStyling from '../../constants/fontstyling';

const MyPostedItemsDelete=(props)=>{
           

    const cancelDeletion=()=>{
      props.onCancelItem();
  }

  const deleteAlert = () =>
    Alert.alert(
      "Dummy Deletion",
      "Your Posted Item was deleted!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    // Return
    return (
        <Modal visible={props.visibility} animationType="slide">
          <ScrollView style={styles.scrollView}>
            <View style={styles.formStyle}>
              <View style={styles.logoCustom} >
              <CreateItemInputLogo></CreateItemInputLogo>
              </View>

              <Text style={[TextStyling.textBlackSmall, styles.centeredCustom]}>
                {"\n"}Hold up!                    
                </Text>             
            
             
              <View style={styles.itemNameRow}>

                <Text style={[TextStyling.textBlackSmall, styles.centeredCustom]}>
                {"\n"}You are about to delete a posted item!{"\n"}                    
                </Text>             
              </View>

              <Text style={[TextStyling.textBlackSmall, styles.centeredCustom]}>
                Once deleted, the post is non-recoverable.{"\n"}                
               </Text> 

              <Text style={[TextStyling.textBlackSmall, styles.centeredCustom]}>
                Are you sure?{"\n"}                
               </Text> 

              
              <View style={styles.buttonView}>
                  <View style={styles.button}>
                  <Button color='#000080' title="Cancel" onPress={cancelDeletion}/>
                  </View>
                  <View style={styles.button}>
                  <Button color='#c83232' title="DELETE"  onPress={deleteAlert}  />
                  </View>
              </View>          
            </View>
          </ScrollView>
        </Modal>
    );
}

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
        marginTop: Margins.xxlarge,
      },
      inputStyle: {
        //borderWidth: 1,
        borderBottomWidth:1,
        borderColor: colors.darkBlueCustom, //  '#000080' '#5f9ea0'
        paddingLeft: Paddings.narrow,
        width:'80%',
        backgroundColor: 'white',
        color: '#000080',
        marginRight: Margins.midsize, 
        height: 40,  
        borderRadius: 5,            
      },
      inputStyle2: {
        //borderWidth: 1, 
        borderBottomWidth:1,
        borderColor: colors.darkBlueCustom, //  '#000080' '#5f9ea0'
        paddingLeft: Paddings.narrow,
        width:'80%',
        height: 80,
        backgroundColor: 'white',
        color: '#000080',
        marginRight: Margins.midsize,
        borderRadius: 5,  
      },
      inputStyle3: {
        //borderWidth: 1, 
        borderBottomWidth:1, 
        borderColor: colors.darkBlueCustom, //  '#000080' '#5f9ea0'
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
      centeredCustom: {
        alignItems: "center"
      },
});

export default MyPostedItemsDelete;

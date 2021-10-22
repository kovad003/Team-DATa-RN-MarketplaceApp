import React, { Component, useState, useEffect } from 'react';
import {
    Button,
    View,
    StyleSheet,
    ScrollView,
    Text,
    Dimensions,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native';
import Logo from "../Logo";
import { Margins } from '../../constants/constvalues';
import colors from '../../constants/colors';
//import LogoSmall from "../src/components/LogoSmall";

//const AppSupport = () => {
const AboutModal=(props)=>{
    
    const cancelAbout=()=>{
        props.onCancelAbout();
    }
    
    return (

        <Modal visible={props.visibility} animationType="slide">
        <ScrollView style={styles.scrollView}>     

        <View style={{ flex: 1, backgroundColor: colors.light4/* '#ffffff' */ }}>
            <Logo style={styles.logo}/>
            <View
                style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    //marginVertical: 10,
                    marginTop: 5,
                    marginHorizontal: 10,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                }}>
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>About Modal</Text>
                </View>


                
                <View style={{ marginTop: 10 }}>

                    <View style={{ marginVertical: 5 }}>
                        <Text 
                        style={{ fontSize: 16, marginBottom: 5, textAlign : "center" }}>
                        Welcome to Useddo!</Text>
                        
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text 
                        style={{ fontSize: 16, marginBottom: 5, textAlign : "left", paddingLeft: 15 }}>
                        Whether you are looking to buy or sell,
                        Useddo has you covered.</Text>
                        
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text 
                        style={{ fontSize: 16, marginBottom: 5, textAlign : "left", paddingLeft: 15 }}>
                        We are an up-and-coming marketplace app with unrivalled
                        community support.</Text>
                        
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text 
                        style={{ fontSize: 16, marginBottom: 5, textAlign : "left", paddingLeft: 15 }}>
                        We really cherish and value our enthusiastic and expanding user base.</Text>
                        
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text 
                        style={{ fontSize: 16, marginBottom: 5, textAlign : "left", paddingLeft: 15 }}>
                        Furthermore, we thank you greatly for choosing to use Useddo!</Text>
                        
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text 
                        style={{ fontSize: 16, marginBottom: 5, textAlign : "center" }}>
                        Best regards - the Useddo team.</Text>
                        
                    </View>

                    <View style={{ alignSelf: 'center', width: '100%', marginTop: 20 }}>
                        
                        <View style={styles.buttonView}>
                            <View style={styles.button}>
                            <Button color='#c83232' title="OK" onPress={cancelAbout}/>
                            </View>

                            
                        </View> 

                    </View>

                </View>
            </View>
        </View>

        </ScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    view: { height: 60, width: '100%', },
    TextInput: {
        height: 43,
        borderBottomColor: '#bdbdbd',
        borderBottomWidth: 4,
        fontSize: 18,
    },
    logo: {
        width: 172,
        height: 110,
        marginTop: 30,
        alignSelf: "center",
    },
    scrollView: {
        backgroundColor: colors.light4,
      },
    /* extra stylings for the modal control buttons */
    buttonView:{
        width:'100%',
        flexDirection: 'row',
        justifyContent:"space-around",
        paddingLeft: 20,
        marginVertical: Margins.narrow,
        alignContent: "center"
      },
      button:{
        width:'30%',
      },
});

export default AboutModal;
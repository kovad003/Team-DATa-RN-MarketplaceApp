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
//import LogoSmall from "../src/components/LogoSmall";

//const AppSupport = () => {
const AboutModal=(props)=>{
    
    const cancelAbout=()=>{
        props.onCancelAbout();
    }
    
    return (

        <Modal visible={props.visibility} animationType="slide">
        <ScrollView style={styles.scrollView}>     

        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
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
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>First Name</Text>
                        <TextInput
                            placeholderTextColor="#bdbdbd"
                            placeholder="your fisrt name"
                            style={styles.TextInput}
                        />
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text style={{ fontSize: 16, marginBottom: 3 }}>Last Name</Text>
                        <TextInput
                            placeholderTextColor="#bdbdbd"
                            placeholder="Your last name"
                            style={styles.TextInput}
                        />
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text style={{ fontSize: 16, marginBottom: 3 }}>Email</Text>
                        <TextInput
                            placeholderTextColor="#bdbdbd"
                            placeholder="Your email"
                            style={styles.TextInput}
                        />
                    </View>
                    <View style={{ marginVertical: 5  }}> 
                        <Text style={{ fontSize: 16, marginBottom: 3 }}>Your Message</Text>
                        <TextInput
                            textAlign="left"
                            multiline={true}
                            maxLength={250} //250
                            textAlignVertical="top"
                            placeholderTextColor="#bdbdbd"
                            placeholder="Write your message here"
                            style={[styles.TextInput, { height: 90, }]}
                        />
                    </View>
                     
                    <View style={{ alignSelf: 'center', width: '100%', marginTop: 20 }}>
                        
                        {/*                       
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#1E90FF',
                                paddingTop: 20,
                                paddingBottom: 20,
                                borderRadius: 10,
                            }}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
                        </TouchableOpacity>
                        */}

                        <View style={styles.buttonView}>
                            <View style={styles.button}>
                            <Button color='#c83232' title="OK" onPress={cancelAbout}/>
                            </View>

                            <View 
                            style={styles.button}>
                            
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
        //backgroundColor: colors.light4,
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
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

// AD - constants
import TextStyling from '../constants/fontstyling'
// Added for margins and paddings
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

function AccountTile(props) {
  return (
    <View style={[styles.container, props.style]}>
  
      <TouchableOpacity style={styles.rowContainer}>
        <Text style={TextStyling.textBlackMedium}>{props.rowText}</Text>
        <Icon name="right" style={styles.icon}></Icon>        
      </TouchableOpacity>
     

      {/*

        <View style={styles.rowLineContainer1}>
            <TouchableOpacity style={styles.rowContainer}>
            <Text style={TextStyling.textBlackMedium}>{props.name}</Text>
            <Icon name="right" style={styles.icon}></Icon>        
            </TouchableOpacity>
        </View> 






        <View style={styles.rowLineContainer2}>
            <TouchableOpacity style={styles.rowContainer}>
            <Text style={TextStyling.textBlackMedium}>Login</Text>
            <Icon name="right" style={styles.icon}></Icon>
            </TouchableOpacity>
        </View>

        <View style={styles.rowLineContainer2}>
            <TouchableOpacity style={styles.rowContainer}>
            <Text style={TextStyling.textBlackMedium}>Settings</Text>
            <Icon name="right" style={styles.icon}></Icon>
            </TouchableOpacity>
        </View>

        <View style={styles.rowLineContainer2}>
            <TouchableOpacity style={styles.rowContainer}>
            <Text style={TextStyling.textBlackMedium}>Premium</Text>
            <Icon name="right" style={styles.icon}></Icon>
            </TouchableOpacity>
        </View>

        <View style={styles.rowLineContainer2}>
            <TouchableOpacity style={styles.rowContainer}>
            <Text style={TextStyling.textBlackMedium}>Contact</Text>
            <Icon name="right" style={styles.icon}></Icon>
            </TouchableOpacity>
        </View>

        <View style={styles.rowLineContainer3}>
            <TouchableOpacity style={styles.rowContainer2}>
            <Text style={TextStyling.textWhiteMedium}>Delete Account</Text>
            <Icon name="right" style={styles.icon2}></Icon>
            </TouchableOpacity>
        </View> 
      */}  
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rowContainer: {    
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    backgroundColor: "#E6E6E6",  
    height: 53,   
    
    justifyContent:'space-between', // center
    alignItems:'center',
    flexDirection: 'row',
    paddingLeft: '20%',
    paddingRight: Paddings.large    
  },


  container: {},
  rowContainer2: {    
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    backgroundColor: colors.danger,  
    height: 53,   
    
    justifyContent:'space-between', //center
    alignItems:'center',
    flexDirection: 'row',

    paddingLeft: '20%',
    paddingRight: Paddings.large  
  },


container: {},
    formContainer: {
    width: 339,
    height: 311,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    marginTop: -31,
    marginLeft: -10
  },


  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,  

    justifyContent:'center',
    alignItems:'center'
  },

  icon2: {
    color: colors.white,
    fontSize: 30,  
    justifyContent:'center',
    alignItems:'center'
  },
  
  rowLineContainer1 : {
    marginVertical: Margins.midsize, // AD - added margin vertical (narros is the best)
},

rowLineContainer2 : {
    marginVertical: Margins.narrow, // AD - added margin vertical (narros is the best)
},

rowLineContainer3 : {
    marginVertical: Margins.midsize, // AD - added margin vertical (narros is the best)
},

});

export default AccountTile;

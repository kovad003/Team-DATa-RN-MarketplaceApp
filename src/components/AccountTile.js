import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

// Added for margins and paddings
import { Margins, Paddings } from "../constants/constvalues";

function AccountTile(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.rowContainer}>
        <Icon name="right" style={styles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rowContainer: {
    //width: 339,
    //height: 311,
    //width: '100%',
    //height: '30%',
    //backgroundColor: "#F5FCFF", // #E6E6E6
    //marginLeft: 0,
    //borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,


    backgroundColor: "#E6E6E6",
    //borderRadius: 15,

/*

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



*/










    //marginTop: -31,
    //marginLeft: -10
   
    //flexDirection:'row',
    //alignSelf: 'stretch',
    //textAlign: 'center',
    //marginTop: Margins.narrow, // AD - added margin Top
    //marginBottom: Margins.xlarge, // AD - added margin bottom 

    //height: '20%',
    //backgroundColor: 'blue',
  
    //width: '110%',

    
    height: 53,

    //marginVertical: Margins.midsize, // AD - added margin Top

    //width: 200,

    //flex: 1, 
    //flexDirection: "row",
    //alignItems: "center",

    //height: '20%',
  
    //width: '110%',

    /*
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    flexDirection: 'column',


    */
    
    
  },

  /*

container: {},
  rowContainer: {
    //width: 339,
    //height: 104,
    width: '60%',
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    //borderStyle: "dashed",
    borderRadius: 15
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

  */
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    // height: 44,
    // width: 40,
    // marginTop: 30,
    // marginLeft: 150

    justifyContent:'center',
    alignItems:'center'
  }
});

export default AccountTile;

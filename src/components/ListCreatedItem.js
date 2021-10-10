import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import { Margins, Paddings } from "../constants/constvalues";

import colors from "../constants/colors";
import TextStyling from '../constants/fontstyling';

const ListCreatedItem=(props)=>{
    return(

        <View style={styles.ListOuterContainer}>
        <View activeOpacity={0.8} onLongPress={props.onDelete}>
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
                        <Text style={TextStyling.textBlackSmall}>Price: {props.price}€ </Text>
                        <Text style={TextStyling.textBlackSmall}>Description: {props.description}</Text>
                        <Text style={TextStyling.textBlackSmall}>Posted on: {props.datePosted}</Text>
                    </View>

                    <View style={styles.innerRowContainer3}>
                        <Text style={[TextStyling.textBlackSmall, styles.moreButton]}>MORE INFO</Text>
                        <Text style={[TextStyling.textBlackSmall, styles.updateButton]}>UPDATE</Text>
                        <Text style={[TextStyling.textBlackSmall, styles.deleteButton]}>DELETE</Text>
                    </View>

                </View>

            </View>
        </View>
        </View>
    );
}
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
        paddingHorizontal: 7, //5  
        marginVertical: 5,    
        justifyContent: "center"
    },
    innerRowContainer1: {
        backgroundColor: colors.light4,
        paddingHorizontal: Paddings.xnarrow,
        //paddingVertical: Paddings.xnarrow,
    },
    innerRowContainer2: {
        backgroundColor: colors.light4,
        //paddingHorizontal: 26, //22
        //paddingVertical: Paddings.xnarrow,
        paddingRight: Paddings.xnarrow,
        paddingLeft: Paddings.xnarrow,

        paddingVertical: Paddings.xnarrow,
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
        //fontSize: 17,
        //borderWidth: 1, 
        borderBottomWidth:1,
        borderColor: '#000080', //  '#000080'
        paddingVertical: Paddings.xnarrow,
    },
    moreButton: {
        color: "green",
    },
    updateButton: {
        color: "blue",
    },
    deleteButton: {
        color: "red",
    },
  });

  export default ListCreatedItem;

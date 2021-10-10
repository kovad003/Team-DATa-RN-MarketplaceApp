import React from "react";
import {View, Text, StyleSheet,FlatList, Button, ImageBackground , TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import IconButton from "./IconButton";




const MyItemCardSmall = props => {

return (
    <View style={styles.postedItem}>
    <TouchableOpacity onPress={props.onSelect} >
        <View>
            <View style={{...styles.postedRow, ...styles.postedHeader}}>
                <ImageBackground 
                source={{uri: props.imageUrl}} 
                style={styles.bgImage}
                >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{props.title} - {props.price} euro</Text>
                    </View>
                </ImageBackground>
            </View>

        </View>
    </TouchableOpacity>
    </View>
)
};

const styles = StyleSheet.create({
    postedItem:{
        height:150,
        width:'100%',
        borderWidth:0,
        borderRadius:10,
        overflow: 'hidden',
        marginVertical:10,
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.4)',
        paddingVertical:5,
        paddingHorizontal:20,
    },
    title:{
        fontSize:20,
        color: 'white',

        textAlign:'center',

    },
    postedRow:{
    },
    postedHeader:{
        height:'100%',
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'

    },
    iconsContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    iconButton1:{
        margin:10,  
    },
    iconButton:{
        margin:10,
    }
});



export default MyItemCardSmall;

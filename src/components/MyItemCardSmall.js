import React from "react";
import {View, Text, StyleSheet,FlatList, Button, ImageBackground , TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import IconButton from "./IconButton";



// HH - this component is used for showing the summery of Items ,
// only title and price are showing and OnPress goes to more details
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
        height:165,
        width:'100%',
        borderWidth:0,
        borderRadius:10,
        overflow: 'hidden',
        marginVertical:8,
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.6)',
        paddingVertical:5,
        paddingHorizontal:20,
    },
    title:{
        fontSize:20,
        color: 'white',

        textAlign:'center',

    },
    postedHeader:{
        height:'100%',
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'

    },
});



export default MyItemCardSmall;

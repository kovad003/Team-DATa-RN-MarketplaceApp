import React from "react";
import {View, Text, StyleSheet,FlatList, Button, ImageBackground , TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import IconButton from "./IconButton";




const MyItemCard = props => {

return (
    <View style={styles.postedItem}>
    <TouchableOpacity onPress={props.onSelectPost} >
        <View>
            <View style={{...styles.postedRow, ...styles.postedHeader}}>
                <ImageBackground 
                source={{uri: props.imageUrl}} 
                style={styles.bgImage}
                >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{...styles.postedRow, ...styles.postedDetail}}>
                <Text >Price: {props.price} euro</Text>
                <Text >Condition: {props.condition}</Text>
                <Text >{props.description}</Text>
                <View style={styles.iconsContainer}>
                <IconButton
                    iconName="magnifying-glass"
                    icon="circle-with-cross"
                    style={styles.iconButton}
                ></IconButton>
                <IconButton
                    iconName="magnifying-glass"
                    icon="pencil"
                    style={styles.iconButton1}
                ></IconButton>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    </View>
)
};

const styles = StyleSheet.create({
    postedItem:{
        height:350,
        width:'100%',
        borderWidth:0,
        borderRadius:5,
        overflow: 'hidden',
        backgroundColor: '#C5CBE3',
        padding: 10,
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
        height:'60%',
    },
    postedDetail:{
        height:'40%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',

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







    // container:{
    //     flex:1,
    //     padding: 15,
    //     shadowOpacity: 0.26,
    //     shadowOffset: {width:0 , height:2},
    //     shadowRadius: 10,
    //     elevation:3,
    //     justifyContent: 'flex-end',
    //     alignItems:'flex-end',
    //     borderRadius:5,
    // },
    // title:{
    //     fontFamily: 'open-sans-bold',
    //     fontSize: 22,
    //     textAlign:'right',
    // }



export default MyItemCard;

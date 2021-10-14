// Standard Imports
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Platform, TouchableNativeFeedback, ImageBackground  } from "react-native";

// Custom Import 
import TextStyling from '../constants/fontstyling'



// HH - This Component is used in Category screen to show each category 
// this Component has background image which is saved on internet and url is saved to database
const CategoryButton = props => {
    //onst imageUrl = props.imageUrl;
    // for test
    //console.log(imageUrl);
    return (
        <View style={styles.gridItem} >
        <TouchableOpacity 
            style={{flex:1,}}
            onPress={props.onSelect}
            >
            <View style={{...styles.mealRow, ...styles.mealHeder}}>
                <ImageBackground 
                //source={require("../assets/images/category-Images/main-category-others.jpg")}
                source={{uri : props.imageUrl}}
                resizeMode='cover'
                style={styles.bgImage}
                >
                <View style={styles.titleContainer}>
                    <Text  style={styles.title} >{props.title}</Text>
                </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        marginHorizontal:10,
        marginVertical:12,
        height:180,
        borderWidth:0,
        borderRadius:11,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation:4,

    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.6)',
        paddingVertical:5,
        paddingHorizontal:15,
    },
    mealRow:{
      flexDirection: 'row',
    },
    mealHeder:{
        height:'100%',
    },
    container:{
        flex:1,
        padding: 10,
        shadowOpacity: 0.26,
        shadowOffset: {width:0 , height:1},
        shadowRadius: 5,
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        borderRadius:5,
    },
    title:{
        fontSize: 20,
        textAlign:'right',
        color:'white',
    },
        bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'

    },

})

export default CategoryButton;








// function CategoryButton(props) {
//   return (
//     <View style={[styles.container, props.style]}>
//       <TouchableOpacity style={styles.button}>
//         <View style={styles.textRow}>
//           <Text style={TextStyling.textWhiteLarge}>Category</Text>
//           <View style={styles.imageHolder}></View>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {},
//   button: {
//     width: 309,
//     height: 72,
//     backgroundColor: "rgba(11,129,217,1)",
//     borderRadius: 15,
//     flexDirection: "row",
//     alignSelf: "center"
//   },
//   text: {
//     //fontFamily: "roboto-700",
//     //color: "rgba(255,255,255,1)",
//     //fontSize: 26,
//     //marginTop: 11
//   },
//   imageHolder: {
//     width: 99,
//     height: 57,
//     borderRadius: 30,
//     backgroundColor: "rgba(230, 230, 230,1)",
//     marginLeft: 59
//   },
//   textRow: {
//     height: 57,
//     flexDirection: "row",
//     flex: 1,
//     marginRight: 15,
//     marginLeft: 24,
//     marginTop: 7
//   }
// });

// export default CategoryButton;

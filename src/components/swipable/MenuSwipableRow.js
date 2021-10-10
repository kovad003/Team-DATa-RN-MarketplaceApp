import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MenuSwipableRow(props) 
  {

    // value={props.value ? true : false}
    //     thumbColor={props.value ? '#2d3553' : '#706f6e'}
    //     trackColor={{true: '#8b91ad', false: '#aaa498'}}
    return (
        <Swipeable
          renderRightActions={props.renderRightActions}
          renderLeftActions={props.renderLeftActions}
        >
            <TouchableHighlight underlayColor="blue" onPress={props.onPress} boolean={props.boolean}>
                {/* <View style={[styles.container, {true: {backgroundColor: "green"}}]}
                  boolean={props.boolean ? true : false} 
                > */}
                <View style={[styles.container]}
                  boolean={props.boolean ? true : false}
                  //backgroundColor={{props.boolean} === true ? "green ": 'yellow'} 
                >             
                  <Icon
                      name={props.iconMain || "tag-multiple"} style={[styles.iconMain, {color: props.iconColor || "#808080"}]}
                  />
                  {/*                   
                  <Image style={styles.image} source={{uri: "https://pluspng.com/img-png/coin-hd-png-dollar-coin-png-transparent-image-1150.png"}}
                  /> */}               
                  <View style={styles.detailsContainer}>
                      <Text style={styles.title}> {props.label || "label"} </Text>
                      <Text style={styles.subTitle}> {props.value || "value"} </Text>
                  </View>                  
                  <Icon
                      name={props.iconSwipe || "code-tags"} style={[styles.icon, {color: props.iconColor || "#808080"}]}
                  />

                  {/* <Icon
                    name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
                    style={styles.checkIcon}
                  /> */}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    margin: 2,
    backgroundColor: "white",
  },
  checkIcon: {
    color: "rgba(0,0,0,1)",
    fontSize: 28,
    lineHeight: 28,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    backgroundColor: "grey",
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  iconMain: {
    color: "#808080",
    fontSize: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  icon: {
    color: "#808080",
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center'
  },
  subTitle: {
    color: "black",
  },
  title: {
    fontWeight: "500",
  },
});

export default MenuSwipableRow;
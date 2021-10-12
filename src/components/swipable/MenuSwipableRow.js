import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MenuSwipableRow(props) 
  {
    return (
        <Swipeable enabled={props.enabled}
          renderRightActions={props.renderRightActions}
          renderLeftActions={props.renderLeftActions}
        >
            <TouchableHighlight underlayColor='white'
              onPress={props.onPress} >
                <View style={[styles.container, {backgroundColor: props.backgroundColor ||  "white"}]} >             
                  <Icon
                      name={props.iconMain || "tag-multiple"} style={[styles.iconMain, {color: props.iconColor || "#808080"}]}
                  />             
                  <View style={styles.detailsContainer}>
                      <Text style={styles.title}> {props.label || "label"} </Text>
                      <Text style={styles.subTitle}> {props.value || "value"} </Text>
                  </View>                  
                  <Icon
                      name={props.iconSwipe || "code-tags"} style={[styles.icon, {color: props.iconColor || "#808080"}]}
                  />
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
    alignItems:'center',
    marginRight: 5,
  },
  icon: {
    color: "#808080",
    fontSize: 30,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
  },
  subTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default MenuSwipableRow;
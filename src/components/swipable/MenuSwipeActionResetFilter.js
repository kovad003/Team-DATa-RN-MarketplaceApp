import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../constants/colors";

function BroomPressed(){
  console.log("Swipe BTN pressed: broom");
}
function FilterPressed(){
  console.log("Swipe BTN pressed: filter");
}

function MenuSwipeActionFilter(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <Icon
          name="broom"
          size={35}
          color="white"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuSwipeActionFilter;
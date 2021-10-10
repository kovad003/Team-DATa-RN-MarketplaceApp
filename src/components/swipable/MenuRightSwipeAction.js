import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../constants/colors";

function MenuRightSwipeAction(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <Icon
          name="filter"
          size={35}
          color="white"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuRightSwipeAction;
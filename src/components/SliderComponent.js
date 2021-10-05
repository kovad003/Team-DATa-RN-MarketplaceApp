//Standard Import
import Slider from "@react-native-community/slider";
import React from "react";
import { StyleSheet } from "react-native";

function SliderComponent(props) {
  return (
    <Slider 
      value={0}
      thumbTintColor='#2d3553'
      minimumTrackTintColor='#8b91ad'
      maximumTrackTintColor='#cdad9c' 
      style={styles.slider}></Slider>
  );
}

const styles = StyleSheet.create({
  slider: {
    flexDirection: 'row',
    flex:1, 
  }
});

export default SliderComponent;

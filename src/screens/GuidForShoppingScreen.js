import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity, ScrollView } from "react-native";

import AppButton from "../components/AppButton";

// Styling iports
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";

// in this Component we can see all details of the selected Item
function GuidForShoppingScreen(props) {


  return (
    <View style={styles.container}>
      <ScrollView>
          <View >
            <View style={styles.headerContainer}>
              <Text style={styles.textHeader}>Guid for Shopping Safe</Text>
            </View>
            <Text style={styles.textContent}>Look for specific things: most of the times when I see an item I want to buy, I search on all those online platforms for exactly that. An item of clothing in a specific colour or size, or even material; the exact model of the chair, aside from just mentioning the type of item or brand. You’d be surprised how much this helps your search results.</Text>
            <Text style={styles.textContent}>Search your radius: sometimes I forgot to set my search radius accordingly and was then disappointed when my glorious find ended up being in Oulu or something. Be realistic with where you search, depending on your options you might be able to pick your things up with public transport, or you might have have to get a car.</Text>
            <Text style={styles.textContent}>Area-specific groups: especially on Facebook, the generic Marketplace has not been the most successful for me. There you run the chance of coming across scammers, but it’s also over-crowded there. My tip: join the neighbourhood-specific Facebook groups. Also for you, if you, for example, live in Eira, join the Eira recycling group and you’ll only find things that are sold in your area. Greatly helpful, especially if you’re looking for or selling furniture! Also, there tend to be more serious offers and buyers in those smaller groups. Most of them are okay with English communication, although the posts tend to be in Finnish.</Text>
            <Text style={styles.textContent}>Search with typos: this is just a bit sneaky and can work sometimes – if you’re lucky (as the buyer, at least), but when sellers put typos in their item headline, you can sometimes find some lost treasures in the grammar trenches. Worth a try. </Text>     
            <Text style={styles.textContent}>Make a purchase request: on Tori.fi for example, you can make an announcement with the intent of purchase. Instead of just selling something, you can this way put it out there that you’re buying something in particular (“Ostetaan”), and whoever has that for sale can contact you directly, without bothering to put it up for sale, to begin with. Has been greatly helpful!</Text>
            <Text style={styles.textContent}>Be fast: not exactly a magical piece of advice, but if you are looking for something specific, you need to be fast, refreshing that page a lot and don’t hesitate with messaging that person asap. Things sell quickly around here.</Text>         
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    fontSize:24,
    backgroundColor:colors.light3,
  },
  headerContainer:{
    width:'95%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  textHeader:{
    fontSize:24,
    marginVertical:10,
    padding: 10,
  },
  textContent:{
    padding: 10,
    fontSize:18,
    marginBottom:5,

  },
});

export default GuidForShoppingScreen;

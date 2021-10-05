import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";



import HeaderComponent from "../components/HeaderComponent";
import CategoryButton from "../components/CategoryButton";
import { CATEGORIES } from "../data/dummy-data";


function CategoryScreen(props) {

  const renderCategoryItem = itemData => {
    return( 
      <CategoryButton 
      title={itemData.item.title}
      onSelect={()=>{console.log('click')}}
      color= {itemData.item.color}
      image={itemData.item.url}
      />
      );
  };


  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <View style={styles.categoryItems}>
          <FlatList 
          keyExtractor={(item, index) => item.id}
          data={CATEGORIES} 
          renderItem={renderCategoryItem} 
          numColumns={2}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    justifyContent:'center',

  },
  scrollArea: {
    flex:1,
    height:'90%',
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  logoContainer:{
    marginTop:30,
    
  },
  categoryItems:{
    flex:5,
    width:'100%',

  },
  headerContainer:{
    height: 60,
    justifyContent:'center',
    alignItems:'center'

  },
  header: {
    height: 60,
    width: '100%',
  },



  categoryButton: {

    marginTop: 18,
    marginLeft: 11
  }
});

export default CategoryScreen;


import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";



import HeaderComponent from "../components/HeaderComponent";
import Logo from "../components/Logo";
import CategoryButton from "../components/CategoryButton";
import { CATEGORIES } from "../data/dummy-data";

function MainScreen(props) {

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
      <HeaderComponent style={styles.header}></HeaderComponent>
      <View style={styles.scrollable}>
        <View style={styles.scrollArea}>
          <View>
            <Logo style={styles.logo}></Logo>
          </View>
          <View>
            <FlatList 
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} 
            renderItem={renderCategoryItem} 
            numColumns={2}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 39,
    width: 339,
    marginTop: 35,
    marginLeft: 10
  },
  scrollable: {
    width: 332,
    height: 539,
    margin:10,    
  },
  scrollArea: {
    width: 332,
    height: 539
  },
  logo: {
    height: 110,
    width: 172,
    marginTop: 5,
    marginLeft: 80
  },
  categoryButton: {

    marginTop: 18,
    marginLeft: 11
  }
});

export default MainScreen;

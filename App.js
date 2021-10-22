// Standard Imports
import React, { useState } from "react";
import { Text, View } from "react-native";

// Component Imports
import HeaderComponent from "./src/components/HeaderComponent";

// Screen Imports
import LoginScreen from "./src/screens/LoginScreen";
import SearchScreen from "./src/screens/SearchScreen";
import CreateItemScreen from "./src/screens/CreateItemScreen";
import ListItemsScreen from "./src/screens/ListItemsScreen";
import MyItemScreen from "./src/screens/MyItemScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import SearchResultScreen from "./src/screens/SearchResultScreen";
import ItemDetailScreen from './src/screens/ItemDetailScreen'
import CategoryScreen from './src/screens/CategoryScreen'
import AccountScreen from "./src/screens/AccountScreen";
import BottomTabsNavigation from './src/navigation/BottomTabsNavigation'
import CategoryStackNavigation from './src/navigation/CategoryStackNavigation'
import CustomerProfileScreen from './src/screens/CustomerProfileScreen'
import SearchStackNavigation from './src/navigation/SearchStackNavigation'

// Font Imports
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

// LOGIN Imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sortedLastIndex } from "lodash";

// GETTING CUSTOM FONTS -----------------------------------------------------------
const getFonts = (props) => Font.loadAsync({
  'cheveuxdange': require('./src/assets/fonts/cheveuxdange.ttf'),
  'caballar': require('./src/assets/fonts/caballar.ttf'),
  'cake-n-truffles': require('./src/assets/fonts/cake-n-truffles.ttf'),
});
// END OF GETTING CUSTOM FONTS ----------------------------------------------------

// ****************************************************************************************
// MAIN FUNCTION **************************************************************************
function App(props) {
// STATE VARIABLES ------------------------------------------------------------------
  const [fontloaded, setFontsLoaded] = useState(false);
  const [SESSIONID, setSESSIONID] = useState();
// END OF STATE VARIABLES -----------------------------------------------------------

// SETTING SESSION ID ---------------------------------------------------------------
  //AsyncStorage.setItem("StoredSessionId", "0");
// END OF SETTING SESSION ID --------------------------------------------------------

// CHECKING SESSION ID ---------------------------------------------------------------
  AsyncStorage.getItem("StoredSessionId").then((value) => {
    console.log("***Checking AsyncStorage at App.js***");
    if (value == undefined) {
      AsyncStorage.setItem("StoredSessionId", "0");
      console.log("StoredSessionId is undefined: " + "value: " + value);
    } else {
      console.log("StoredSessionId is defined: " + "value: " + value);
    }
  });
// END OF CHECKING SESSION ID --------------------------------------------------------
  
// LOADING CUSTOM FONTS -------------------------------------------------------------
  if(fontloaded){
    return (      
      // <CategoryScreen />
      // <RegistrationScreen />
      // <LoginScreen />
      // <SearchScreen />
      // <SearchResultScreen />
      // <CreateItemScreen />
      // <ListItemsScreen id='c3'/>
      // <MyItemScreen />
      // <AccountScreen /> 
       <BottomTabsNavigation /> 
      // <ItemDetailScreen />
      // <CategoryStackNavigation />
      // <CustomerProfileScreen />
    );
  } else {
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
      onError={() => console.log('error')}/>
    )
  }
}

// Export
export default App;

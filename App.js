// Standard Imports
import React, { useState } from "react";
import { Text, View } from "react-native";

// Component Imports
import HeaderComponent from "./src/components/HeaderComponent";

// Screen Imports
import MainScreen from "./src/screens/MainScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SearchScreen from "./src/screens/SearchScreen";
import CreateItemScreen from "./src/screens/CreateItemScreen";
import ListItemsScreen from "./src/screens/ListItemsScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import SearchResultScreen from "./src/screens/SearchResultScreen";
import AccountScreen from "./src/screens/AccountScreen";

// Font Imports
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

// Custom Fonts
const getFonts = (props) => Font.loadAsync({
  'cheveuxdange': require('./src/assets/fonts/cheveuxdange.ttf'),
  'caballar': require('./src/assets/fonts/caballar.ttf'),
  'cake-n-truffles': require('./src/assets/fonts/cake-n-truffles.ttf'),
});

// Main Function
function App(props) {
  const [fontloaded, setFontsLoaded] = useState(false);

  if(fontloaded){
    return (
      // <MainScreen />
      // <RegistrationScreen />
      // <LoginScreen />
      // <SearchScreen />
      // <SearchResultScreen />
       <CreateItemScreen />
      // <ListItemsScreen />
      // <AccountScreen />
        
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

// Standard Imports
import React, { useState } from "react";
import { Text, View } from "react-native";

// Custom Imports
import HeaderComponent from "./src/components/HeaderComponent";
import MainScreen from "./src/screens/MainScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SearchScreen from "./src/screens/SearchScreen";
import CreateItemScreen from "./src/screens/CreateItemScreen";
import ListItemsScreen from "./src/screens/ListItemsScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import SearchResultScreen from "./src/screens/SearchResultScreen";


function App() {
    return (
      //<MainScreen></MainScreen>
      //<LoginScreen></LoginScreen>
      //<SearchScreen></SearchScreen>
      <CreateItemScreen></CreateItemScreen>
      //<ListItemsScreen></ListItemsScreen>
      //<RegistrationScreen></RegistrationScreen>
      //<SearchResultScreen></SearchResultScreen>
    );
}

export default App;

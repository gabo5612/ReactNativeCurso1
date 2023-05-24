import React from "react";
import { StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import tw from "twrnc";
import Navigation from "../navigation/Navigation";
import NavigationDrawer from '../navigation/NavigationDrawer'
const Main = () => {
  return (
    <NavigationContainer>
      <NavigationDrawer/>

    </NavigationContainer>
  );
};

export default Main;

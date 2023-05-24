import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from '../screens/HomeScreen';
import Setting from '../screens/Setting';

const Stack=createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
         <Stack.Screen name='Home'component={HomeScreen}/>
          <Stack.Screen name='Setting' component={Setting}/>
       
      
    </Stack.Navigator>
  )
}
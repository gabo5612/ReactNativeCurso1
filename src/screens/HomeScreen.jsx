import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
    const goToPage=()=>{
        navigation.navigate('Setting')
    }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToPage} title='ir a Ajustes'/>
    </View>
  )
}
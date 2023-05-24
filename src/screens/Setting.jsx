import { View, Text, Button, style} from 'react-native'
import React from 'react'


export default function Setting({navigation}) {
    const goToHome=(pageName)=>{
        navigation.navigate(pageName)
    }
  return (
    <View>
      <Text>Setting</Text>
        <Button onPress={()=>goToHome("Home")} title='Ir a Home'/>
    </View>
  )
}
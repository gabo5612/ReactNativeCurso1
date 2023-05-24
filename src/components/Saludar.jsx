import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"

export default function Saludar({name}) {
  return (
    <View>
        {name?<Text>Hola {name}</Text>:<Text>Pajuo</Text>}
      
    </View>
  )
}

Saludar.propTypes={
    name: PropTypes.string.isRequired,
}
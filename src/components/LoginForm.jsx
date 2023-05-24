import {Button, TextInput } from 'react-native'



export default function LoginForm() {
  return (  
    <>
     <TextInput placeholder='Email'/>
     <TextInput placeholder='Contraseña'/>
     <Button title='Enviar' onPress={()=>console.log('boton')}>Enviar</Button>
  </>)
}


import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/context/AutenticationContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela1 from './src/screen/Tela1';
import Tela2 from './src/screen/Tela2';
import Tela3 from './src/screen/Tela3';
import Tela4 from './src/screen/Tela4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Tela1} />
          <Stack.Screen name='PrimeiraParte' component={Tela2} />
          <Stack.Screen name='SegundaParte' component={Tela3} />
          <Stack.Screen name='Resultado' component={Tela4} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}
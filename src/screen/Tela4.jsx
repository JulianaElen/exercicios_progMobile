import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Tela4() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Seu resultado:</Text>
      <Button 
      title='Retornar' 
      onPress={() => navigation.navigate("Home")} 
      />
    </View>
  )
}
import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Tela1() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Selecione iniciar para responser a pesquisa.</Text>
      <Button 
      title='Iniciar' 
      onPress={() => navigation.navigate("PrimeiraParte")} 
      />
    </View>
  )
}
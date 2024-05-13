import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Tela3() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Responda as questões abaixo:</Text>
      <Text>6) Você e sua família consomem produtos orgânicos?</Text>
      <Text> 7) Você e sua família fazem a separação dos materiais recicláveis?</Text>

      <Text>8) Quando fazem compras, você e sua família dão preferência a 
materiais com embalagens recicláveis?</Text>
      <Text> 9) Quando você não está usando aparelhos eletrônicos você os 
desliga?</Text>
      <Text> 10) Você costuma utilizar o verso das folhas de papéis já utilizadas?</Text>

      <Button
      title='Finalizar' 
      onPress={() => navigation.navigate("Resultado")} 
      />
    </View>
  )
}
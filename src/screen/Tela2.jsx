import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { CheckBox, Icon } from '@rneui/themed';



export default function Tela2() {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    
    return (
        <View>

            <Text>Responda as questões abaixo:</Text>
            <Text> 1) Na casa em que você vive com sua família, nos cômodos em que a
                luzes ficam acesas por mais de 4 horas, as lâmpadas são econômicas
                (led)?</Text>
        <CheckBox
        checked={checked}
        onPress={toggleCheckbox}
        iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
        />
            <Text> 2) Quando você toma banho, você demora mais do que 10 minutos?</Text>
            <Text> 3) Você deixa a torneira aberta ao escovar os dentes?</Text>

            <Text>4) Na casa ou prédio em que você vive com sua família, a calçada é
                limpa com vassoura ao invés de água?</Text>
            <Text>5) Você e sua família dão preferência às frutas e verduras da estação? </Text>

            <Button
                title='Proximo'
                onPress={() => navigation.navigate("SegundaParte")}
            />

        </View>
    )
}

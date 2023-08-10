import React, {useState} from "react";
import {View, Text, Button, TextInput} from 'react-native'
import styles from './styles.js'

export default function Login({navigation}){
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    var n1 = Number(num1)
    var n2 = Number(num2)
    var conta = n1 + n2

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Login</Text>
          
            <TextInput
                style = {styles.input}
                onChangeText={setNum1}
                value = {num1}
                placeholder="Digite um número"
            />
            <TextInput
                style = {styles.input}
                onChangeText={setNum2}
                value = {num2}
                placeholder="Digite outro número"
            />

            <Button
                title='Home'
                onPress={()=>
                    navigation.navigate('Home')}
            />

        </View>
    );
}

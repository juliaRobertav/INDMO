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
                placeholder="Digite um número"
                style = {styles.input}
                onChangeText={setNum1}
                value = {num1}
            />
            <TextInput
                placeholder="Digite outro número"
                style = {styles.input}
                onChangeText={setNum2}
                value = {num2}
            /> 

            <Button
                title='Home'
                onPress={()=>
                navigation.navigate('Home', {conta})}
            />

        </View>
    );
}

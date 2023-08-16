import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Login({navigation}){

    const [valor1, setValor1]= useState()
    const [valor2, setValor2]= useState()
    var v1 = Number(valor1)
    var v2 = Number(valor2)
    var tt = v1 + v2

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.caixas}>
                <TextInput
                    placeholder='Digite o valor 1'
                    onChangeText={setValor1}
                    value={valor1}
                    style={styles.caixa}
                    />
                <TextInput
                    placeholder='Digite o valor 2'
                    onChangeText={setValor2}
                    value={valor2}
                    style={styles.caixa}
                />

                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={()=>navigation.navigate('Tela1', {total:tt})}
                >
                    <Text style={{fontSize:25}}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Tela2({navigation, route}){

    const {dobro} = route.params


    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Tela 2</Text>
            </View>
            <View>
                <Text>
                    {dobro}
                </Text>
            </View>
           <View style={styles.btn}>
                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={() => navigation.navigate('Tela2')}
                >
                    <Text style={{ fontSize: 25 }}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

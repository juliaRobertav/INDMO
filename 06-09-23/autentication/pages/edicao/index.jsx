import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import styles from './styles'
import { Shadow } from 'react-native-shadow-2'

export default function Edicao({ navigation, route }) {

    const { foto, nome } = route.params

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/image-' + foto + '.png')} style={styles.imagem} />

            </View>
            <View>
                <Text>{nome}</Text>
            </View>
        </View>
    )
}

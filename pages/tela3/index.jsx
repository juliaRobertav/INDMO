import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import styles from './styles'
import { Shadow } from 'react-native-shadow-2'

export default function Tela3({navigation, route}) {

    const {usuario} = route.params

    const lista = [
        {
            name: 'Carlitos',
            year: 19,
            photo: 1
        },
        {
            name: 'Laura',
            year: 17,
            photo: 2
        },
        {
            name: 'Angelo',
            year: 17,
            photo: 3
        },
        {
            name: 'Bruna',
            year: 22,
            photo: 4
        },
        {
            name: 'Gustavo',
            year: 23,
            photo: 5
        },
        {
            name: 'Vampeta',
            year: 30,
            photo: 6
        }
    ]

    return (
        <View style={styles.container}>
        <View>
            <FlatList
                numColumns={2}
                data={lista}
                renderItem={({ item }) => {
                    return (
                        <Shadow>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Tela4', { imagem: item });
                                }}
                            >
                                <View style={styles.foto}>
                                    <Image source={require('../../assets/image-' + item.photo + '.png')} style={styles.imagem} />
                                    <Text>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </Shadow>
                    );
                }}
            />
        </View>
        <View>
            <Text>{usuario}</Text>
        </View>
    </View>
    );
}

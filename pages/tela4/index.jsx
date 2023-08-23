import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Tela4({ route }) {
    const { imagem } = route.params;

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/image-' + imagem.photo + '.png')} style={styles.imagem} />
            <Text>{imagem.name}</Text>
        </View>
    );
}

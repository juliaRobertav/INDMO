import React, {useState} from "react";
import {View, Text, Button, FlatList, Image} from 'react-native'
import styles from './styles.js'
import { Shadow } from "react-native-shadow-2";

export default function Tela4({navigation}){
   const lista = [
    {
        name: 'Julia',
        year: 18,
        photo: 1
    },
    {
        name: 'Leonardo',
        year: 20,
        photo: 2
    },
    {
        name: 'Allana',
        year: 19,
        photo: 3
    },
    {
        name: 'Radaeli',
        year: 18,
        photo: 4
    },
    {
        name: 'Eduarda',
        year: 18,
        photo: 5
    },
    {
        name: 'Andrew',
        year: 18,
        photo: 6
    },
   ]

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Tela 4</Text>

            <FlatList //formata da lista de acordo com a quantidade itens
                numColumns={2}
                data={lista} //dados
                renderItem={({item})=> { //renderizar os itens, cada nome da lista é um item
                    return(
                        <Shadow>
                        <View style={styles.foto}>
                            <Image source={require('../../assets/image-'+item.photo+'.png')} style={styles.imagem}/>
                            {item.name}
                        </View>
                        </Shadow>
                    )
                }} 
            />
          
            <Button
                title='Next Page'
                onPress={()=>navigation.navigate('Tela4')}
            />

        </View>
    );
}

import React, {useState} from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function Home(route){
    // const [nome, email, cep, logradouro, localidade, bairro, uf] = route.params
    const [uid, setUid] = useState('')
    const [email, setEmail] = useState('')
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user){
            const uid = user.uid;
            const mail = user.email
            setUid(uid)
            setEmail(mail)
        } else {
            setUid('No User...')
        }
    })

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            {/* <Text style={styles.title}>{uid}</Text> */}
            <Text style={styles.title}>{email}</Text>
            {/* <Text style={styles.title}>{nome}</Text>
            <Text style={styles.title}>{email}</Text>
            <Text style={styles.title}>{cep}</Text>
            <Text style={styles.title}>{logradouro}</Text>
            <Text style={styles.title}>{localidade}</Text>
            <Text style={styles.title}>{bairro}</Text>
            <Text style={styles.title}>{uf}</Text> */}
        </View>
    )
}
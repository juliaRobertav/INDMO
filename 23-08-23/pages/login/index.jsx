import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseConfig'

export default function Login({ navigation }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const auth = getAuth(app);


    const logar = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Jacaré...')
            })
            .catch((error) => {
                console.log('Largatixa...')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.caixas}>
                <TextInput
                    placeholder='email'
                    onChangeText={setEmail}
                    value={email}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='password'
                    onChangeText={setPassword}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={logar}
                >
                    <Text style={{ fontSize: 25 }}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
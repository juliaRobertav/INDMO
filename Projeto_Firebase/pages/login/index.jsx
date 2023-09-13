import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseConfig';
import { Shadow } from 'react-native-shadow-2';

export default function Login({navigation}){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const auth = getAuth();

    const Logar = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            navigation.navigate('Tela3', {usuario: user.email})
        })
        .catch((error) => {
            console.log('Não deu certo')
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.caixas}>
                <TextInput
                    placeholder='Email:'
                    onChangeText={setEmail}
                    value={email}
                    style={styles.caixa}
                    />
                <TextInput
                    placeholder='Password:'
                    onChangeText={setPassword}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={Logar}
                >
                    <Text style={{fontSize:25}}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={()=>navigation.navigate('Register')}
                >
                    <Text style={{fontSize:25}}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
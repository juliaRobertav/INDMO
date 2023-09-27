import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../firebaseConfig'
import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [uf, setUf] = useState('')
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    
    const logar = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home')
                adicionar()
            })
            .catch((error) => {
                
                console.log('Largatixa...')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const pesquisar = ()=>{
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
            .then((res)=>{
                setLogradouro(res.data.logradouro)
                setLocalidade(res.data.localidade)
                setBairro(res.data.bairro)
                setUf(res.data.uf)
            })
    }

    async function adicionar(){
        await addDoc(collection(db, 'users'),{
            nome: nome,
            email: email,
            cep: cep,
            logradouro: logradouro,
            localidade: localidade,
            bairro: bairro,
            uf: uf
        })

    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Cadastrar</Text>
            </View>
                <TextInput
                    placeholder='nome'
                    onChangeText={(e)=>setNome(e)}
                    value={nome}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='cep'
                    onChangeText={(e)=>setCep(e)}
                    value={cep}
                    style={styles.caixa}
                />
                <TouchableOpacity style={styles.btnOk}
                    onPress={pesquisar}
                >
                    <Text style={{ fontSize: 15 }}>Buscar</Text>
                </TouchableOpacity>

                <Text style={styles.caixaX}>{logradouro}</Text>
                <Text style={styles.caixaX}>{bairro}</Text>
                <Text style={styles.caixaX}>{localidade}</Text>
                <Text style={styles.caixaX}>{uf}</Text>


                <TextInput
                    placeholder='email'
                    onChangeText={(e)=>setEmail(e)}
                    value={email}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='password'
                    onChangeText={(e)=>setPassword(e)}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.btnOk}
                    onPress={logar}
                >
                    <Text style={{ fontSize: 15 }}>OK</Text>
                </TouchableOpacity>
        </View>
    )
}
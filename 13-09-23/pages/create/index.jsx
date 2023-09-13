import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { storage, db } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

export default function Create() {
    const [texto, setTexto] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [preview, setPreview] = useState('')

    // ################## Imagem #####################

    useEffect(() => {
        if (!image) {
            setImage(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(image)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    const upload = (e) => {
        e.preventDefault()

        const file = image

        if (!file) { console.log('Faltou imagem...') }
        if (!nome) { console.log('Faltou nome...') }
        if (!email) { console.log('Faltou email...') }

        if (image == null) return

        const storageRef = ref(
            storage,
            `images/${nome.replace(/ +/, '')+ '_'+ image.name}`
        )

        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', snapshot=>{})
        console.log('Nome: ', nome);
        console.log('email',email);
        console.log('Foto',`images/${nome.replace(/ +/, '')+ '_'+ image.name}`);
    
        adicionar()

    }

  
    async function adicionar(){

        await addDoc(collection(db, 'pessoas'),{
            name: nome,
            email: email,
            status: false,
            photo: nome.replace(/ +/, '')+ '_'+ image.name,
        })
        setEmail('')
        setNome('')
        setTexto('Cadastrado com sucesso!!')
        setPreview(undefined)
    }



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Create</Text>
            </View>

            <View style={styles.foto}>
                <img src={preview} style={styles.foto1} />
                <input 
                    type='file'
                    onChange={(e)=>{
                        setImage(e.target.files[0])
                    }}
                
                />
            </View>

            <View style={styles.caixas}>
                <TextInput
                    placeholder='Nome'
                    value={nome}
                    onChangeText={(e) => setNome(e)}
                />
            </View>

            <View style={styles.caixas}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                />
            </View>

            <TouchableOpacity
                style={styles.botao}
                onPress={upload}
            >
                <Text style={{ fontSize: 20 }}>Ok</Text>
            </TouchableOpacity>
        </View>
    )
}
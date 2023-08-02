import React, {useState} from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function App(){
  const [nome, setNome] = useState()
  const [idade, setIdade] = useState()


  return(
    <View style={styles.container}>
      <View style={styles.tela1}>
        <TextInput
          style = {styles.input}
          onChangeText={setNome}
          value = {nome}
          placeholder="Digite o nome"
        />

        <TextInput
          style={styles.input}
          onChangeText={setIdade}
          value={idade}
          placeholder="Digite a idade"
          keyboardType="numeric"
        />

        <Button
         title = 'OK'
         color= '#d62598'
         onPress = {()=>{ console.log(`O nome é ${nome} e a idade é ${idade}`)}}
        />

      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btns:{
    backgroundColor:'#888',
    alignItems: 'center',
    justifyContent: 'center'
  },

  txt:{
    fontSize: 40,
    color: '#333'
  },

  tela1:{
    flex:1,
    backgroundColor: '#eedae5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },

  tela2: {
    flex: 1,
    backgroundColor: '#413128',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

})

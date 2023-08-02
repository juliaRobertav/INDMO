import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = useState(0)
  const [nome, setNome] = useState('None')
  console.log(nome)

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Contador</Text>

      <View style={styles.btn}>
        <TouchableOpacity
          style = {styles.btn}
          onPress={()=>{setValor(valor + 1)}}
        >
          <Text style={{fontSize:30}}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btn2}>
        <TouchableOpacity
          style = {styles.btn2}
          onPress={()=>{setValor(valor - 1)}}
        >
           <Text style={{fontSize:30}}>-</Text>
        </TouchableOpacity>
      </View>

      <Text style ={{color:'#fff', fontSize:30}}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',

  },

  btn:{
    backgroundColor: '#ffcbdb',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    borderRadius: 10
  },

  btn2:{
    backgroundColor: '#FFA500',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  txt:{
    color:'#fff', 
    fontSize:30
  }

});

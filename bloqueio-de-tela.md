# Bloqueio de tela

```
javascript (cruvro)
```

```javascript
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import styles from './styles'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'
import background from '../../assets/LoginPage.jpg'
```

1. Esta seção de código está importando os módulos e componentes necessários para o aplicativo React Native, incluindo React, gerenciamento de estado (useState), elementos de exibição, entrada de texto, opacidade tátil e um componente de fundo de imagem. Ele também importa estilos de um arquivo separado e funções relacionadas à autenticação do Firebase e da configuração do Firebase de arquivos separados.

```
javascript (cruvro)
```

```javascript
export default function Login({ navigation }) {
```

2. Isto declara um componente funcional chamado `Login`que aceita a `navigation`- Aquilo. prop. Este componente representa a tela de login do aplicativo.

```
javascript (cruvro)
```

```javascript
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loginAttempts, setLoginAttempts] = useState(0); 
  const [isScreenLocked, setIsScreenLocked] = useState(false);
```

3. Essas linhas usam o React's `useState`gancho para declarar e inicializar variáveis de estado para `email`,, , - A , de frente para o que sobre o que sobre, , sobre o que sobre o que sobre, sobre o que sobre o que sobre, sobre o que sobre o que sobre, sobre o que sobre o que sobre o que `password`,, , - A , de frente para o que sobre o que sobre, , sobre o que sobre o que sobre, sobre o que sobre o que sobre, sobre o que sobre o que sobre, sobre o que sobre o que sobre o que `loginAttempts`, e `isScreenLocked`- A . (í a , , , , , í , . Essas variáveis serão usadas para gerenciar a entrada do usuário, rastrear tentativas de login e determinar se a tela deve ser bloqueada.

```
javascript (cruvro)
```

```javascript
  const logar = () => {
    // ...
  }
```

4. Isso define uma função nomeada `logar`Isso é chamado quando o botão "SignIn" é pressionado. Ele tenta entrar no usuário usando a autenticação do Firebase. Se houver muitas tentativas de login (2 ou mais), ele bloqueia a tela.

```
javascript (cruvro)
```

```javascript
  function cadastrar(){
    navigation.navigate('SignUp')
  }
```

5. Isso define uma função nomeada `cadastrar`Isso é chamado quando o botão "SignUp" é pressionado. Ele navega pelo usuário para a tela de inscrição.

```
javascript (cruvro)
```

```javascript
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={background}
      >
      // ...
    </View>
  );
```

6. Esta é a principal função de renderização para o `Login`Componente. Ele retorna um componente de visualização com uma imagem de fundo. O conteúdo dentro da vista depende se o `isScreenLocked`O estado é `true`ou a `false`- A . (í a questão: es. , , , ínte

O conteúdo dentro do modo de exibição exibe condicionalmente uma mensagem dizendo que a tela está bloqueada ou o formulário de login com campos de entrada de e-mail e senha e botões "SignIn" e "SignIn".

Espero que esta explicação ajude você a entender o que cada linha de código faz neste componente Nativo React. Se você tiver perguntas específicas sobre qualquer parte do código, sinta-se à vontade para pedir mais detalhes.

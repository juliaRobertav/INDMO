# Comandos

Claro, vou criar um guia README com os principais comandos para o desenvolvimento de aplicativos React Native usando o Expo e um emulador. Lembre-se de que as versões e comandos podem mudar com o tempo, então verifique a documentação mais recente para obter informações atualizadas.

## Guia de Comandos para Desenvolvimento React Native com Expo e Emulador

Este guia fornecerá uma visão geral dos comandos mais comuns usados no desenvolvimento de aplicativos React Native com o Expo e um emulador. Certifique-se de ter o Node.js, npm (ou Yarn) instalados antes de começar.

### Configuração Inicial

#### 1. Instale o Expo-CLI (se ainda não o fez)

```bash
npm install -g expo-cli
```

#### 2. Crie um novo projeto Expo

```bash
expo init NomeDoSeuProjeto
```

#### 3. Navegue para o diretório do projeto

```bash
cd NomeDoSeuProjeto
```

### Desenvolvimento

#### 4. Inicie o servidor de desenvolvimento

```bash
expo start
```

Isso abrirá uma página da web com um código QR. Você pode escanear o código QR com o aplicativo Expo Go no seu dispositivo ou pressionar "i" para abrir o aplicativo no iOS Simulator ou "a" para abrir o aplicativo no Android Emulator.

#### 5. Executar em Emulador iOS (se você estiver no macOS)

```bash
expo start --ios
```

#### 6. Executar em Emulador Android

```bash
expo start --android
```

#### 7. Adicione dependências (exemplo)

```bash
expo install nome-da-dependencia
```

### Publicação

#### 8. Crie uma versão de produção do seu aplicativo

```bash
expo build:android
```

ou

```bash
expo build:ios
```

#### 9. Faça o upload do seu aplicativo para a App Store ou Google Play

Depois de criar uma versão de produção, siga as diretrizes da App Store ou Google Play para fazer o upload do seu aplicativo.

### Comandos Úteis

#### 10. Atualizar Expo-CLI

```bash
npm install -g expo-cli
```

#### 11. Atualizar dependências do projeto

```bash
expo upgrade
```

#### 12. Ejetar o projeto (para personalização avançada)

```bash
expo eject
```





### Referências

{% embed url="https://reactnative.dev/" %}

{% embed url="https://expo.dev/" %}

{% embed url="https://react-native.rocketseat.dev/" %}

{% embed url="https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/react-native-for-android" %}

{% embed url="https://www.alura.com.br/artigos/configurando-o-ambiente-react-native?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=645853715422&hsa_src=g&hsa_tgt=aud-539280195004:dsa-843358956400&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwhL6pBhDjARIsAGx8D5811tXWQV3M-6yYv-y1DYbJun0czd7Bl5qSMhN9bAZX5CfpieMAbcgaAj0PEALw_wcB" %}

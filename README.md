---
description: Principais Comandos
---

# Comandos



#### Configurações Padrões:

O React Native é um framework de desenvolvimento de aplicativos móveis que permite criar aplicativos nativos para iOS e Android usando JavaScript e React. Aqui está uma lista de comandos úteis para trabalhar com o React Native:



1. **Configuração Inicial:**
   * `npx react-native init MyApp`: Cria um novo projeto React Native chamado "MyApp".
   * `cd MyApp`: Navega para o diretório do projeto.
   * `npx react-native run-android` ou `npx react-native run-ios`: Inicia o aplicativo em um emulador ou dispositivo físico.
2. **Desenvolvimento e Teste:**
   * `npm start` ou `yarn start`: Inicia o servidor de desenvolvimento Metro.
   * `npx react-native run-android` ou `npx react-native run-ios`: Inicia o aplicativo no emulador ou dispositivo físico.
   * `npm test` ou `yarn test`: Executa testes no aplicativo.
3. **Gerenciamento de Dependências:**
   * `npm install packageName` ou `yarn add packageName`: Instala uma nova dependência no projeto.
   * `npm uninstall packageName` ou `yarn remove packageName`: Remove uma dependência do projeto.
4. **Plugins e Bibliotecas:**
   * `npm install react-native-some-library` ou `yarn add react-native-some-library`: Instala uma biblioteca React Native.
   * `react-native link`: Linka automaticamente bibliotecas nativas após a instalação.
5. **Gestão de Emuladores:**
   * `emulator -list-avds`: Lista os emuladores Android disponíveis.
   * `emulator -avd <avd_name>`: Inicia um emulador Android específico.
6. **Build e Publicação:**
   * `cd android && ./gradlew bundleRelease` (Android) e `npx react-native bundle --platform ios --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios` (iOS): Gere arquivos de bundle para produção.
   * Siga a documentação oficial para publicar na App Store (iOS) ou Play Store (Android).
7. **Limpeza de Cache:**
   * `npm start -- --reset-cache`: Limpa o cache do Metro Bundler.
   * `cd android && ./gradlew clean` (Android) e `npx react-native start --reset-cache` (iOS): Limpa caches específicos do projeto.
8. **Depuração:**
   * `console.log()`: Use para depuração. Os logs aparecem no console do Metro Bundler.
   * `react-native log-android` e `react-native log-ios`: Mostra os logs específicos da plataforma.
9. **Atualizações:**
   * `npm outdated` ou `yarn outdated`: Verifica as dependências desatualizadas no projeto.
   * `npm update` ou `yarn upgrade`: Atualiza as dependências para as versões mais recentes.

Lembre-se de verificar a documentação oficial do React Native (https://reactnative.dev/).



#### Configurações Expo:

O Expo é uma estrutura que simplifica o desenvolvimento de aplicativos React Native e fornece uma variedade de ferramentas úteis para agilizar o processo. Abaixo estão alguns comandos comuns para usar o Expo:



1. **Instalação do Expo:**
   *   Para iniciar um novo projeto com o Expo, primeiro instale o CLI do Expo:

       ```
       npm install -g expo-cli
       ```
2. **Criação de um Novo Projeto Expo:**
   *   Crie um novo projeto Expo com o comando:

       ```
       expo init MyApp
       ```
   * Escolha um modelo de projeto ou selecione "blank" para um projeto vazio.
3. **Iniciando o Projeto:**
   *   Navegue para o diretório do projeto:

       ```
       cd MyApp
       ```
   *   Inicie o servidor de desenvolvimento:

       ```
       expo start
       ```
   * Isso abrirá o Metro Bundler e exibirá um código QR no terminal.
4. **Executando o Projeto em um Emulador ou Dispositivo:**
   * Para executar o aplicativo em um emulador Android/iOS ou dispositivo físico, digitalize o código QR usando o aplicativo Expo Go ou use os seguintes comandos:
     *   Para emulador Android:

         ```
         expo start --android
         ```
     *   Para emulador iOS:

         ```
         expo start --ios
         ```
     * Para dispositivo físico, certifique-se de que o aplicativo Expo Go esteja instalado e escaneie o código QR exibido no Metro Bundler.
5. **Gerenciamento de Dependências:**
   * Use `npm install packageName` ou `yarn add packageName` para instalar novas dependências no projeto.
6. **Plugins e Bibliotecas:**
   *   Para adicionar bibliotecas Expo compatíveis, use:

       ```
       expo install library-name
       ```
   * Isso garantirá que a biblioteca seja configurada corretamente com o Expo.
7. **Build e Publicação:**
   * Siga a documentação oficial do Expo para obter informações sobre como construir e publicar seu aplicativo Expo para lojas de aplicativos.
8. **Depuração:**
   * Use `console.log()` para depuração. Os logs aparecem no console do Metro Bundler.
9. **Atualizações:**
   * Use `expo upgrade` para verificar e aplicar atualizações do Expo CLI e do projeto.

Lembre-se de que o Expo oferece muitos recursos adicionais, como acesso a APIs nativas e bibliotecas pré-configuradas. Verifique a documentação oficial do Expo (https://docs.expo.dev/)&#x20;

# Expo

Guia para desenvolver aplicativos React Native utilizando um emulador e o Expo:

**1. Instalação do ambiente de desenvolvimento:**

Antes de começar, você deve ter o ambiente de desenvolvimento React Native configurado. Certifique-se de que você já tenha o Node.js instalado. Em seguida, instale o Expo globalmente:

```bash
npm install -g expo-cli
```

**2. Criando um novo projeto React Native:**

Crie um novo projeto React Native utilizando o Expo com o seguinte comando:

```bash
expo init NomeDoProjeto
```

Siga as instruções para escolher um modelo de projeto e configurar seu projeto inicial.

**3. Navegando para a pasta do projeto:**

Após criar o projeto, navegue para a pasta do projeto usando o comando:

```bash
cd NomeDoProjeto
```

**4. Iniciando o aplicativo com o Expo:**

Inicie o aplicativo com o Expo usando o seguinte comando:

```bash
expo start
```

Isso abrirá uma página da web com um código QR que você pode escanear com o aplicativo Expo Client em seu dispositivo móvel.

**5. Usando um emulador:**

Para executar o aplicativo em um emulador Android ou iOS, siga estas etapas:

**Emulador Android (utilizando Android Studio):**

1. Abra o Android Studio.
2. Vá para "AVD Manager" e crie um dispositivo virtual Android, se você ainda não tiver um.
3. Certifique-se de que o emulador esteja em execução.
4. No navegador Expo, clique na opção "Run on Android device/emulator."

**Emulador iOS (utilizando Xcode):**

1. Abra o Xcode (disponível apenas em sistemas macOS).
2. Abra um projeto existente no Xcode localizado em `<seu-projeto>/ios/<NomeDoProjeto>.xcworkspace`.
3. Selecione um simulador iOS na barra de ferramentas do Xcode.
4. No navegador Expo, clique na opção "Run on iOS simulator."

**6. Desenvolvendo com Expo:**

Agora, você pode começar a desenvolver seu aplicativo React Native usando um emulador e o Expo. O aplicativo será atualizado automaticamente conforme você faz alterações no código. Você pode usar um editor de código, como o Visual Studio Code, para editar os arquivos do projeto.

**7. Testando em dispositivos reais:**

Se você quiser testar seu aplicativo em dispositivos reais, instale o aplicativo Expo Client no dispositivo móvel e escaneie o código QR exibido no navegador Expo para abrir seu aplicativo em seu dispositivo.

Esse é um guia básico para iniciar o desenvolvimento de aplicativos React Native com um emulador e o Expo. À medida que você avança no desenvolvimento, você pode aprimorar seu aplicativo, adicionar componentes e funcionalidades específicas, e eventualmente empacotá-lo para distribuição.

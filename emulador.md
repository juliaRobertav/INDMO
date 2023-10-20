# Emulador

Guia com comandos adicionais para iniciar o emulador Android e iOS junto com o Expo:

**1. Instalação do ambiente de desenvolvimento:**

Antes de começar, certifique-se de ter o ambiente de desenvolvimento React Native configurado. Tenha o Node.js instalado e instale o Expo globalmente:

```bash
npm install -g expo-cli
```

**2. Criando um novo projeto React Native:**

Crie um novo projeto React Native usando o Expo com o seguinte comando:

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

**5. Usando um emulador Android:**

Para executar o aplicativo em um emulador Android, siga estas etapas:

**Inicie o emulador Android:**

```bash
emulator -avd NomeDoEmulador
```

Certifique-se de substituir "NomeDoEmulador" pelo nome do seu emulador Android. Você pode listar os emuladores disponíveis com o comando `emulator -list-avds`.

**No navegador Expo, clique na opção "Run on Android device/emulator".**

**6. Usando um emulador iOS:**

Para executar o aplicativo em um emulador iOS, siga estas etapas:

**Inicie o emulador iOS:**

Abra o Xcode (disponível apenas em sistemas macOS), selecione um simulador iOS na barra de ferramentas do Xcode.

**No navegador Expo, clique na opção "Run on iOS simulator".**

**7. Desenvolvendo com Expo:**

Agora, você pode começar a desenvolver seu aplicativo React Native usando um emulador e o Expo. O aplicativo será atualizado automaticamente conforme você faz alterações no código. Use um editor de código, como o Visual Studio Code, para editar os arquivos do projeto.

**8. Testando em dispositivos reais:**

Se você quiser testar seu aplicativo em dispositivos reais, instale o aplicativo Expo Client no dispositivo móvel e escaneie o código QR exibido no navegador Expo para abrir seu aplicativo no dispositivo.

Este guia agora inclui comandos para iniciar os emuladores Android e iOS, o que facilitará o desenvolvimento e teste de aplicativos React Native em emuladores.

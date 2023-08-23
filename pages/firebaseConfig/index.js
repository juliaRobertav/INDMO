import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = { //credenciais de autenticação
  apiKey: "AIzaSyBQGM2_X9pEYnn0rxCcJZZijgv-q0MGOY0",
  authDomain: "projeto-reactnative---2023.firebaseapp.com",
  projectId: "projeto-reactnative---2023",
  storageBucket: "projeto-reactnative---2023.appspot.com",
  messagingSenderId: "728828013596",
  appId: "1:728828013596:web:a93d89678896d706aa83d9",
  measurementId: "G-KV7LZ7M1HN"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app
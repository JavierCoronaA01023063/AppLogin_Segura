import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpNKdZulGxIdPSzdSlbnInFqM6p1msJ5g",
  authDomain: "react-clasegina.firebaseapp.com",
  projectId: "react-clasegina",
  storageBucket: "react-clasegina.appspot.com",
  messagingSenderId: "422542568779",
  appId: "1:422542568779:web:471d03964873f1e1e14cce",
  measurementId: "G-SC4V90T1C4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// toda la config de firebase 
//Javier Corona y Tomás Díaz!
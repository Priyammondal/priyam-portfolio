import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBnmdocZ31k06PIRDfI9sGrRaFZyoMGnQ",
  authDomain: "priyammondal-portfolio.firebaseapp.com",
  projectId: "priyammondal-portfolio",
  storageBucket: "priyammondal-portfolio.appspot.com",
  messagingSenderId: "318744096565",
  appId: "1:318744096565:web:9b8ddf6e9d5a53b834267c",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

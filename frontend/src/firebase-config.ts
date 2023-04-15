import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBR-LYLfcPn4dXdOjq-hpYSNoEX9x9IA0I",
    authDomain: "senior607-6da5c.firebaseapp.com",
    projectId: "senior607-6da5c",
    storageBucket: "senior607-6da5c.appspot.com",
    messagingSenderId: "1093059817556",
    appId: "1:1093059817556:web:893f110f754be32a4a3dc1",
    measurementId: "G-LN7Y1EP3S4"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdtYdWyw2r9CKYl2nElrOHggmQUr6kbrw",
    authDomain: "baranggay670.firebaseapp.com",
    projectId: "baranggay670",
    storageBucket: "baranggay670.appspot.com",
    messagingSenderId: "873567954454",
    appId: "1:873567954454:web:202043039a2c470ffeb737",
    measurementId: "G-0DMJXYSPZ5",
    
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR-LYLfcPn4dXdOjq-hpYSNoEX9x9IA0I",
  authDomain: "senior607-6da5c.firebaseapp.com",
  projectId: "senior607-6da5c",
  storageBucket: "senior607-6da5c.appspot.com",
  messagingSenderId: "1093059817556",
  appId: "1:1093059817556:web:893f110f754be32a4a3dc1",
  measurementId: "G-LN7Y1EP3S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get reference to the service
const auth = getAuth(app);
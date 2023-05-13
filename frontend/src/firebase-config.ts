import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK9tC2tABrYTB_99OjvUfO8uYBXXkafUA",
  authDomain: "brgy670-aeb3f.firebaseapp.com",
  projectId: "brgy670-aeb3f",
  storageBucket: "brgy670-aeb3f.appspot.com",
  messagingSenderId: "347318510777",
  appId: "1:347318510777:web:7402c32cefca2de5552768",
  measurementId: "G-ECYRNPMC9N"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


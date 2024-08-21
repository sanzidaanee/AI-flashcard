// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMcNKo0P_vEn4cGfGASpYoyI8JuyXjEwM",
  authDomain: "flashcardsaas-ec8b7.firebaseapp.com",
  projectId: "flashcardsaas-ec8b7",
  storageBucket: "flashcardsaas-ec8b7.appspot.com",
  messagingSenderId: "33911108528",
  appId: "1:33911108528:web:7c890fe757aa28ea5d5c75",
  measurementId: "G-NW34M5B2D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
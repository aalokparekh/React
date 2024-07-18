// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu7AcvfdFlpcQL8gEkXgCu8wGiP1aDQqk",
    authDomain: "fir-database-7eb48.firebaseapp.com",
    projectId: "fir-database-7eb48",
    storageBucket: "fir-database-7eb48.appspot.com",
    messagingSenderId: "584651222868",
    appId: "1:584651222868:web:307611d75371af38c4a2c1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firestore data base
export const db = getFirestore(app);

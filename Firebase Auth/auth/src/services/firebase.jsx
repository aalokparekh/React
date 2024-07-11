// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwpkOAYXgUqcI2Kg0EsuGWSFFKzoBR3gM",
  authDomain: "fir-auth-e4e81.firebaseapp.com",
  projectId: "fir-auth-e4e81",
  storageBucket: "fir-auth-e4e81.appspot.com",
  messagingSenderId: "95184389325",
  appId: "1:95184389325:web:661eadc63facab8a991584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider = new GoogleAuthProvider(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c2b88.firebaseapp.com",
  projectId: "mern-auth-c2b88",
  storageBucket: "mern-auth-c2b88.appspot.com",
  messagingSenderId: "98141440987",
  appId: "1:98141440987:web:da555f1e9c245faf96f5fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
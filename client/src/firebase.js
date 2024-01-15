// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e3ad7.firebaseapp.com",
  projectId: "mern-estate-e3ad7",
  storageBucket: "mern-estate-e3ad7.appspot.com",
  messagingSenderId: "67764028651",
  appId: "1:67764028651:web:5bd0b2bac215388cac2aae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
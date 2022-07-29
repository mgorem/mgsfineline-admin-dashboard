// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.MGS_FINILINE_PRIV_KEY,
  authDomain: "mgsfineline.firebaseapp.com",
  projectId: "mgsfineline",
  storageBucket: "mgsfineline.appspot.com",
  messagingSenderId: "794676245747",
  appId: "1:794676245747:web:4b46381ddd35ca392e7386",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

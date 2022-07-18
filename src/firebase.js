// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

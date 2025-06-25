import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD89J4x6w-mjWiAOfY_4noumyBowm_NLmU",
  authDomain: "full-stack-react-3435c.firebaseapp.com",
  projectId: "full-stack-react-3435c",
  storageBucket: "full-stack-react-3435c.firebasestorage.app",
  messagingSenderId: "820905065286",
  appId: "1:820905065286:web:5a500c332d0204b9574347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

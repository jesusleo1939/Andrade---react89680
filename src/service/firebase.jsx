// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Q-smmqWG7Jo7SgPzcpDmQgKFE1x5NIQ",
  authDomain: "coder-89680-app-leo.firebaseapp.com",
  projectId: "coder-89680-app-leo",
  storageBucket: "coder-89680-app-leo.firebasestorage.app",
  messagingSenderId: "827750211686",
  appId: "1:827750211686:web:01cf8e778f2fc0d6a08da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Traemos base de datos 
export const db = getFirestore(app);
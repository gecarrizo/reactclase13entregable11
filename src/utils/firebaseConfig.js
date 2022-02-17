// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaD1mbhAt18BWPYNUGrHPmtEsG8sTzgy4",
  authDomain: "dbzonamaterial.firebaseapp.com",
  projectId: "dbzonamaterial",
  storageBucket: "dbzonamaterial.appspot.com",
  messagingSenderId: "690455039500",
  appId: "1:690455039500:web:983312e1318dbb8733e829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
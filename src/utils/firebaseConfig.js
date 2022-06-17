// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1beKXLKxrseMCnAOJJechPEey-2ZbtQQ",
  authDomain: "alexisgodoy-stylesport-31180.firebaseapp.com",
  projectId: "alexisgodoy-stylesport-31180",
  storageBucket: "alexisgodoy-stylesport-31180.appspot.com",
  messagingSenderId: "691921178470",
  appId: "1:691921178470:web:2ba9cf911ee7f4c6ec42a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore initialize
const db = getFirestore(app)

export default db;
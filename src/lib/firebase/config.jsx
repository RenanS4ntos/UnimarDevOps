// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:'AIzaSyATTiZZjT1YXZnknwJZJHUgjd5c8fY-jo4',
  authDomain:'startdevops-7ffeb.firebaseapp.com',
  projectId:'startdevops-7ffeb',
  storageBucket:'startdevops-7ffeb.firebasestorage.app',
  messagingSenderId:'659727270668',
  appId:'1:659727270668:web:b2cfc1cf90fa768e0c3f29',
  measurementId:'G-EHY3X715HF',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); // Initialize and export Firestore
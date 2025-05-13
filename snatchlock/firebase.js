// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhsNtBl7iQsB3x7RpyUHwOeMo7znys7F8",
  authDomain: "snatchlock-639bc.firebaseapp.com",
  projectId: "snatchlock-639bc",
  storageBucket: "snatchlock-639bc.firebasestorage.app",
  messagingSenderId: "55564868156",
  appId: "1:55564868156:web:ae5e02b00bab22e044c139",
  measurementId: "G-TWHNC27YBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
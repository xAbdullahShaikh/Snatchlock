
/*
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

*/



// firebase.ts (or firebase.js)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhsNtBl7iQsB3x7RpyUHwOeMo7znys7F8",
  authDomain: "snatchlock-639bc.firebaseapp.com",
  projectId: "snatchlock-639bc",
  storageBucket: "snatchlock-639bc.firebasestorage.app",
  messagingSenderId: "55564868156",
  appId: "1:55564868156:web:ae5e02b00bab22e044c139",
  measurementId: "G-TWHNC27YBD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

// ✅ Lazy load analytics only in the browser
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics, isSupported }) => {
    isSupported().then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    });
  });
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrMH2gNMMMAl1fQpIRtyrBVmNQU4rHWxs",
  authDomain: "netflix-e81e6.firebaseapp.com",
  projectId: "netflix-e81e6",
  storageBucket: "netflix-e81e6.appspot.com",
  messagingSenderId: "694405738423",
  appId: "1:694405738423:web:3fb28abf51b55d32544232",
  measurementId: "G-8VDT1B9P13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)

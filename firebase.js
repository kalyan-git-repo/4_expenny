// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3OjeHxhPRdnZTp9LibEixTPDhE_-Us_c",
  authDomain: "expenny-7520c.firebaseapp.com",
  projectId: "expenny-7520c",
  storageBucket: "expenny-7520c.firebasestorage.app",
  messagingSenderId: "877227751692",
  appId: "1:877227751692:web:249e296f2af64ebc933129",
  measurementId: "G-4M9K78YZDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
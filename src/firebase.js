// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNuZEyO6Ny4k08NwET3mO_58KyaUfG_1M",
  authDomain: "challenge-e9ed2.firebaseapp.com",
  projectId: "challenge-e9ed2",
  storageBucket: "challenge-e9ed2.appspot.com",
  messagingSenderId: "363835094518",
  appId: "1:363835094518:web:545cd378848fc7b48ec3d7",
  measurementId: "G-7V0QC7TQQY"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
import * as firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTPocirA2780dKVRJN39eH2CA-CFS4YOQ",
    authDomain: "bustrackerproject-4b0d4.firebaseapp.com",
    databaseURL: "https://bustrackerproject-4b0d4-default-rtdb.firebaseio.com",
    projectId: "bustrackerproject-4b0d4",
    storageBucket: "bustrackerproject-4b0d4.appspot.com",
    messagingSenderId: "253245996193",
    appId: "1:253245996193:web:8aaae455f1ba124dc3c4e0",
    measurementId: "G-ELM1BEK3HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const analytics = getAnalytics(app);
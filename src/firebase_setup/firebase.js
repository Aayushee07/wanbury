

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr6PHPBid4PjydVKDYmw4uTkp3nuzJFIc",
  authDomain: "wanbury-303d2.firebaseapp.com",
  projectId: "wanbury-303d2",
  storageBucket: "wanbury-303d2.appspot.com",
  messagingSenderId: "389566315738",
  appId: "1:389566315738:web:77af3a63afff427e25f9e3",
  measurementId: "G-9398MPHP01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};

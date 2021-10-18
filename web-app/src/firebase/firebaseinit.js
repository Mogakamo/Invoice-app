// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/compat/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDugok9R0LeFFScBTFE8zJkmanxtYgTF2o",

  authDomain: "invoice-app-e312b.firebaseapp.com",

  projectId: "invoice-app-e312b",

  storageBucket: "invoice-app-e312b.appspot.com",

  messagingSenderId: "528654232475",

  appId: "1:528654232475:web:597e7b767439392639cf3e",

  measurementId: "G-75CLBCCNJY",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

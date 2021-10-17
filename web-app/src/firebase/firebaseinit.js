import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDugok9R0LeFFScBTFE8zJkmanxtYgTF2o",

  authDomain: "invoice-app-e312b.firebaseapp.com",

  projectId: "invoice-app-e312b",

  storageBucket: "invoice-app-e312b.appspot.com",

  messagingSenderId: "528654232475",

  appId: "1:528654232475:web:597e7b767439392639cf3e",

  measurementId: "G-75CLBCCNJY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

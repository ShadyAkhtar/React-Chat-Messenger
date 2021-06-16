import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD8GkJfjPwzan2DssRSKqC3GCicGPAbrLg",
    authDomain: "unichat-6edf8.firebaseapp.com",
    projectId: "unichat-6edf8",
    storageBucket: "unichat-6edf8.appspot.com",
    messagingSenderId: "217597530336",
    appId: "1:217597530336:web:92c63ef76849bda4218085"
  }).auth();
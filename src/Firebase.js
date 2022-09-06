import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBsQnoRIc2WvKiEOiSWJJwudUGFcQIeXww",
    authDomain: "react-emart-34a86.firebaseapp.com",
    projectId: "react-emart-34a86",
    storageBucket: "react-emart-34a86.appspot.com",
    messagingSenderId: "867488210222",
    appId: "1:867488210222:web:130aae28c431362985eebf"
  };

  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);

// use for db
const db = firebaseapp.firestore()

export {db}
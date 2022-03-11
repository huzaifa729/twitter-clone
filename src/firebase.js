import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCvtYjE2l80pAtCVxz_stJ2Eb8PmNqSGQs",
    authDomain: "twitter-clone-9efdc.firebaseapp.com",
    projectId: "twitter-clone-9efdc",
    storageBucket: "twitter-clone-9efdc.appspot.com",
    messagingSenderId: "1066456326094",
    appId: "1:1066456326094:web:d354a94a2aea6a912e159f",
    measurementId: "G-PVPDHPS808"
  };

//   const firebaseApp = firebase.initializeApp(firebaseConfig)

// //   const auth = firebase.auth()

//   const db = firebaseApp.firestore();

//   export default db;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
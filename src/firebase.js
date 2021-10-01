import firebase from "firebase";
import 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDpD0hBhdhhHH2iy2HY3TMhqDAfZj4spoc",
    authDomain: "jojoba-e.firebaseapp.com",
    databaseURL: "https://jojoba-e.firebaseio.com",
    projectId: "jojoba-e",
    storageBucket: "jojoba-e.appspot.com",
    messagingSenderId: "396422757341",
    appId: "1:396422757341:web:678f5a28cf42f618d3d434",
    measurementId: "G-4S4LM4YR0N"
  });

  const db = firebaseApp.firestore();
  const storage = firebase.storage();

  firebase.analytics();

  const auth = firebase.auth();

  export {auth, db, storage};
  
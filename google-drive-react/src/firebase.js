import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDflkCYEsyuNwUyH_bcP98zqTDV2eNDkv8",
    authDomain: "drive-ecf7f.firebaseapp.com",
    projectId: "drive-ecf7f",
    storageBucket: "drive-ecf7f.appspot.com",
    messagingSenderId: "379708403472",
    appId: "1:379708403472:web:d1770d8cdd6c5eef387f95"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, storage, auth, provider}
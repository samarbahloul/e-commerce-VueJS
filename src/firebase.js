import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyBwrfRx4J1Xn7b6LH8Lu-bBXCfc95VfrQA",
    authDomain: "ecommercefirebase-26bb0.firebaseapp.com",
    projectId: "ecommercefirebase-26bb0",
    storageBucket: "ecommercefirebase-26bb0.appspot.com",
    messagingSenderId: "157517478282",
    appId: "1:157517478282:web:0f204e16abf82ddd65b073",
    measurementId: "G-NGHDW32BD8"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export {
    firebase,
    auth,
    db,
    storage,
    functions
}



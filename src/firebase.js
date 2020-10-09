import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8GFwA4d2A3Sv9FfwIWQ1nSqOnI95nuf8",
    authDomain: "clone-f2c13.firebaseapp.com",
    databaseURL: "https://clone-f2c13.firebaseio.com",
    projectId: "clone-f2c13",
    storageBucket: "clone-f2c13.appspot.com",
    messagingSenderId: "910321327799",
    appId: "1:910321327799:web:e398fd25084c0016aef732",
    measurementId: "G-6P9XSH7V4C",
});

const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth}
import * as firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA6lYjMhiwe6BYYKdq1a1wwRyTgOL3lNGE",
    authDomain: "crypto-bot-62a4c.firebaseapp.com",
    databaseURL: "https://crypto-bot-62a4c.firebaseio.com",
    projectId: "crypto-bot-62a4c",
    storageBucket: "crypto-bot-62a4c.appspot.com",
    messagingSenderId: "1007884756070",
    appId: "1:1007884756070:web:3376f36bdcbf1dc255f9a7",
    measurementId: "G-5F8K60C0F4"
});

export default app;
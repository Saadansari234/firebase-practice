import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDvvnPXREtxjrVvCQvzxd3T0od7pWPlckw",
    authDomain: "project-c1bed.firebaseapp.com",
    projectId: "project-c1bed",
    storageBucket: "project-c1bed.appspot.com",
    messagingSenderId: "219931847816",
    appId: "1:219931847816:web:582bc72b2157b7da79433d",
    databaseURL: "https://project-c1bed-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig)

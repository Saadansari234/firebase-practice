import { initializeApp } from 'firebase/app'
import { createContext, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getDatabase, set, ref } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDvvnPXREtxjrVvCQvzxd3T0od7pWPlckw",
    authDomain: "project-c1bed.firebaseapp.com",
    projectId: "project-c1bed",
    storageBucket: "project-c1bed.appspot.com",
    messagingSenderId: "219931847816",
    appId: "1:219931847816:web:582bc72b2157b7da79433d",
    databaseURL: "https://project-c1bed-default-rtdb.firebaseio.com/"//important thing to put before getting data from firebase
};

const FirebaseApp = initializeApp(firebaseConfig)
const FirebaseAuth = getAuth(FirebaseApp)
const DataBase = getDatabase(FirebaseApp)
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null)


export const FirebaseProvider = (props) => {

    // signup with email and password
    const signupWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(FirebaseAuth, email, password)
    }
    // signIn with email and password
    const SigninWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(FirebaseAuth, email, password)
    }
    // signup with google
    const signUpWithGoogle = () => {
        signInWithPopup(FirebaseAuth, googleProvider)
    }

    // function for database
    const putData = (key, data) => {
        return set(ref(DataBase, key), data);
    }


    return (
        <FirebaseContext.Provider value={{ signupWithEmailAndPassword, SigninWithEmailAndPassword, putData, signUpWithGoogle }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}


export const useFirebase = () => useContext(FirebaseContext)
import { initializeApp } from 'firebase/app'
import { createContext, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getDatabase, set, ref } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDvvnPXREtxjrVvCQvzxd3T0od7pWPlckw",
    authDomain: "project-c1bed.firebaseapp.com",
    projectId: "project-c1bed",
    storageBucket: "project-c1bed.appspot.com",
    messagingSenderId: "219931847816",
    appId: "1:219931847816:web:582bc72b2157b7da79433d",
    databaseURL: "https://project-c1bed-default-rtdb.firebaseio.com/"
};

const FirebaseApp = initializeApp(firebaseConfig)
const FirebaseAuth = getAuth(FirebaseApp)
const DataBase = getDatabase(FirebaseApp)

const FirebaseContext = createContext(null)


export const FirebaseProvider = (props) => {

    // function for authentication
    const signupWithEmailAndPassword= (email,password) =>{
      return  createUserWithEmailAndPassword(FirebaseAuth, email, password)
    }

    // function for database
    const putData = (key, data) =>{
        return set(ref(DataBase,key), data);
    }


    return (
        <FirebaseContext.Provider value={{signupWithEmailAndPassword,putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}


export const useFirebase= ()=> useContext(FirebaseContext)
import React from 'react'
import './App.css'
import { app } from './context/Firebase'
import { getFirestore, collection, addDoc, } from "firebase/firestore"

const FireStore = getFirestore(app)

const App = () => {

  const writeData = async () => {
    const result = await addDoc(collection(FireStore, "cities"), {
      name: 'Delhi',
      pincode: 123,
      lat: 456,
      long: 678,
    })

    console.log("result", result)
  }

  return (
    <div className='App'>
      <h1>Firestore Database</h1>
      <button onClick={writeData}>put Data</button>
    </div>
  )
}

export default App
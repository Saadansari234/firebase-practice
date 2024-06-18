import React from 'react'
import './App.css'
import { app } from './context/Firebase'
import { getFirestore, collection, addDoc, getDoc, doc, query, where, getDocs, updateDoc,  } from "firebase/firestore"

const firebaseApp = getFirestore(app)

const App = () => {

  const writeData = async () => {
    const result = await addDoc(collection(firebaseApp, "cities"), {
      name: 'Delhi',
      pincode: 123,
      lat: 456,
      long: 678,
    })

    console.log("result", result)
  }

  const makeSubCollection= async()=>{
    await addDoc(collection(firebaseApp,"cities/NYATQDzyMZFFsL7WAyZs/places"),{
       name:"this is a place",
       desc:"my desc",
       date: Date.now()
    })
  }

  const getDocument=async()=>{
    const ref = doc(firebaseApp,"cities","NYATQDzyMZFFsL7WAyZs");
    const snap= await getDoc(ref)
    console.log(snap.data())
  }

  const getDocByQuery=async()=>{
    const collectionRef= collection(firebaseApp,"users")
    const q= query(collectionRef, where("isMale","==",true))
    const snapshot= await getDocs(q)
    snapshot.forEach((data)=> console.log(data.data()))
  }

  const update=async()=>{
    const docRef = doc(firebaseApp,"cities","NYATQDzyMZFFsL7WAyZs")
    await updateDoc(docRef,{
      name:"Mumbai"
    })
  }

  return (
    <div className='App'>
      <h1>Firestore Database</h1>
      <button onClick={writeData}> put Data</button>
      <button onClick={makeSubCollection}> put sub data</button>
      <button onClick={getDocument}>get Document</button>
      <button onClick={getDocByQuery}>get document by query</button>
      <button onClick={update}>update Document</button>
    </div>
  )
}

export default App
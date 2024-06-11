import React, { useEffect, useState } from 'react'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

const Auth = getAuth()

const Authentication = () => {
    const [user,setUser]=useState(null)

    useEffect(() => {
        onAuthStateChanged(Auth, user => {
            if (user) {
                // yes you are logedin logedin
                setUser(user)
            } else {
                console.log("you are logged out");
                setUser(null)
            }
        })
    }, [])

    if (user===null) {
        return(
            <div className='App'>
            <h1>Authentication</h1>
            <Signup />
            <Signin/>
        </div>
        )
    }

    return (
        <div className='App'>
           <h1>hello {user.email}</h1>
           <button onClick={()=>signOut(Auth)}>signout</button>
        </div>
    )
}

export default Authentication
import React from 'react'
import { useState } from 'react'
import { useFirebase } from '../context/Firebase'

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Firebase=useFirebase()
    

    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="text" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={
                ()=>{Firebase.SigninWithEmailAndPassword(email,password)}
            } >Signin</button>
        </div>
    )
}

export default Signin
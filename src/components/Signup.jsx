import React from "react"
import { useFirebase } from "../context/Firebase"
import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Firebase = useFirebase()

    const handleClcik = async () => {
        const result = await Firebase.signupWithEmailAndPassword(email, password)
        console.log("succesfull", result)
    }

    // console.log(Firebase)
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='enter email' value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor="email">Password</label>
            <input type="text" placeholder='enter password' value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleClcik}>signup only</button>
            <button onClick={() => {
                Firebase.signupWithEmailAndPassword(email, password)
                Firebase.putData('users/' + "saadAnsari", { email, password })
            }} >Signup</button>
            <button onClick={() => { Firebase.signUpWithGoogle() }} >Signup with google</button>
        </div>
    )
}

export default Signup
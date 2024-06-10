// import React from 'react'
// import { useState } from 'react'
// import { app } from '../firebase'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

// const Auth = getAuth(app)

// const Signin = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const SigninUser = () => {
//         signInWithEmailAndPassword(
//             Auth,
//             email,
//             password,
//         )
//         .then(value => alert("signIn sucessfully"))
//         .catch(error => console.log(error))
//     }


//     return (
//         <div>
//             <label htmlFor="email">Email</label>
//             <input type="text" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />

//             <label htmlFor="email">Password</label>
//             <input type="text" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />

//             <button onClick={SigninUser} >Signin</button>
//         </div>
//     )
// }

// export default Signin
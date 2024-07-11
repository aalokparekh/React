import React from 'react'
import { auth, provider } from '../services/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
  const [user]=useAuthState(auth)
  const handleclick=()=>{
    signInWithPopup(auth,provider)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const handleLogOut=()=>{
    signOut(auth).then(()=>{
      alert("logOut")
    }).catch((err)=>{
      console.log(err) 
    })
  }
  return (
    <div>
    <br/>

    <div>
    <GoogleButton onClick={handleclick}>LoginwithGoogle</GoogleButton>
    <br />
    <button onClick={handleLogOut}>logOut</button>
    </div>
    </div>
  )
}

export default Login

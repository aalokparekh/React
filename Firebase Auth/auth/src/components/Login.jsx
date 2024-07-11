import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../services/firebase';

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e)=>handlesubmit(e)}>
        <input type="text" onChange={(e) => setemail(e.target.value)}  placeholder=" Enter email here" />
        <input type="password" onChange={ (e) => setpassword(e.target.value)}  placeholder="Enter password here"/>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login

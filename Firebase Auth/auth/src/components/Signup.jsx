import { createUserWithEmailAndPassword} from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../services/firebase';

const Signup = () => {

    const [email,setemail] =useState("")
    const [password,setpassword] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault();
    
        createUserWithEmailAndPassword(auth, email, password)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      };

    return (
    <div>
      <h1>Sign Up</h1>
        
      <form onSubmit={handlesubmit}>
         <input type="text"  placeholder=' Enter email here'  onChange={(e)=>setemail(e.target.value)}  />
         <input type="password"  placeholder=' Enter password here' onChange={(e)=>setpassword(e.target.value)}/>
         <input type="submit" value='signup'/>
      </form>
    </div>
  )
}

export default Signup

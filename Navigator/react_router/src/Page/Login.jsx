import React, { useState } from 'react'

import { Navigate } from 'react-router-dom'

const Login = () => {
  const [email,setemail]=useState('')
  const [password,setpass] = useState('')

  const handlesubmit=(e)=>
      {
              e.preventDefault()
              let userdata={
                  email,password
              }
              console.log(userdata)

              fetch("https://reqres.in/api/login",{
                  method:"POST",
                  headers:{
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userdata)
              })
              .then((res)=>res.json())
              .then((data)=>{
                  localStorage.setItem("token",data.token)
              })
              .catch((err)=>console.log(err))
              
      }
  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handlesubmit}>
    <input type='email' placeholder='enter email' onChange={(e)=>setemail(e.target.value)}/>
    <input type="password" placeholder='enter password' onChange={(e)=>setpass(e.target.value)} />
    <input type="submit" />
    </form>
    
    </div>
  )
}

export default Login

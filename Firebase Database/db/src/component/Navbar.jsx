import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent :"space-evenly" , marginTop :"5%"}}>

      <Link to={"/login"}>Login</Link>
     
      <Link to={"/dashboard"}>Dashboard</Link>  
    </div>
  )
}

export default Navbar

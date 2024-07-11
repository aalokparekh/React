import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

function Login() {

  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const{loginUser}=useContext(AuthContext) 
  const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault()
    let userdata={
      email,password
    }
    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      loginUser(res.data.token)
      navigate("/dashboard")
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input onChange={(e)=>setemail(e.target.value)}  data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={(e)=>setpassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" onSubmit={handlesubmit} />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

  const[data,setdata]=useState([])
  const fetchdata=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      setdata(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div>
      <h1> Products </h1>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginTop:"10%"}}>
      {
        data.map((el)=>(<div  key={el.id}  style={{border:"1px solid black"}}>
          <img src={el.image} alt=""   height={350} width={350}/>
          <h3>{el.title}</h3>
        </div>))
      }
      </div>

    </div>
  )
}

export default Dashboard

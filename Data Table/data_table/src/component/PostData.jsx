import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PostData = () => {
  const formData =
    {
        image: "",
        title: "",
        price: "",
        category: ""
    }
    const [getdata, setGetdata ] = useState(formData)
    const handleChnage = (e) => {
        const { name, value } = e.target
        setGetdata((pre) => ({ ...pre, [name]: value }))
    }

    const {
        image,
        title,
        price,
        category,
    }=getdata



    const handleSubmit = (e) => {
        e.preventDefault();
        if(image == "" ||title ==""||price == "" ||category == "")
            {
                alert("data is black")
            }
          else
          {
            axios.post("http://localhost:8080/data", getdata)
            .then(res => alert('Data posted:', res.data))
            .catch(error => console.error('Error posting data:', error))  
          }
    }
  return (
    <div>
    <Link className='link' to="/" >Return Home</Link>
    <form action="" onSubmit={handleSubmit}>
        <input className='post' type="text" name='image' onChange={handleChnage} value={getdata.image} placeholder='Enter image Url' />
        <input className='post' type="text" name='title' onChange={handleChnage} value={getdata.title} placeholder='Enter Title' />
        <input className='post' type="text" name='price' onChange={handleChnage} value={getdata.price} placeholder='Enter Price' />
        <input className='post' type="text" name='category' onChange={handleChnage} value={getdata.category} placeholder='Enter Category' />
        <input className='post' type="Submit" />
    </form>
    </div>
  )
}

export default PostData

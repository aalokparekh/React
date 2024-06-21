import axios from 'axios';
import React from 'react'
import { Button } from 'react-bootstrap'

const DeleteProduct = () => {

  const handledelete = (id) => {     
    axios.delete(`http://localhost:8080/data/${id}`)
        .then(res =>
            {
                console.log('Data deleted:', res.data)
                alert("Data is Deleted")
            })
        .catch(error => console.error('Error deleting data:', error));
}
  return (
    <div>

    <Button onClick={(el) => handledelete(el.id)}>Delete</Button>  
    </div>
  )
}

export default DeleteProduct

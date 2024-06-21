import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {

    const [productdata, setproductdata] = useState({})
    const [load, setload] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setload(true)
        axios.get(`http://localhost:8000/data/${id}`)
        .then((data) => {
            setload(false)
            setproductdata(data)
          })
          .catch((err) => console.log(err))
      }, [])
  return (
    <div>
    <h1>Description</h1>
    {productdata.map((el)=>(<Link to={`/description/${el.id}`} key={el.id}>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={productdata.image} style={{height:"200px" , width:"100%"}}/>
          <Card.Body>
            <Card.Title>{productdata.title}</Card.Title>
            <Card.Text>
              {productdata.description}
            </Card.Text>
            <Card.Text>
              {productdata.category}
            </Card.Text>
            <Card.Text>
              {productdata.price}
            </Card.Text>
            <Card.Text>
              {productdata?.rating?.rate}
            </Card.Text>
          </Card.Body>
        </Card>
        
      </div>
      </Link>
      ))}
        
    </div>
  )
}

export default ProductDetails

